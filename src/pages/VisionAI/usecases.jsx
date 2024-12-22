import React, { useState } from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const points = [
  {
    title: "Object Localization and Segmentation",
    description: "Description for Object Localization and Segmentation",
  },
  {
    title: "Document Understanding",
    description: "Description for Document Understanding",
  },
  {
    title: "Visual Question Answering",
    description:
      "Providing accurate answers to questions based on image content.",
  },
  {
    title: "Image Recognition via Instructions",
    description: "Description for Image Recognition via Instructions",
  },
  {
    title: "Image Captioning",
    description: "Description for Image Captioning",
  },
];

const CircleDiagram = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <motion.div
        className="relative flex items-center justify-center w-64 h-64 rounded-full border-2 border-gray-300"
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        onDragEnd={(event, info) => {
          const newIndex = (activeIndex + 1) % points.length;
          setActiveIndex(newIndex);
        }}
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          {points.map((point, index) => (
            <motion.div
              key={index}
              className={`w-16 h-16 flex items-center justify-center rounded-full ${
                index === activeIndex ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {point.title}
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold">{points[activeIndex].title}</h2>
        <p className="text-gray-600">{points[activeIndex].description}</p>
      </div>
    </div>
  );
};

export default CircleDiagram;
