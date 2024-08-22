import React, { useEffect } from "react";
import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Redux/Theme/themeSlice";
import { logoutStart,logoutSuccess } from "../Redux/User/UserSlice";
import  { useAuth } from "../context/AuthProvider";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const[authUser]=useAuth()

  const handleLogout = () => {
    try {
      // Dispatch the logout action to clear the currentUser state in Redux
      dispatch(logoutStart());

      // Remove user information from localStorage
      // localStorage.removeItem("Users");
      dispatch(logoutSuccess());
      localStorage.removeItem("Users");
      // Navigate to the projects page or any other page
      navigate('/', { replace: true });

      // Optionally reload the page to reset the application state
      window.location.reload();

      // Optionally, display a toast notification for success (if you're using a toast library)
      // toast.success("Logout Successfully");
    } catch (error) {
      // Handle errors if any occur during the logout process
      console.error("Error during logout: ", error);

      // Optionally, display a toast notification for error
      // toast.error("Error: " + error);
    }
  };

  useEffect(()=> {
    console.log(authUser)
  },[])

  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-green-500 via-lightgreen-500 to-yellow-500 rounded-lg text-white">
          NGO's
        </span>
        Name
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill onClick={() => { dispatch(toggleTheme()) }}>
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button>
        {/* <Link to="/"> */}
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="User" img={currentUser.profilePicture} rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">@{currentUser.Name}</span>
              </Dropdown.Header>
              <Link to={"/dashboard?tab=profile"}>
                <Dropdown.Item> Profile </Dropdown.Item>
              </Link>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout}>Signout</Dropdown.Item>
            </Dropdown>
          ) : (
            <Button gradientDuoTone="purpleToBlue" outline onClick={(()=>{navigate('/Login')})}>
              SignIn
            </Button>
          )}
        {/* </Link> */}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link as={"div"}>
          <Link to="">About</Link>
        </Navbar.Link>
        <Navbar.Link as={"div"}>
          <Link to="">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
