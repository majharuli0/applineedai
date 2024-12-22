import React from "react";
import Button from "../../shared/Button";
import InputField from "../../shared/InputField";
import cmImage from "../../assets/api/coming-soon.svg";
export default function Api() {
  return (
    <>
      <section
        id="vision_ai-header"
        className="flex flex-col gap-1 justify-center items-center  py-12 px-2 max-w-[700px] mx-auto text-center"
      >
        <img src={cmImage} alt="" className="max-w-[600px] pb-16" />
        <h1 className="md:text-H1-bold text-H2-bold text-text">Coming Soon!</h1>
        <p className="text-body-1 md:text-body-2 text-text-light max-w-xl text-center">
          We are preparing something amazing and exciting for you. We also have
          a special surprise for our subscribers.
        </p>

        <div className="flex flex-col items-center justify-center mt-8">
          <div className="flex items-start justify-center gap-2">
            <InputField
              type="email"
              placeholder="Enter Your Email"
              label={false}
              className="w-[300px]"
              required
            />
            <Button type="submit" variant="primary" text={"Subscribe"} />
          </div>
          <p className="text-body-1 text-text-light ">
            We care about your data in our{" "}
            <a className="text-text !underline cursor-pointer">
              {" "}
              privacy policy
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
