import React from "react";

const Login = () => {
  return (
    <>
      <div className="h-screen w-full relative">
        <img
          src="login-register-bg.png"
          alt="bg"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute top-0 left-[6%] h-screen flex items-center px-4">
        <div className="w-[80vw] sm:w-100  bg-white rounded-xl py-6 px-6 lg:px-10 shadow-lg grid gap-5 font-inter">
          <div>
            <h1 className="text-(--color-primary) text-3xl text-center font-bold">
              Welcome Back
            </h1>
            <p className="text-center text-(--color-secondary) mt-2 text-sm">
              Login to your Cravings account
            </p>
          </div>

          <div className="grid gap-2">
            <label className="font-semibold opacity-75">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 px-3 py-2 rounded text-sm focus:outline-(--color-primary)"
            />
          </div>

          <div className="grid gap-2">
            <label className="font-semibold opacity-75">Password</label>
            <div className="flex border border-gray-300 px-3 py-2 rounded text-sm focus-within:outline-(--color-primary)">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full outline-none"
              />
              <i className="bi bi-eye-fill opacity-80 cursor-pointer"></i>
            </div>
          </div>

          <div className="flex justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember
            </label>
            <a href="#" className="text-(--color-primary) hover:underline">
              Forgot Password?
            </a>
          </div>

          <button className="bg-(--color-primary) w-full py-2 text-white text-lg rounded-md">
            Login
          </button>

          <div className="flex items-center gap-2 text-gray-500">
            <hr className="flex-1 border-gray-400" />
            <span className="text-sm">Don't have an account</span>
            <hr className="flex-1 border-gray-400" />
          </div>

          <p className="text-(--color-primary) text-center text-sm hover:underline cursor-pointer">
            Create an account
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
