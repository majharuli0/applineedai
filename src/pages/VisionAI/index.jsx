import React, { useState, useEffect } from "react";
import img from "../../assets/vision-ai/header-img.svg";
import f1 from "../../assets/vision-ai/features-icons/1.svg";
import f2 from "../../assets/vision-ai/features-icons/2.svg";
import f3 from "../../assets/vision-ai/features-icons/3.svg";
import f4 from "../../assets/vision-ai/features-icons/4.svg";
import f5 from "../../assets/vision-ai/features-icons/5.svg";
import leaderboard from "../../assets/vision-ai/leaderboard.png";
import overview from "../../assets/vision-ai/overview.png";
import { LuEye } from "react-icons/lu";
import { LuMoveUpRight } from "react-icons/lu";
import Button from "../../shared/Button";
import CircularSpinner from "./usecases";
import { div } from "framer-motion/client";
export default function Vision() {
  const keyFeatures = [
    {
      id: 1,
      icon: f1,
      title: (
        <>
          Multi-modal <br /> Understanding
        </>
      ),
      description:
        "By learning from both images and text, these models can perform tasks that require an understanding of visual and textual information simultaneously.",
    },
    {
      id: 2,
      icon: f2,
      title: (
        <>
          {" "}
          Generative <br /> Abilities
        </>
      ),
      description:
        "They can generate descriptive text outputs from image inputs, making them suitable for tasks such as image captioning and visual storytelling.",
    },
    {
      id: 3,
      icon: f3,
      title: (
        <>
          Zero-shot <br /> Capabilities
        </>
      ),
      description:
        "These models can generalize well to new, unseen tasks without requiring extensive retraining, thanks to their broad learning from diverse datasets.",
    },
    {
      id: 4,
      icon: f4,
      title: (
        <>
          Flexible <br /> Adaptability
        </>
      ),
      description:
        "They are applicable in various scenarios, including visual question answering, document understanding, chatting about images, and more.",
    },
    {
      id: 5,
      icon: f5,
      title: (
        <>
          Spatial <br /> Awareness
        </>
      ),
      description:
        "Some models are capable of recognizing and describing spatial properties within images, providing outputs such as bounding boxes or segmentation masks.",
    },
  ];
  const points = [
    {
      id: 1,
      title: "Visual Question Answering",
      description:
        "Providing accurate answers to questions based on image content.",
    },
    {
      id: 2,
      title: "Document Understanding",
      description: "Extracting meaningful insights from documents effectively.",
    },
    {
      id: 3,
      title: "Image Recognition via Instructions",
      description:
        "Recognizing objects and patterns from instructions in images.",
    },
    {
      id: 4,
      title: "Object Localization and Segmentation",
      description: "Pinpointing and segmenting objects accurately in images.",
    },
    {
      id: 5,
      title: "Image Captioning",
      description:
        "Generating descriptive captions for given images automatically.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  // Autoplay logic
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % points.length);
      }, 3000); // Change active point every 3 seconds
      return () => clearInterval(interval);
    }
  }, [isPaused, points.length]);

  const handleMouseEnter = (index) => {
    setIsPaused(true); // Pause autoplay
    setActiveIndex(index); // Set hovered point as active
  };

  const handleMouseLeave = () => {
    setIsPaused(false); // Resume autoplay
  };
  const [currentscreenwidth, setCurrentscreenwidth] = useState(
    window.innerWidth
  );
  return (
    <>
      <section
        id="vision_ai-header"
        className="flex flex-col gap-1 justify-center items-center  py-12 px-2"
      >
        <h1 className="md:text-H1-bold text-H2-bold text-text">Vision AI</h1>
        <p className="text-body-1 md:text-body-2 text-text-light max-w-xl text-center">
          Transform your data into actionable insights with our cutting-edge
          Vision AI solutions.
        </p>
      </section>
      <section className="flex flex-col-reverse md:flex-row  items-center  gap-10 justify-between max-w-[1440px] mx-auto p-2 py-20">
        <div className="left max-w-[580px] flex flex-col gap-2">
          <h1 className="md:text-H2-bold text-H3-bold text-text">
            What are{" "}
            <span className="text-primary"> Large Vision Language</span> Models?
          </h1>
          <p className="text-body-1 md:text-body-2 text-text-light ">
            Large vision language models are a new type of AI that can
            understand and generate text based on images. They can do more than
            just recognize images.
          </p>
        </div>
        <div className="right">
          <img src={img} alt="" />
        </div>
      </section>
      <section className="features flex flex-col justify-center gap-8 items-center max-w-[1440px] mx-auto  py-14 px-2">
        <h1 className="md:text-H2-bold text-H3-bold text-text">
          Key <span className="text-primary">Features </span>and Capabilities
        </h1>
        <div className="features-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {keyFeatures.map((feature) => (
            <div
              key={feature.id}
              className="item max-w-[380px] w-full bg-white p-4 flex flex-col gap-4 border border-[#ECF0FF] shadow-[6px_5px_0px_0px_rgba(234,239,255)] hover:shadow-[12px_11px_0px_0px_rgba(234,239,255)] transition-all duration-200 ease-in-out"
            >
              <div className="icon">
                <img src={feature.icon} alt="" />
              </div>
              <div className="text flex flex-col gap-2 flex-grow">
                <h2 className="text-H3-bold text-text">{feature.title}</h2>
                <p className="text-body-2 text-text-light">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-16">
        <div className="max-w-[740px] mx-auto py-14 px-2 flex flex-col gap-4">
          <h1 className="md:text-H2-bold text-H3-bold text-text text-center">
            Applications and Use Cases
          </h1>
          <p className="text-body-1 md:text-body-2 text-text-light text-center">
            Large vision language models are a new type of AI that can
            understand and generate text based on images. They can do more than
            just recognize images.
          </p>
        </div>
        {currentscreenwidth < 510 ? (
          <div className="flex flex-col gap-2">
            {points.map((point, index) => (
              <div
                key={point.id}
                className={`flex gap-4 items-center px-4 group ${
                  (index + 1) % 2 === 0 ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div className="!w-[160px] !h-[160px]  rounded-full border text-center group-hover:bg-primary group-hover:shadow-[12px_15px_25px_10px_rgba(41,88,255,0.15)]  border-[#ECF0FF] flex items-center justify-center transition-all duration-200 ease-in-out ">
                  <p className="!w-[160px] text-text  group-hover:text-white text-body-1 font-semibold">
                    {point.title}
                  </p>
                </div>
                <p className="w-fit text-text-light text-body-1">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="circularPoints relative flex items-center justify-center my-[200px]">
            <div className="pointDetails relative flex items-center justify-center w-[300px] h-[300px] bg-[#FAFAFB] rounded-full ">
              <div className="text-center px-6">
                <p className="text-text">{points[activeIndex].description}</p>
              </div>
            </div>
            <div className="absolute flex justify-center items-center w-[0px] h-[800px]">
              {points.map((point, index) => {
                // for circular manner
                // Adjust angle to start with the first item at the top center (90 degrees or π/2 radians)
                const angle =
                  (index / points.length) * 2 * Math.PI - Math.PI / 2; // Offset by -π/2
                const x =
                  currentscreenwidth < 568
                    ? Math.cos(angle) * 175
                    : Math.cos(angle) * 230;
                const y =
                  currentscreenwidth < 568
                    ? Math.sin(angle) * 175
                    : Math.sin(angle) * 230;

                return (
                  <div
                    key={point.id}
                    className={`point absolute overflow-hidden cursor-pointer flex items-center justify-center w-[158px] h-[158px] rounded-full transition-all duration-300 ease-in-out ${
                      activeIndex === index
                        ? "bg-blue-500 text-white border border-transparent shadow-[12px_15px_25px_10px_rgba(41,88,255,0.15)]"
                        : "bg-transparent border border-[#DBE3FF] text-text-light hover:bg-blue-300 hover:text-white"
                    }`}
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span className="text-center text-sm ">{point.title}</span>
                    <div
                      className={`absolute ${
                        activeIndex === index ? "bottom-7" : "-bottom-10"
                      } transition-all duration-300 ease-in-out `}
                    >
                      <LuEye color="white" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>
      <section
        id="leadboard"
        className="flex flex-col gap-2 bg-primary justify-center items-center py-12 mt-12 px-2"
      >
        <div className="header max-w-[630px] mx-auto p-4 flex flex-col gap-2">
          <h2 className="md:text-H2-bold text-H3-bold text-white text-center w-full">
            Leaderboard calculations
          </h2>
          <p className="text-body-1 md:text-body-2 text-white/70 text-center">
            We'd love to discuss your ideas and answer any questions you have.
            Reach out to start the conversation!
          </p>
        </div>
        <img src={leaderboard} alt="" className="max-w-[1320px] w-full " />
      </section>

      <section className="max-w-[1440px] mx-auto p-2 py-20 flex flex-col gap-16 ">
        <div className="flex flex-col-reverse md:flex-row  items-center  gap-10 justify-between ">
          <div className="left max-w-[580px] flex flex-col gap-2">
            <h1 className="md:text-H2-bold text-H3-bold text-text">
              What are{" "}
              <span className="text-primary"> Large Vision Language</span>{" "}
              Models?
            </h1>
            <p className="text-body-1 md:text-body-2 text-text-light ">
              Large vision language models are a new type of AI that can
              understand and generate text based on images. They can do more
              than just recognize images.
            </p>
          </div>
          <div className="right">
            <img src={img} alt="" />
          </div>
        </div>

        <div className="max-w-[800px] w-full flex flex-col gap-4 mt-10 mx-auto items-center justify-center">
          <p className="text-body-1 md:text-body-2 text-text-light text-center">
            The Hugging Face Hub hosts a diverse array of open-source vision
            language models, with some of the most notable ones highlighted in
            the table below.
          </p>
          <img src={overview} alt="" className="w-full" />
          <p className="text-body-1 md:text-body-2 text-text-light italic text-center">
            Unless specified otherwise, all models have been trained primarily
            on English data.
          </p>
        </div>
      </section>
      <section
        id="getintouch"
        className="flex flex-col gap-2 bg-primary justify-center items-center py-12 mt-12"
      >
        <div className="header max-w-[630px] mx-auto p-4">
          <h2 className="md:text-H2-bold text-H3-bold text-white text-center w-full">
            Get in Touch!
          </h2>
          <p className="text-body-1 md:text-body-2 text-white/70 text-center">
            We'd love to discuss your ideas and answer any questions you have.
            Reach out to start the conversation!
          </p>
        </div>
        <Button
          text="Get In Touch"
          variant="white"
          iconPosition="right"
          Icon={LuMoveUpRight}
          className="w-fit z-10"
        />
      </section>
    </>
  );
}
