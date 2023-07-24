import React, { useContext, useState } from "react";
import Lottie from "react-lottie";
import animationData from "../../../public/reg.json";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import {} from "firebase/auth";
import Swal from "sweetalert2";

const SignUp = () => {
  const [error, setError] = useState("");

  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password !== confirm) {
      setError("Password does not matched");
    }

    createUser(email, password)
      .then((res) => {
        setUser(res.user);
        form.reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You have logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        //   Update Profile
        updateUserProfile(name)
          .then((res) => {
            console.log(res.user);
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <div className="min-h-screen lg:flex lg:flex-row items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500">
        <div className="lg:w-1/2 order-2 lg:order-1">
          <div className="flex justify-center mb-4 lg:mb-0">
            <div className="px-2">
              <Lottie options={defaultOptions} height={400} width={400} />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-lg order-1 lg:order-2">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Create an Account
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full p-3 rounded-lg bg-gray-100 border border-transparent focus:outline-none focus:bg-white focus:border-teal-400"
                placeholder="Enter your email"
              />
            </div>
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
                className="block w-full p-3 rounded-lg bg-gray-100 border border-transparent focus:outline-none focus:bg-white focus:border-teal-400"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirm"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="confirm"
                name="confirm"
                className="block w-full p-3 rounded-lg bg-gray-100 border border-transparent focus:outline-none focus:bg-white focus:border-teal-400"
                placeholder="Enter your password"
              />
            </div>
            <p className="py-4 text-sm font-thin text-red-600"> {error} </p>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white p-3 rounded-lg font-bold hover:bg-teal-600 transition duration-200"
            >
              Register
            </button>
          </form>
          <p className="pt-6 ps-4 text-teal-700 font-sans font-medium ">
            Already have an account?
            <Link to="/login">
              <span className="mx-8 text-orange-700 underline">Login</span>
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
