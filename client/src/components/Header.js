import React, { createContext, useState, useRef } from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Redux/Theme/themeSlice";

// Create the context


export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const {theme} = useSelector((state) => state.theme)
  const dispatch = useDispatch();
  const path = useLocation().pathname;

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
          <Button className="w-12 h-10 hidden sm:inline" color="gray" pill onClick={()=> {dispatch(toggleTheme())}}>
            {theme==='light' ? <FaSun/> : <FaMoon/>}
          </Button>
          <Link to="/login">
            <Button gradientDuoTone="purpleToBlue" outline>
              SignIn
            </Button>
          </Link>
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
