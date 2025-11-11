import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all required fields!",
      });
      return;
    }
    Swal.fire({
      icon: "success",
      title: "Registration Successful",
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Photo URL: ${photo || "N/A"}</p>
        
      `,
      confirmButtonColor: "#f97316",
    }).then(() => {
      setName("");
      setEmail("");
      setPassword("");
      setPhoto("");
      navigate("/login");
    });
  };

  return (
    <div className="bg-base-100 min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">
          Register for DishDive
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Photo URL</label>
            <input
              type="url"
              placeholder="https://example.com/photo.jpg"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>

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
          </div>

          <div className="relative">
            <label className="block text-gray-700 mb-2">
              Confirm Password{" "}
            </label>
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="********"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="input input-bordered w-full"
              required
            />
            <span
              className="absolute right-3 top-11 cursor-pointer text-gray-500"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button type="submit" className="btn btn-primary w-full mt-2">
            Register
          </button>
        </form>
        <div className="divider">OR</div>
        <div>
          <button className="btn w-full bg-white text-black border-[#e5e5e5]">
            <FcGoogle size={30} />
            Sign Up with Google
          </button>
        </div>

        <p className="text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-500 font-semibold link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
