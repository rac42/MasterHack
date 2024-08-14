import React,{useState} from 'react'
import bg from '../assets/NGO.jpg'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";

const Signup = () => {

  const [formData, setFormData] = useState( {
    email:"", password:"",name:"",confirmPassword:""
  })

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);

    function changeHandler(event) {
        setFormData( (prevData) => {
           return { 
                ...prevData, 
                [event.target.name]:event.target.value,
            }
        });
    }

    function submitHandler(event) {
      event.preventDefault();
      console.log("Printing the form data");
      console.log(formData);
    }

  return (
    <div className="flex min-h-screen">
      
    <div className="w-7/12 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}></div>

    <div className="w-5/12 flex flex-col justify-center p-20 bg-magenta-200">
    <form  className="space-y-6" onSubmit={submitHandler}>
      <div>

          <label className="block text-gray-700 text-sm font-medium mb-1">
                  <p>Name<sup className="text-red-500">*</sup></p>
                  <input
                      required
                      type='text'
                      value={formData.name}
                      name="name"
                      onChange={changeHandler}
                      placeholder='Enter full name'
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
          </label>
          </div>

          <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
              <p>Email Address<sup className="text-red-500">*</sup></p>
              <input
                  required
                  type='email'
                  value={formData.email}
                  name="email"
                  onChange={changeHandler}
                  placeholder='Enter email id'
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
          </label>
          </div>

          <div>
          <label>
              <p>Create Password<sup className='text-red-400'>*</sup></p>
              <div className="relative">
              <input
                  required
                  type={showPassword ? ("text") : ("password")}
                  value={formData.password}
                  name='password'
                  onChange={changeHandler}
                  placeholder='Enter password'
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                <span onClick={ () => setShowPassword(!showPassword)}  className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500">
                    {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                  </span>
                  </div>
          </label>
          </div>


          <div>
          <label>
              <p>Confirm Password<sup className='text-red-400'>*</sup></p>
              <div className='relative'>
              <input
                  required
                  type={showPassword1 ? ("text") : ("password")}
                  value={formData.confirmPassword}
                  name="confirmPassword"
                  onChange={changeHandler}
                  placeholder='Confirm Password'
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span onClick={ () => setShowPassword1(!showPassword1)}  className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500">
                    {showPassword1 ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                  </span>
                  </div>
          </label>
          </div>

                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                        Log In
                    </button>
              
          </form>


          <div className="flex items-center my-6">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="mx-4 text-gray-500">or</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <button className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition duration-300 flex items-center justify-center">
                    Sign up with Google
          </button>
              </div>
 </div>
  )
}

export default Signup
