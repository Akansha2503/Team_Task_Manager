import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import API from "../services/api";


function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await API.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      alert(error.response.data.message);
    }
  };


  return (

    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 px-4">

      <form
        onSubmit={handleSubmit}
        className="bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-md border border-gray-200"
      >

        {/* HEADING */}
        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Welcome Back
          </h1>

          <p className="text-gray-500">
            Login to continue managing your tasks
          </p>

        </div>


        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 p-3 mb-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleChange}
        />


        {/* PASSWORD */}
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="w-full border border-gray-300 p-3 mb-6 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleChange}
        />


        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-3 rounded-xl font-semibold shadow-md hover:scale-105 transition duration-300"
        >
          Login
        </button>


        {/* REGISTER LINK */}
        <p className="mt-6 text-center text-gray-600">

          Don't have an account?

          <Link
            to="/register"
            className="text-blue-600 font-semibold ml-2 hover:underline"
          >
            Register
          </Link>

        </p>

      </form>

    </div>
  );
}

export default Login;