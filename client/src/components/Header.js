/* eslint-disable react/no-unescaped-entities */
// import React from 'react'

import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { useRef } from "react";

export default function Header() {
  const path = useLocation().pathname;
  const blogRef = useRef(null);

  const scrollToBlogs = () => {
    if (blogRef.current) {
      blogRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/login">
          <Button gradientDuoTone="purpleToBlue" outline>
            SignIn
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="">Projects</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/"} as={"div"} >
          <Link to="" onClick={scrollToBlogs()}>Blogs</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
