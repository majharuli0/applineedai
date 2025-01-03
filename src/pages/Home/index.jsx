import React from "react";
import HeroImage from "../../assets/home/s1.png";
import Button from "../../shared/Button";
import { LuMoveUpRight } from "react-icons/lu";
import { Carousel } from "flowbite-react";
import c1 from "../../assets/home/carousel/1.png";
import c2 from "../../assets/home/carousel/2.png";
import c3 from "../../assets/home/carousel/3.png";
import c4 from "../../assets/home/carousel/4.png";
import c5 from "../../assets/home/carousel/5.png";
import c6 from "../../assets/home/carousel/6.png";
import c7 from "../../assets/home/carousel/7.png";
import steps from "../../assets/home/services/steps.png";
import s1 from "../../assets/home/services/1s.png";
import s2 from "../../assets/home/services/2s.png";
import s3 from "../../assets/home/services/3s.png";
import s4 from "../../assets/home/services/4s.png";
import s5 from "../../assets/home/services/5s.png";
import s6 from "../../assets/home/services/6s.png";

import br1 from "../../assets/brands/al.png";
import br2 from "../../assets/brands/am.png";
import br3 from "../../assets/brands/gg.png";
import br4 from "../../assets/brands/ms.png";
import br5 from "../../assets/brands/mt.png";

export default function index() {
  const leftItems = [
    {
      title: "Consultation and Discovery",
      description:
        "We start by understanding your business challenges and goals. This helps us determine how computer vision technology can help you.",
    },
    {
      title: "Modeling and Training",
      description:
        "Our team develops a custom computer vision model. We train it using prepared data, making it better at recognizing and interpreting visual patterns.",
    },
    {
      title: "Integration and Deployment",
      description:
        "Once validated, the computer vision model is deployed into your existing systems. It integrates seamlessly and starts delivering insights immediately.",
    },
  ];
  const rightItems = [
    {
      title: "Data Collection and Preparation",
      description:
        "We collect relevant visual data from various sources and prepare it for further processing.",
    },
    {
      title: "Testing and Validation",
      description:
        "The trained model is tested against new data to make sure it works well. If it doesn't, we make adjustments.",
    },
    {
      title: "Ongoing Support and Optimization",
      description:
        "We provide ongoing support and regular updates to ensure the solution remains effective as your business grows and evolves.",
    },
  ];
  return (
    <>
      <section
        id="hero_header"
        className="flex flex-col md:flex-row items-center gap-6 justify-between max-w-[1440px] mx-auto p-4"
      >
        <div className="left max-w-[700px] flex flex-col gap-6 justify-center items-center md:items-start">
          <div className="text flex flex-col gap-4">
            <h1 className="md:text-H1-bold text-H2-bold text-center md:text-left text-text">
              Computer Vision Solutions for Your Business
            </h1>
            <p className="text-body-1 md:text-body-2 text-center md:text-left text-text-light">
              Unlock the potential of your visual data with our comprehensive
              Computer Vision solutions. From image recognition to automated
              visual analysis, our AI-driven services are designed to enhance
              efficiency, accuracy, and decision-making.
            </p>
          </div>
          <Button
            text="Get Started"
            variant="primary"
            iconPosition="right"
            Icon={LuMoveUpRight}
            className="w-fit"
            onClick={() => (window.location.href = "/contact-us")}
          />
        </div>
        <div className="right">
          <img
            src={HeroImage}
            alt="hero"
            className="md:w-[500px] w-[85%] mx-auto min-w-[350px]"
          />
        </div>
      </section>
      <section
        id="get_in_touch_slider"
        className="bg-primary px-4 py-8 md:p-8 md:px-4"
      >
        <div className="max-w-[1440px] mx-auto w-full text-white flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="left max-w-[500px] flex flex-col gap-6 justify-center items-center md:items-start">
            <div className="text flex flex-col gap-4">
              <h1 className="md:text-H2-bold text-H3-bold text-center md:text-left">
                Empower Your Business With ApplineedAI, Build AI Vision
                Applications in Any Industry
              </h1>
              <p className="text-body-1 md:text-body-2 text-center md:text-left opacity-80">
                Let us assist you in maximizing the value of this opportunity.
              </p>
            </div>
            <Button
              text="Get In Touch"
              variant=""
              iconPosition="right"
              Icon={LuMoveUpRight}
              className="w-fit bg-white "
              onClick={() => (window.location.href = "/contact-us")}
            />
          </div>
          <div className="relative home_crsl right w-full md:w-[500px] h-56 sm:h-64 xl:h-80  rounded-3xl !overflow-hidden">
            <Carousel className="">
              <img src={c1} alt="..." />
              <img src={c2} alt="..." />
              <img src={c3} alt="..." />
              <img src={c4} alt="..." />
              <img src={c5} alt="..." />
              <img src={c6} alt="..." />
              <img src={c7} alt="..." />
            </Carousel>
            <div className="absolute inset-0 bg-primary/15"></div>
          </div>
        </div>
      </section>

      <section id="our_services" className="max-w-[1440px] mx-auto px-4 pt-20">
        <div className="heading flex flex-col md:flex-row justify-between items-center ">
          <h1 className="text-H2-bold text-center md:text-left text-text">
            Our Comprehensive <br />
            <span className="text-primary">AI Workflow</span>
          </h1>
          <div className="flex flex-col gap-4 items-center md:items-start mt-4 md:mt-0">
            <p className="text-body-1 md:text-body-1 text-center md:text-left opacity-80 max-w-[500px]">
              Our end-to-end workflow helps you streamline your AI journey from
              data collection to deployment.
            </p>
            <Button
              text="Get In Touch"
              variant="primary"
              iconPosition="right"
              Icon={LuMoveUpRight}
              className="w-fit "
              onClick={() => (window.location.href = "/contact-us")}
            />
          </div>
        </div>
        <div
          id="lr_steps"
          className="steps flex gap-0 max-w-[990px] mx-auto w-full justify-between pt-16"
        >
          <div className="left pt-4">
            {leftItems.map((item, index) => (
              <div
                key={index}
                id={`step_l${index + 1}`}
                className="flex flex-col gap-2 max-w-[351px] w-full"
              >
                <h1 className="text-H3-bold text-text">{item.title}</h1>
                <p className="text-body-1 text-text-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="middle">
            <img src={steps} className="!w-[140px] min-w-[140px]" alt="" />
          </div>
          <div className="right pt-[120px]">
            {rightItems.map((item, index) => (
              <div
                key={index}
                id={`step_r${index + 1}`}
                className="flex flex-col gap-2 text-right max-w-[351px] w-full"
              >
                <h1 className="text-H3-bold text-text">{item.title}</h1>
                <p className="text-body-1 text-text-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div
          id="lr_item"
          className="flex flex-col max-w-[740px] mx-auto w-full mt-20"
        >
          {leftItems.map((leftItem, index) => (
            <React.Fragment key={index}>
              <div className="left flex gap-4 md:gap-8 items-center mb-10">
                <img
                  className="w-[150px]"
                  src={index === 0 ? s1 : index === 1 ? s3 : s5}
                  alt=""
                />
                <div className="flex flex-col gap-2 w-full">
                  <h1 className="text-H3-bold text-text md:text-H3-bold">
                    {leftItem.title}
                  </h1>
                  <p className="text-body-1 text-text-light">
                    {leftItem.description}
                  </p>
                </div>
              </div>
              {rightItems[index] && (
                <div className="right flex flex-row-reverse gap-8 items-center mb-8">
                  <img
                    className="w-[150px]"
                    src={index === 0 ? s2 : index === 1 ? s4 : s6}
                    alt=""
                  />
                  <div className="flex flex-col gap-2 w-full">
                    <h1 className="text-H3-bold text-text">
                      {rightItems[index].title}
                    </h1>
                    <p className="text-body-1 text-text-light">
                      {rightItems[index].description}
                    </p>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      <hr
        className="max-w-[940px] mx-auto mt-14"
        style={{
          border: 0,
          height: "2px",
          background:
            "linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(4, 17, 69, 0.5), rgba(255, 255, 255, 0.5))",
        }}
      />

      <section id="our_clients" className="max-w-[1440px] mx-auto px-4 py-14">
        <h1 className="text-H3-bold text-center text-text/80 max-w-[520px] mx-auto">
          The Most Open AI Vision Infrastructure to Build and Adapt with Ease
        </h1>
        <div className="brands flex flex-wrap  gap-8 items-center justify-center max-w-[900px] mx-auto mt-8">
          <img src={br3} alt="Brand 3" className="h-14 min-w-fit" />
          <img src={br5} alt="Brand 5" className="h-14 min-w-fit" />
          <img src={br1} alt="Brand 1" className="h-14 min-w-fit" />
          <img src={br4} alt="Brand 4" className="h-14 min-w-fit" />
          <img src={br2} alt="Brand 2" className="h-14 min-w-fit" />
          <img src={br1} alt="Brand 1" className="h-14 min-w-fit" />
          <img src={br4} alt="Brand 4" className="h-14 min-w-fit" />
          <img src={br5} alt="Brand 5" className="h-14 min-w-fit" />
          <img src={br2} alt="Brand 2" className="h-14 min-w-fit" />
          <img src={br4} alt="Brand 4" className="h-14 min-w-fit" />
        </div>
      </section>
    </>
  );
}
