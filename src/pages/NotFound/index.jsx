import React from "react";
import Button from "../../shared/Button";
import NotFoundImg from "../../assets/404.svg";
const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-[84vh] ">
      <div className="text-center p-8 bg-white ">
        {/* Illustration */}
        <div className="mb-8">
          <img src={NotFoundImg} alt="404" className="w-72 h-auto mx-auto" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Oops! Page Not Found
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 mb-6">
          The page you are looking for might have been moved or deleted.
        </p>

        {/* Button to return to home */}
        <a href="/" className="w-full flex items-center justify-center">
          <Button text={"Go Back To Home"} />
        </a>
      </div>
    </div>
  );
};

export default NotFound;
