import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Icons for show/hide password

const InputField = ({
  type = "text",
  label,
  placeholder = "",
  value,
  onChange,
  className = "",
  required = false,
  minLength = 0,
  errorMessage = "",
  showLabel = true,
  validate = false,
  ...props
}) => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const handleValidation = (e) => {
    const { value } = e.target;
    setError("");

    // Validation logic
    if (required && value.trim() === "") {
      setError("This field is required");
    }

    if (type === "email" && validate && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setError("Please enter a valid email address");
      }
    }

    if (type === "password" && validate && value && minLength > 0) {
      if (value.length < minLength) {
        setError(`Password must be at least ${minLength} characters`);
      }
    }

    if (onChange) {
      onChange(e);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const renderInputType = () => {
    // Return 'text' if showPassword is true, otherwise return the passed type
    if (type === "password") {
      return showPassword ? "text" : "password";
    }
    return type;
  };

  return (
    <div className={`flex flex-col mb-0 gap-2 ${className}`}>
      {showLabel && label && (
        <label className="text-text mb-0 text-body-2">{label}</label>
      )}
      <div className="relative">
        <input
          type={renderInputType()}
          placeholder={placeholder}
          value={value}
          {...props}
          onChange={(e) => {
            handleValidation(e);
            if (onChange) onChange(e);
          }}
          className={`border-[1.7px] text-body-1 px-3 py-[8.4px] border-border p-2 rounded-[8px] focus:outline-none focus:border-primary transition w-full  ${
            error ? "border-red-500" : ""
          }`}
        />
        {type === "password" && (
          <div
            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <FaEye className="text-gray-500" />
            ) : (
              <FaEyeSlash className="text-gray-500" />
            )}
          </div>
        )}
      </div>
      {(error || errorMessage) && (
        <span className="text-red-500 text-sm mt-1 text-left">
          {errorMessage || error}
        </span>
      )}
    </div>
  );
};

export default InputField;
