import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import Swal from "sweetalert2";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
  };
  const handleForgotPassword = () => {
    if (!email) {
      Swal.fire({
        icon: "info",
        title: "Enter Email",
        text: "Please enter your email to reset password.",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Reset Link Sent",
      text: `A password reset link has been sent to ${email}.`,
      confirmButtonColor: "#f97316",
    });
  };

  return (
    <div className="bg-base-100 min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">
          Login to DishDive
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type={showPass ? "text" : "password"}
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full"
              required
            />
            <span
              className="absolute right-3 top-11 cursor-pointer text-gray-500"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </span>
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-orange-500 font-semibold mt-4 link"
            >
              Forgot Password?
            </button>
          </div>

          <button type="submit" className="btn btn-primary w-full mt-2">
            Login
          </button>
        </form>
        <div className="divider">OR</div>
        <div>
          <button className="btn w-full bg-white text-black border-[#e5e5e5]">
            <FcGoogle size={30} />
            Sign in with Google
          </button>
        </div>

        <p className="text-center text-gray-500 mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-orange-500 font-semibold link">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
