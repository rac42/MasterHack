import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import FooterComponent from "./components/FooterComponent";
import Projects from './pages/Projects'
import About from "./pages/About";
import Landing from './pages/Landing';
import { useRef } from "react";
import BlogCollection from "./components/BlogCollection";
import AdminPosts from "./pages/admin_dashboard/AdminPosts";
import Dashboard from "./pages/admin_dashboard/Dashboard";
import Donation from "./pages/admin_dashboard/Donation";
import Growth from "./pages/admin_dashboard/Growth";
import UserList from "./pages/admin_dashboard/UserList";
import Ratio from "./pages/admin_dashboard/Ratio";

function App() {
  const blogRef = useRef(null);
  return (
    <>
      <Header blogRef={blogRef} />
      
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="projects" element={<Projects/>}/>
        <Route path="about" element={<About/>} />


        {/* admin Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="growth" element={<Growth />} />
          <Route path="ratio" element={<Ratio />} />
          <Route path="users" element={<UserList />} />
          <Route path="donations" element={<Donation />} />
          <Route path="adminposts" element={<AdminPosts />} />
        </Route>

      </Routes>


      <FooterComponent />
    </>
  );
}

export default App;
