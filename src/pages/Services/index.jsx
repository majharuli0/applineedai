import React, { useState } from "react";
import folderpin from "../../assets/services/folderpinner.svg";
import folderpin2 from "../../assets/services/folderpinner2.svg";
import { LuMoveUpRight } from "react-icons/lu";
import { IoGitNetwork } from "react-icons/io5";
import Button from "../../shared/Button";
import VideoPlayer from "../../components/VideoPlayer/index";
import { LuDatabaseBackup } from "react-icons/lu";
import { LuBrainCircuit } from "react-icons/lu";
import { BiGitPullRequest } from "react-icons/bi";
import poster1 from "../../assets/poster.png";
import poster2 from "../../assets/poster.png";
export default function index() {
  const services = [
    {
      id: 1,
      title: "Computer Vision AI",
      description:
        "We create computer vision solutions for businesses. We make apps that can find objects, recognize faces, track movements, and make data that can help people make decisions. We use AI to process and analyze images, giving people insights and making tasks easier.",
    },
    {
      id: 2,
      title: "Embedded Vision Systems",
      description:
        "Our embedded vision systems combine computer vision with compact, efficient hardware for various applications. From smart cameras to IoT devices, we design and deploy solutions that process and analyze images in real time, ensuring faster and more reliable performance.",
    },
    {
      id: 3,
      title: "Industrial Machine Vision",
      description:
        "We provide industrial machine vision solutions that improve manufacturing quality and efficiency. Our systems use high-precision cameras and software to inspect products, detect defects, and ensure consistent quality.",
    },
    {
      id: 4,
      title: "Advanced Retail Vision",
      description:
        "Our retail solutions help retailers improve operations and customer experiences. We offer technologies like automated checkout, shelf monitoring, and customer behavior analysis, helping retailers streamline processes, prevent losses, and personalize shopping experiences.",
    },
    {
      id: 5,
      title: "Image Annotation",
      description:
        "Our image annotation services provide precise and accurate labeling of visual data, essential for training machine learning models. We offer a range of annotation types including bounding boxes, semantic segmentation, and keypoint annotations, ensuring high-quality datasets for your AI and machine learning projects.",
    },
    {
      id: 6,
      title: "Empower Your Vision",
      description: "",
    },
  ];
  const workflow = [
    {
      id: 1,
      icon: <LuDatabaseBackup size={30} className="text-white" />,
      title: "Data Collection and Preparation",
      description:
        "Collect and preprocess data to ensure it’s clean, relevant, and ready for analysis.",
    },
    {
      id: 2,
      icon: <LuBrainCircuit size={30} className="text-white" />,
      title: "Model Development and Training",
      description:
        "Develop and train AI models using machine learning algorithms.",
    },
    {
      id: 3,
      icon: <BiGitPullRequest size={30} className="text-white" />,
      title: "Deployment and Integration",
      description:
        "Deploy the trained AI model into the production environment and integrate it with existing systems.",
    },
  ];
  const [currentPlaying, setCurrentPlaying] = useState(null); // Track the active video

  const handlePlay = (index) => {
    setCurrentPlaying(index); // Set the currently playing video index
  };
  return (
    <>
      <section
        id="service-header"
        className="flex flex-col gap-1 justify-center items-center  py-12 px-2 max-w-[600px] mx-auto text-center"
      >
        <h1 className="md:text-H1-bold text-H2-bold text-text">Services</h1>
        <p className="text-body-1 md:text-body-2 text-text-light max-w-xl text-center">
          Unlock the potential of your visual data with our comprehensive
          Computer Vision solutions.
        </p>
      </section>

      <section
        id="services"
        className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1440px] mt-0 mx-auto px-4 py-20"
      >
        {services.map((item, index) => (
          <div
            className={`folder ${
              services.length - 1 === index ? "bg-[#F4F6FF]" : "bg-[#F5F6F7]"
            } p-6 relative mt-9`}
            key={index}
          >
            <img
              src={services.length - 1 === index ? folderpin2 : folderpin}
              alt=""
              className="absolute -top-10 left-0"
            />
            <h1 className="text-[50px] font-bold text-primary absolute -top-9 left-6 ">
              {services.length - 1 === index ? (
                <LuMoveUpRight size={50} className="text-primary mt-2" />
              ) : (
                "0" + (index + 1)
              )}
            </h1>
            <div
              className={`service-body flex flex-col gap-4 pt-4 h-full  ${
                services.length - 1 === index
                  ? "items-center justify-center"
                  : ""
              }`}
            >
              <h2
                className={`text-H2-bold text-text ${
                  services.length - 1 === index ? "text-center" : ""
                }`}
              >
                {item.title}
              </h2>
              <p className="text-body-1 md:text-body-2 text-text-light">
                {item.description}
              </p>
              {services.length - 1 === index && (
                <Button
                  text="Connect Now"
                  variant="primary"
                  iconPosition="right"
                  Icon={IoGitNetwork}
                  className="w-fit z-10"
                  onClick={() => (window.location.href = "/contact-us")}
                />
              )}
            </div>
          </div>
        ))}
      </section>
      {/* <section
        id="showcase-videos"
        className="flex flex-col gap-12 w-full bg-primary py-20 px-4 items-center justify-center"
      >
        <h1 className="text-H3-bold md:text-H2-bold text-white text-center">
          Explore Real World Application!
        </h1>
        <div
          id="videos"
          className="flex flex-col md:flex-row gap-6 max-w-[1240px] w-full mx-auto text-white"
        >
          <div id="video" className="flex flex-col gap-2 !w-full ">
            <h2 className="text-body-2 md:text-body-3">
              Place the video title here
            </h2>
            <div id="video-player" className="!w-full">
              <VideoPlayer
                index={0}
                currentPlaying={currentPlaying}
                onPlay={handlePlay}
                videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
                poster={poster1}
              />
            </div>
          </div>
          <div id="video" className="flex flex-col gap-2 !w-full ">
            <h2 className="text-body-2 md:text-body-3">
              Place the video title here
            </h2>
            <div id="video-player" className="!w-full">
              <VideoPlayer
                index={1}
                currentPlaying={currentPlaying}
                onPlay={handlePlay}
                videoSrc="https://www.w3schools.com/html/movie.mp4"
                poster={poster2}
              />
            </div>
          </div>
        </div>
        <Button
          text="Explore More"
          variant="white"
          iconPosition="right"
          Icon={LuMoveUpRight}
          className="w-fit z-10"
        />
      </section> */}
      <section
        id="workflow"
        className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1440px] mt-0 mx-auto px-4 py-20 pt-28"
      >
        {workflow.map((item, index) => (
          <div
            className="card bg-[#F5F6F7] p-6 rounded-3xl relative flex flex-col gap-4 pt-16"
            key={index}
          >
            <div className="bg-primary p-4 rounded-full w-fit absolute -top-6 left-6">
              {item.icon}
            </div>
            <h1 className="text-H2-bold text-text">{item.title}</h1>
            <p>{item.description}</p>
          </div>
        ))}
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
          onClick={() => (window.location.href = "/contact-us")}
        />
      </section>
    </>
  );
}
