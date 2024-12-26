import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "../../../assets/Logo.svg";
import InputField from "../../../shared/InputField";
import Button from "../../../shared/Button";
export default function Footer() {
  return (
    <footer className="bg-[#F8FAFC] text-text-light py-8   w-full">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Side 1: Logo, Slogan, Social Media Icons */}
        <div className="flex flex-col space-y-4">
          <img src={Logo} alt="Logo" className="h-10 w-[200px]" />
          <p className="text-sm">
            Unlock the potential of your visual data with our comprehensive
            Computer Vision solutions.
          </p>
          <div className="flex gap-4 ">
            <a href="#" className="text-gray-400 hover:text-primary">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Side 2: Major Pages Links */}
        <div className="flex flex-col space-y-2">
          <h4 className="text-btn font-semibold text-primary uppercase mb-2">
            Menu
          </h4>
          <a href="/" className="text-body-1 hover:text-primary">
            Home
          </a>
          {/* <a href="#" className="text-body-1 hover:text-primary">
            About
          </a> */}
          <a href="/industries" className="text-body-1 hover:text-primary">
            Industries
          </a>
          <a href="/services" className="text-body-1 hover:text-primary">
            Services
          </a>
          <a href="/vision-ai" className="text-body-1 hover:text-primary">
            Vision AI
          </a>
          <a href="/contact-us" className="text-body-1 hover:text-primary">
            Contact
          </a>
          <a
            href="https://blog.applineedai.com/"
            className="text-body-1 hover:text-primary"
          >
            Blog
          </a>
        </div>

        {/* Side 3: Help Section Links */}
        <div className="flex flex-col space-y-2">
          <h4 className="text-btn font-semibold text-primary uppercase mb-2">
            Help
          </h4>
          <a
            href="https://blog.applineedai.com/"
            className="text-body-1 hover:text-primary"
          >
            Blog
          </a>
          <a href="/contact-us" className="text-body-1 hover:text-primary">
            Contact Us
          </a>
          {/* <a href="#" className="text-body-1 hover:text-primary">
            Terms and Conditions
          </a>
          <a href="#" className="text-body-1 hover:text-primary">
            Privacy Policy
          </a> */}
        </div>

        {/* Side 4: Newsletter Subscription */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-btn font-semibold text-primary uppercase mb-2">
            Newsletter
          </h4>
          <p className="text-sm">
            Subscribe to our newsletter to get the latest updates.
          </p>
          <form className="flex  flex-row md:flex-col items-start gap-1">
            <InputField
              type="email"
              placeholder="Enter Your Email"
              label={false}
              required
            />
            <Button type="primary" text={"Subscribe"} />
          </form>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center mt-8 text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
