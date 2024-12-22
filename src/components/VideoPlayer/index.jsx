import React, { useEffect, useRef } from "react";
import { FaPlay } from "react-icons/fa";

const VideoPlayer = ({ index, currentPlaying, onPlay, videoSrc, poster }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Pause the video if it's not the active one
    if (currentPlaying !== index && videoRef.current) {
      videoRef.current.pause();
    }
  }, [currentPlaying, index]);

  const handlePlayPause = () => {
    if (currentPlaying === index) {
      // Pause if the video is currently playing
      videoRef.current.pause();
      onPlay(null); // Clear the active video
    } else {
      // Play the video and set it as the active one
      videoRef.current.play();
      onPlay(index);
    }
  };

  return (
    <div
      className="relative aspect-w-16 aspect-h-9 w-full max-w-4xl mx-auto bg-primaryLight rounded-2xl overflow-hidden cursor-pointer"
      onClick={handlePlayPause}
    >
      {/* Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full"
        src={videoSrc}
        poster={poster}
        controls={false}
      />

      {/* Play Icon */}
      {currentPlaying !== index && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-15">
          <div className="bg-black/15 p-4 rounded-full">
            <FaPlay size={24} className="text-white " />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
