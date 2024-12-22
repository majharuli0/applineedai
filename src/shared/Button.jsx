import React from "react";

const Button = ({
  text,
  Icon, // Accepts an icon component
  onClick,
  className = "",
  type = "button",
  disabled = false,
  iconPosition = "left", // Specify icon position (left or right)
  variant = "primary", // New prop to handle button variants
}) => {
  // Determine button styles based on variant
  const baseStyles =
    "flex items-center justify-center px-[16px] py-[11px] rounded-[9px]  transition duration-200 text-white";
  const variantStyles = {
    primary: "text-white! bg-primary hover:bg-primaryDark",
    white: "text-text bg-white border border-none  hover:bg-gray-100 ",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {iconPosition === "left" && Icon && (
        <Icon
          className={`w-3.5 h-3.5 mr-2 text-text ${
            variant == "primary" ? "text-white" : "text-text"
          }`}
          aria-hidden="true"
        />
      )}
      <span
        className={`text-btn ${
          variant == "primary" ? "text-white" : "text-text"
        } text-nowrap`}
      >
        {text}
      </span>
      {iconPosition === "right" && Icon && (
        <Icon
          className={`w-3.5 h-3.5 ml-2 ${
            variant == "primary" ? "text-white" : "text-text"
          }`}
          aria-hidden="true"
        />
      )}
    </button>
  );
};

export default Button;
