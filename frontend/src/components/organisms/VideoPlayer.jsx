import React, { useState } from "react";
import LectureList from "../molecules/LectureList";
import { LECTURES } from "../../constants/video";

const VideoPlayer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentVideo = LECTURES[currentIndex];

  // 🔥 Auto-next logic
  const handleEnded = () => {
    if (currentIndex < LECTURES.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="video-player">

      {/* VIDEO */}
      <div className="video-container">
        <video
          src={currentVideo.url}
          controls
          onEnded={handleEnded}
          width="100%"
        />
        <h3>{currentVideo.title}</h3>
      </div>

      {/* LECTURE LIST */}
      <LectureList
        lectures={LECTURES}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />

    </div>
  );
};

export default VideoPlayer;