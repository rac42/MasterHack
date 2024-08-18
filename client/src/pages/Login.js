// import React from 'react'

import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import signupimg from "../assets/signupimg.png";

export default function Login({isAuthenticated, setIsAuthenticated}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMsg("All fields are required!!!");
    }
    try {
      setLoading(true);
      setErrorMsg(null);
      const res = await fetch("/server/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log(res);
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        // console.log(data)
        setLoading(false);
        return setErrorMsg(data.message);
      }
      setLoading(false);
      if(res.ok){
        if(data.role=="admin") {
          console.log(isAuthenticated)
          setIsAuthenticated(true)
          console.log(isAuthenticated)
          navigate('/dashboard')
        }
        // window.location.href = "http://localhost:3001";
        else {
          navigate('/')
        }
      }
    } catch (error) {
      // console.log(error)
      setLoading(false);
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-2 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left side */}
        <div className="flex-1">
          <img
            class="h-auto rounded-lg "
            src={signupimg}
            alt="image description"
          />
        </div>
        {/* right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="">
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="Email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="*********"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone="purpleToBlue"
              type="submit"
              outline
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size='sm'/>
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Login"
              )}
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Dont have an Account?</span>
            <Link to="/SignUp" className="text-blue-500">
              Sign-Up
            </Link>
          </div>
          {errorMsg && (
            <Alert className="mt-5" color="failure">
              {errorMsg}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
