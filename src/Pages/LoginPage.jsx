import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const { signInWithGoogle, signInUser, resetPassword } = use(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;

        Swal.fire({
          icon: "success",
          title: "Welcome!",
          html: `
            <p><strong>${user.displayName}</strong></p>
            <p>${user.email}</p>
          `,
          confirmButtonColor: "#f97316",
        });
        navigate("/");
      })
      .catch((error) => {
        let message = "Something went wrong. Please try again.";
        if (error.code === "auth/popup-closed-by-user") {
          message =
            "You closed the Google Sign-In popup before finishing. Please try again.";
        } else if (error.code === "auth/network-request-failed") {
          message = "Network issue! Please check your internet connection.";
        } else if (error.code === "auth/popup-blocked") {
          message =
            "Your browser blocked the sign-in popup. Please allow popups and try again.";
        }
        Swal.fire({
          icon: "error",
          title: "Login Failed!",
          text: message,
          confirmButtonColor: "#ef4444",
        });
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter both email and password!",
      });
      return;
    }

    signInUser(email, password)
      .then((result) => {
        const user = result.user;

        Swal.fire({
          icon: "success",
          title: "Login Successful 🎉",
          html: `
          <p>Welcome, <b>${user.displayName || user.email}</b></p>
          <p>Email: ${user.email}</p>
          <p>Photo: ${user.photoURL || "N/A"}</p>
        `,
          confirmButtonColor: "#ff6900",
        }).then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        let message = "";

        switch (error.code) {
          case "auth/user-not-found":
            message = "No account found with this email.";
            break;
          case "auth/wrong-password":
            message = "Incorrect password. Please try again.";
            break;
          case "auth/invalid-email":
            message = "Please enter a valid email address.";
            break;
          case "auth/too-many-requests":
            message = "Too many attempts. Please try again later.";
            break;
          case "auth/network-request-failed":
            message = "Network error. Please check your internet connection.";
            break;
          case "auth/invalid-credential":
            message = "Please Provide Valid credential.";
            break;
          default:
            message = error.message;
        }

        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: message,
        });
      });
  };

  const handleForgotPassword = () => {
    if (!email) {
      Swal.fire({
        icon: "info",
        title: "Enter Email",
        text: "Please enter your email to reset password.",
        confirmButtonColor: "#f97316",
      });
      return;
    }

    resetPassword(email)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Reset Link Sent",
          text: `A password reset link has been sent to ${email}. Please check your inbox.`,
          confirmButtonColor: "#ff6900",
        });
        setTimeout(() => {
          window.open("https://mail.google.com", "_blank");
        }, 1500);
      })
      .catch((error) => {
        let message = "";
        switch (error.code) {
          case "auth/user-not-found":
            message = "No account found with this email.";
            break;
          case "auth/invalid-email":
            message = "Please enter a valid email address.";
            break;
          case "auth/network-request-failed":
            message = "Network error! Please check your internet connection.";
            break;
          default:
            message = error.message;
        }

        Swal.fire({
          icon: "error",
          title: "Failed to Send Reset Link",
          text: message,
          confirmButtonColor: "#ff6900",
        });
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
          <button
            onClick={handleGoogleSignIn}
            className="btn w-full bg-white text-black border-[#e5e5e5]"
          >
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
