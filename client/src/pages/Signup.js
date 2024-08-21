import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signupimg from "../assets/signupimg.png";
import GoogleAuth from "../components/GoogleAuth";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const generateProfilePicture = (letter) => {
    const svg = `
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="#007bff"/>
            <text x="100" y="125" font-size="100" font-family="sans-serif" fill="#ffffff" text-anchor="middle">${letter}</text>
        </svg>`;
    return `data:image/svg+xml;base64,${btoa(svg)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.Name || !formData.email || !formData.password) {
      return setErrorMsg("All fields are required!");
    }

    const firstLetter = formData.Name.charAt(0).toUpperCase();
    const profilePicture = generateProfilePicture(firstLetter);

    // Add profile picture to formData
    const formDataWithPicture = { ...formData, profilePicture };

    try {
      setLoading(true);
      setErrorMsg(null);
      const res = await fetch("/server/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataWithPicture),
      });

      const data = await res.json();
      if (!res.ok) {
        setLoading(false);
        return setErrorMsg(data.message || "Sign-up failed.");
      }

      localStorage.setItem("Users", JSON.stringify(formDataWithPicture));
      setLoading(false);
      navigate("/Login");
    } catch (error) {
      setLoading(false);
      setErrorMsg("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-2 max-w-3xl mx-auto shadow-xl dark:shadow-gray-800 flex-col md:flex-row md:items-center gap-5">
        {/* left side */}
        <div className="flex-1">
          <img
            className="h-auto rounded-lg"
            src={signupimg}
            alt="image description"
          />
        </div>
        {/* right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Name" />
              <TextInput
                type="text"
                placeholder="username"
                id="Name"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="Email"
                id="email"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
                required
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
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign-Up"
              )}
            </Button>
            <GoogleAuth />
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an Account?</span>
            <Link to="/Login" className="text-blue-500">
              Sign-In
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
