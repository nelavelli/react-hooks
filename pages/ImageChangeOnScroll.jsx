import React, { useEffect, useState } from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
  const [currentSpeakerId, setCurrentSpeakerId] = useState(0);
  const [mouseEventCnt, setMouseEventCnt] = useState(0);

  useEffect(() => {
    window.document.title = `Speaker Id : ${currentSpeakerId}`;
    console.log("useEffect : setting title to ", currentSpeakerId);
  }, [currentSpeakerId]);

  return (
    <div>
      <span>Mouse Event Count : {mouseEventCnt} </span>
      {[1124, 187, 823, 1269, 1530].map((speakerId) => {
        return (
          <div
            key={speakerId}
            onMouseOver={() => {
              setCurrentSpeakerId(speakerId);
              setMouseEventCnt(mouseEventCnt + 1);
              console.log("onMouseOver ", speakerId);
            }}
          >
            <ImageToggleOnScroll
              primaryImg={`/images/speakers/bw/Speaker-${speakerId}.jpg`}
              secondaryImg={`/images/speakers/Speaker-${speakerId}.jpg`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageChangeOnScroll;
