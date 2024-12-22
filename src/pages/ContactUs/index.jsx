import React, { useState, useEffect } from "react";
import Button from "../../shared/Button";
import InputField from "../../shared/InputField";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    companyWebsite: "",
    industry: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const handleValidation = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Enter a valid email address";
      }
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company Name is required";
    }
    if (!formData.industry.trim()) {
      newErrors.industry = "Industry is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Valid if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      setLoading(true);
      sentInfoToMail();
    }
  };
  function sentInfoToMail() {
    axios
      .post("http://localhost:3005/api/m/contact", formData)
      .then((response) => {
        console.log(response);

        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setLoading(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          companyName: "",
          companyWebsite: "",
          industry: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.response.data.error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "", // Clear error for the current field
    }));
  };

  return (
    <>
      <section
        id="vision_ai-header"
        className="flex flex-col gap-1 justify-center items-center py-12 px-2 max-w-[600px] mx-auto text-center"
      >
        <h1 className="md:text-H1-bold text-H2-bold text-text">
          Transform your vision with ApplineedAI
        </h1>
        <p className="text-body-1 md:text-body-2 text-text-light max-w-xl text-center">
          Our AI experts can help with your computer vision projects. We offer
          services at every stage.
        </p>
      </section>

      <section className="max-w-[740px] mx-auto p-2 mb-8">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              type="text"
              name="firstName"
              placeholder="First Name"
              label="First Name"
              value={formData.firstName}
              onChange={handleChange}
              errorMessage={errors.firstName}
              required
            />
            <InputField
              type="text"
              name="lastName"
              placeholder="Last Name"
              label="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              errorMessage={errors.lastName}
              required
            />
            <InputField
              type="email"
              name="email"
              placeholder="Enter Your Email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
              errorMessage={errors.email}
              required
            />
            <InputField
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              label="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              errorMessage={errors.phoneNumber}
              required
            />
            <InputField
              type="text"
              name="companyName"
              placeholder="Company Name"
              label="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              errorMessage={errors.companyName}
              required
            />
            <InputField
              type="text"
              name="companyWebsite"
              placeholder="Company Website (URL)"
              label="Company Website"
              value={formData.companyWebsite}
              onChange={handleChange}
              errorMessage={errors.companyWebsite}
              required={false}
            />
          </div>
          <div className="flex flex-col my-4 w-full">
            <label className="text-text mb-2 text-body-2">
              Select an Industry
            </label>
            <select
              className={`w-full p-2 border rounded-md h-fit border-border text-body-1 ${
                errors.industry ? "border-red-500" : ""
              }`}
              name="industry"
              value={formData.industry}
              onChange={handleChange}
            >
              <option defaultChecked disabled value="">
                Select an Industry
              </option>
              <option value="Agriculture">Agriculture</option>
              <option value="Automotive">Automotive</option>
              <option value="Healthcare & Medicine">
                Healthcare & Medicine
              </option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Retail & E-commerce">Retail & E-commerce</option>
              <option value="Safety & Security">Safety & Security</option>
              <option value="Transportation">Transportation</option>
              <option value="Other">Other</option>
            </select>
            {errors.industry && (
              <span className="text-red-500 text-sm mt-1 text-left">
                {errors.industry}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-text mb-2 text-body-2">Your Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              className={`border-[1.7px] text-body-1 px-3 py-[8.4px] border-border p-2 rounded-[8px] focus:outline-none focus:border-primary transition w-full h-20 ${
                errors.message ? "border-red-500" : ""
              }`}
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <span className="text-red-500 text-sm mt-1 text-left">
                {errors.message}
              </span>
            )}
          </div>
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className={`bg-primary text-white px-6 py-2 rounded-md flex gap-6 items-center ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              } `}
              disabled={loading}
            >
              Submit{" "}
              {loading && (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              )}
            </button>
          </div>
        </form>
      </section>
      <ToastContainer />
    </>
  );
}
