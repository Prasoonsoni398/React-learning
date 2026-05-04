import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-(--color-neutral) py-10 pb-15 sm:px-7">
        <div className=" lg:mx-[8%] text-(--color-neutral-content) ">
          <div className="mb-8 px-1 text-sm">
            <p className="text-center">
              --- Your favorite food delivery platform connecting customers with
              restaurants and riders. ---
            </p>
          </div>
          <div className="grid md:grid-cols-5 grid-cols-1 gap-[2%] px-5">
            <div className=" p-4 flex items-center">
              <img src="circle-logo.png" alt="footer-logo" className="h-30"/>
            </div>
            <div className=" p-4">
                <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
                <ul className="list-none grid gap-2 text-sm">
                  <li className="hover:text-(--color-primary) cursor-pointer">Home</li>
                  <li className="hover:text-(--color-primary) cursor-pointer">About</li>
                  <li className="hover:text-(--color-primary) cursor-pointer">Order Now</li>
                </ul>
            </div>
            <div className=" p-4">
                <h4 className="text-lg font-semibold mb-3">For Restaurants</h4>
                <ul className="list-none grid gap-2 text-sm">
                  <li className="hover:text-(--color-primary) cursor-pointer">Partner With Us</li>
                  <li className="hover:text-(--color-primary) cursor-pointer">Restaurant Dashboard</li>
                </ul>
            </div>
            <div className=" p-4">
                <h4 className="text-lg font-semibold mb-3">For Riders</h4>
                <ul className="list-none grid gap-2 text-sm">
                  <li className="hover:text-(--color-primary) cursor-pointer">Become a Rider</li>
                  <li className="hover:text-(--color-primary) cursor-pointer">Become a Rider</li>
                </ul>
            </div>
            <div className=" p-4">
                <h4 className="text-lg font-semibold mb-3">Feedback & Support</h4>
                <ul className="list-none grid gap-2 text-sm">
                  <li className="hover:text-(--color-primary) cursor-pointer">Submit Feedback</li>
                  <li className="hover:text-(--color-primary) cursor-pointer">Help Center</li>
                  <li className="hover:text-(--color-primary) cursor-pointer">Contact Us</li>
                </ul>
            </div>
            
            
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
