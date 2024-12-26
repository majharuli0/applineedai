import React from "react";
import hr1 from "../../assets/industries/1.png";
import hr2 from "../../assets/industries/2.png";
import hr3 from "../../assets/industries/3.png";
import hr4 from "../../assets/industries/4.png";
import hr5 from "../../assets/industries/5.png";
import hr6 from "../../assets/industries/6.png";
import ar1 from "../../assets/industries/artical/1.png";
import ar2 from "../../assets/industries/artical/2.png";
import ar3 from "../../assets/industries/artical/3.png";
import ar4 from "../../assets/industries/artical/4.png";
import ar5 from "../../assets/industries/artical/5.png";
import ar6 from "../../assets/industries/artical/6.png";
import ar7 from "../../assets/industries/artical/7.png";
import Button from "../../shared/Button";
import { LuMoveUpRight } from "react-icons/lu";
export default function index() {
  const articles = [
    {
      title: (
        <>
          Visual AI in{" "}
          <span className="highlight text-primary"> Agriculture</span>{" "}
        </>
      ),
      description: (
        <>
          AI is like a master gardener, watching over the farm from seed to
          harvest. Drones with cameras can help farmers see what's wrong with
          their crops and find diseases early. This lets farmers take action
          quickly and lose less crops. AI-driven machines identify ripe fruits
          and vegetables for harvesting.
          <br />
          <br />
          Vision systems differentiate between crops and weeds, allowing robots
          to target and remove weeds without harming crops. By analyzing crop
          images, AI can accurately predict yields. Additionally, vision systems
          monitor livestock health and behavior.
        </>
      ),
      image: ar1,
    },
    {
      title: (
        <>
          Visual AI in{" "}
          <span className="highlight text-primary"> Automotive</span>{" "}
        </>
      ),
      description: (
        <>
          In the automotive industry, precision is key. Computer vision is
          essential for autonomous vehicles, helping them to recognize road
          signs, detect obstacles, and navigate safely. AI vision systems check
          car parts for defects, ensuring high-quality components and reducing
          recalls.
          <br />
          <br />
          Advanced driver-assistance systems make cars safer. They can warn
          drivers if they are about to leave a lane or if there is a crash.
          Vision systems can also help cars last longer by monitoring parts
          inside them. AI-powered cameras can help traffic flow better.
        </>
      ),
      image: ar2,
    },
    {
      title: (
        <>
          Visual AI in{" "}
          <span className="highlight text-primary"> Healthcare & Medicine</span>{" "}
        </>
      ),
      description: (
        <>
          Computer vision is changing healthcare by using AI and deep learning
          for medical imaging. AI can spot diseases like cancer, fractures, and
          neurological conditions in X-rays, MRIs, and CT scans. Vision systems
          help surgeons during procedures, showing them what to do in real time.
          <br />
          <br />
          In hospitals, cameras monitor patients for signs of distress.
          AI-powered vision tools make it easier for people to get healthcare
          advice remotely. Vision systems also analyze biological samples in
          pharmaceutical research, helping to speed up the drug discovery and
          development process.
        </>
      ),
      image: ar3,
    },
    {
      title: (
        <>
          Visual AI in{" "}
          <span className="highlight text-primary">Manufacturing</span>{" "}
        </>
      ),
      description: (
        <>
          Computer vision is changing healthcare by using AI and deep learning
          for medical imaging. AI can spot diseases like cancer, fractures, and
          neurological conditions in X-rays, MRIs, and CT scans. Vision systems
          help surgeons during procedures, showing them what to do in real time.
          <br />
          <br />
          In hospitals, cameras monitor patients for signs of distress.
          AI-powered vision tools make it easier for people to get healthcare
          advice remotely. Vision systems also analyze biological samples in
          pharmaceutical research, helping to speed up the drug discovery and
          development process.
        </>
      ),
      image: ar4,
    },
    {
      title: (
        <>
          Visual AI in{" "}
          <span className="highlight text-primary"> Retail & E-commerce</span>{" "}
        </>
      ),
      description: (
        <>
          Computer vision is changing healthcare by using AI and deep learning
          for medical imaging. AI can spot diseases like cancer, fractures, and
          neurological conditions in X-rays, MRIs, and CT scans. Vision systems
          help surgeons during procedures, showing them what to do in real time.
          <br />
          <br />
          In hospitals, cameras monitor patients for signs of distress.
          AI-powered vision tools make it easier for people to get healthcare
          advice remotely. Vision systems also analyze biological samples in
          pharmaceutical research, helping to speed up the drug discovery and
          development process.
        </>
      ),
      image: ar5,
    },
    {
      title: (
        <>
          Visual AI in{" "}
          <span className="highlight text-primary">Safety & Security</span>{" "}
        </>
      ),
      description: (
        <>
          Computer vision is changing healthcare by using AI and deep learning
          for medical imaging. AI can spot diseases like cancer, fractures, and
          neurological conditions in X-rays, MRIs, and CT scans. Vision systems
          help surgeons during procedures, showing them what to do in real time.
          <br />
          <br />
          In hospitals, cameras monitor patients for signs of distress.
          AI-powered vision tools make it easier for people to get healthcare
          advice remotely. Vision systems also analyze biological samples in
          pharmaceutical research, helping to speed up the drug discovery and
          development process.
        </>
      ),
      image: ar6,
    },
    {
      title: (
        <>
          Visual AI in{" "}
          <span className="highlight text-primary">Transportation</span>{" "}
        </>
      ),
      description: (
        <>
          Computer vision makes transportation safer, more efficient, and more
          convenient for passengers and operators. AI cameras analyze traffic
          and optimize signal timing to improve traffic flow. Vision systems
          check tracks and trains for defects, preventing accidents and keeping
          trains running smoothly.
          <br />
          <br />
          Cameras monitor passengers on public transit, improving schedules and
          service. Vision-based toll systems identify and charge vehicles,
          reducing wait times and improving toll roads. AI finds parking and
          shows drivers where it is, so they don't have to look.
        </>
      ),
      image: ar7,
    },
  ];
  return (
    <>
      {/* Hero Section  where we will have a title and a description  and action button at the center and around this we will have some images like 6 images in a circluar pattern */}
      <section
        id="industries"
        className="flex flex-col items-center gap-6 justify-center max-w-[630px] mx-auto p-4 text-center"
      >
        <div className="text flex flex-col gap-4 industries z-10 max-w-[530px]">
          <h1 className="md:text-H2-bold text-H3-bold text-text text-center w-full">
            Computer vision boosts productivity and innovation
          </h1>
          <p className="text-body-1 md:text-body-2  text-text-light text-center">
            Unlock the potential of your visual data with our comprehensive
            Computer Vision solutions. From image recognition to automated
            visual analysis.
          </p>
        </div>
        <Button
          text="Get In Touch"
          variant="primary"
          iconPosition="right"
          Icon={LuMoveUpRight}
          className="w-fit z-10"
          onClick={() => (window.location.href = "/contact-us")}
        />
        <div id="images">
          <img src={hr2} alt="" />
          <img src={hr1} alt="" />
          <img src={hr5} alt="" />
          <img src={hr3} alt="" />
          <img src={hr4} alt="" />
          <img src={hr6} alt="" />
        </div>
      </section>

      <section id="industries-articles" className="flex flex-col gap-6">
        <div className="header">
          <h2 className="md:text-H1-bold text-H2-bold text-text text-center w-full">
            Build Your AI Apps for Any
          </h2>
          <p className="text-body-1 md:text-body-2 text-text-light text-center">
            Unlock the potential of your visual data with our comprehensive
            Computer Vision solutions. From
          </p>
        </div>
        <div className="content flex flex-col gap-20">
          {articles.map((article, index) => (
            <IndustriesArticle
              key={index}
              {...article}
              side={index % 2 === 0 ? "!flex-row" : "!flex-row-reverse"}
            />
          ))}
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
          onClick={() => (window.location.href = "/contact-us")}
        />
      </section>
    </>
  );
}

export const IndustriesArticle = ({ title, description, image, side }) => {
  return (
    <div
      className={`article flex flex-col md:flex-row items-center gap-16 justify-between max-w-[1440px] mx-auto p-4 ${side}`}
    >
      <div className="left max-w-[700px] flex flex-col gap-6 justify-center items-center md:items-start">
        <div className="text flex flex-col gap-4">
          <h1 className="text-H2-bold font-normal text-left text-text">
            {title}
          </h1>
          <p className="text-body-1 md:text-body-2 text-left text-text-light">
            {description}
          </p>
        </div>
        <Button
          text="Learn More"
          variant="primary"
          iconPosition="right"
          Icon={LuMoveUpRight}
          className="w-fit"
          onClick={() =>
            (window.location.href = "https://blog.applineedai.com/")
          }
        />
      </div>
      <div className="right">
        <img
          src={image}
          alt="hero"
          className="md:w-[100%]  w-[100%] mx-auto min-w-[350px] max-w-[550px]"
        />
      </div>
    </div>
  );
};
