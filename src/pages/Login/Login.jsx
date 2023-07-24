import React, { useContext } from "react";
import Lottie from "react-lottie";
import animationData from "../../../public/login.json";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { login, googleSignIn, setUser } = useContext(AuthContext);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You have logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        setUser(res.user);
      })
      .then((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <div className="min-h-screen lg:flex items-center justify-center gap-10 bg-gradient-to-r from-teal-400 to-blue-500">
        <div className="flex justify-center mb-4">
          <div className="px-2">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        </div>
        <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Welcome Back!
          </h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete=""
                className="block w-full p-3 rounded-lg bg-gray-100 border border-transparent focus:outline-none focus:bg-white focus:border-teal-400"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete=""
                className="block w-full p-3 rounded-lg bg-gray-100 border border-transparent focus:outline-none focus:bg-white focus:border-teal-400"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white p-3 rounded-lg font-bold hover:bg-teal-600 transition duration-200"
            >
              Log In
            </button>
            <button
              onClick={handleGoogleSignIn}
              type="submit"
              className="w-full bg-orange-400 text-white my-2 p-3 rounded-lg font-bold hover:bg-teal-600 transition duration-200"
            >
              Log In With Google
            </button>
          </form>
          <p className="pt-6 ps-4 text-teal-700 font-sans font-medium ">
            New to the Site?
            <Link to="/register">
              <span className="mx-8 text-orange-700 underline">Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
