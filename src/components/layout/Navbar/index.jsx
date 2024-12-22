import React, { useState } from "react";
import {
  LuMoveUpRight,
  LuMoveRight,
  LuMenu,
  LuX,
  LuSearch,
} from "react-icons/lu";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo.svg";
import Button from "../../../shared/Button";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const Style = {
    itemCss:
      "navbar-item text-nowrap flex items-center gap-[2px] text-text-light hover:text-text text-body-1 rounded-[6px]  px-3  hover:bg-gray-100 hover:text-text ",
  };

  return (
    <>
      <nav className="navbar sticky top-0 z-50 flex  justify-between bg-white py-4 px-4 md:px-4  mx-auto items-center">
        <div className="max-w-[1440px] w-full flex justify-between mx-auto">
          {/* Logo */}
          <div className="flex gap-8 items-center">
            <div className="left flex items-center max-h-[26px]  min-w-[130px]">
              <img
                src={Logo}
                alt="Logo"
                className="max-h-[26px] cursor-pointer"
                onClick={() => navigate("/")}
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-3">
              <Link to="/industries" className={Style.itemCss}>
                Industries
              </Link>
              <Link to="/services" className={Style.itemCss}>
                Services
              </Link>
              <Link to="/vision-ai" className={Style.itemCss}>
                Vision AI
              </Link>
              <Link to="/api" className={Style.itemCss}>
                API
              </Link>
              <Link
                to="https://blog.applineedai.com/"
                className={`${Style.itemCss}`}
              >
                Blog <LuMoveUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* Contact Us Button (desk) */}
          <div className="hidden md:flex gap-1">
            {/* <Button
            onClick={openModal}
            text={"Search"}
            variant="white"
            iconPosition="left"
            Icon={LuSearch}
            className="text-white"
          /> */}
            <Link to="/contact-us">
              <Button
                text={"Contact Us"}
                variant="primary"
                iconPosition="right"
                Icon={LuMoveRight}
                className="text-white"
              />
            </Link>
          </div>

          {/* Hamburger Icon (mo) */}
          <div className="md:hidden flex items-center gap-3">
            {/* <Button
            onClick={openModal}
            text={"Search"}
            variant="white"
            iconPosition="left"
            Icon={LuSearch}
            className="text-white"
          /> */}
            <button onClick={toggleMenu} className="text-2xl pr-2">
              {isOpen ? <LuX /> : <LuMenu />}
            </button>
          </div>

          {/* Mobile Menu with  transn */}
          <div
            className={`fixed gap-5 inset-0 top-14 bg-white p-4 flex flex-col items-center md:hidden transition-all duration-300 ease-in-out
        ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
          >
            <Link to="/industries" className={Style.itemCss}>
              Industries
            </Link>
            <Link to="/services" className={Style.itemCss}>
              Services
            </Link>
            <Link to="/vision-ai" className={Style.itemCss}>
              Vision AI
            </Link>
            <Link to="/api" className={Style.itemCss}>
              API
            </Link>
            <Link
              to="https://blog.applineedai.com/"
              className={`${Style.itemCss}`}
            >
              Blog <LuMoveUpRight size={14} />
            </Link>

            <Button
              text={"Contact Us"}
              variant="primary"
              iconPosition="right"
              Icon={LuMoveRight}
              className="text-white mt-4"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
