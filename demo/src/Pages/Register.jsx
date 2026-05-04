const Login = () => {
  return (
    <>
      <div className="backgroud">
        <img
          src="login-register-bg.png"
          alt="bg-image"
          className="h-[90vh] w-full object-cover"
        />
      </div>
      <div className="absolute top-8 right-[6%] h-screen flex items-center md:px-4 px-2">
        <div className="w-[80vw] sm:w-100  bg-white rounded-xl sm:py-6 py-3 sm:px-6 px-4 lg:px-10 shadow-lg grid md:gap-5 gap-3 font-inter">
          <div>
            <h1 className="text-(--color-primary) text-3xl text-center font-bold">
              Create Account
            </h1>
            <p className="text-center text-(--color-secondary) mt-2 lg:text-[16px] text-sm">
              Join us as a Customer, Restaurant, or Rider
            </p>
          </div>
          <div className="grid gap-2 ">
            <h4 className="text-md font-semibold opacity-75">Register as:</h4>
            <div className="flex flex-wrap">
              <div className="flex gap-2 mx-2">
                <input type="radio" name="register-as" id="customer" checked />
                <label htmlFor="customer">Customer</label>
              </div>
              <div className="flex gap-2 mx-2">
                <input type="radio" name="register-as" id="restaurant" />
                <label htmlFor="restaurant">Restaurant</label>
              </div>
              <div className="flex gap-2 mx-2">
                <input type="radio" name="register-as" id="rider" />
                <label htmlFor="customer">Rider</label>
              </div>
            </div>
          </div>
          <div className=" grid gap-2 ">
            <label htmlFor="email" className="font-semibold opacity-75">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full  border border-0.5 border-(--color-base-300) px-3 py-2 rounded placeholder:text-(--color-secondary) placeholder:opacity-90 text-sm focus:outline-(--color-primary)  "
            />
          </div>
          <div className=" grid gap-2 ">
            <label htmlFor="password" className="font-semibold opacity-75">
              Password
            </label>
            <div className=" border border-0.5 border-(--color-base-300)  px-3 py-2 rounded placeholder:text-(--color-secondary)placeholder:opacity-90 text-sm flex focus-within:outline-(--color-primary) focus-within:outline-2">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full outline-none"
              />
              <i className="bi bi-eye-fill opacity-85 hover:text-(--color-primary)"></i>
            </div>
          </div>
          <div className="flex justify-between ">
            <div className="flex lg:gap-2 gap-1 items-center">
              <input
                type="checkbox"
                id="remember"
                className="scale-85 lg:scale-90"
              />
              <label
                htmlFor="remember"
                className="text-(--color-secondary)  lg:text-md text-sm"
              >
                Remember
              </label>
            </div>
            <div>
              <a
                href=""
                className="text-(--color-primary) hover:underline lg:text-md text-sm"
              >
                Forgot Password?
              </a>
            </div>
          </div>
          <div>
            <button className="bg-(--color-primary) w-full py-2 text-white text-lg rounded-md">
              Login
            </button>
          </div>
          <div className="flex text-gray-500 items-center gap-2 mt-2">
            <hr className="flex-1  text-gray-400" />
            <span>Don't have an accont</span>
            <hr className="flex-1 text-gray-400" />
          </div>
          <p className="text-(--color-primary) text-center lg:text-md text-sm hover:underline inline">
            Create an account
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
