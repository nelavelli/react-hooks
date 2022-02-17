import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImg="/images/speakers/bw/Speaker-187.jpg"
        secondaryImg="/images/speakers/Speaker-187.jpg"
      />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseOver
        primaryImg="/images/speakers/bw/Speaker-1124.jpg"
        secondaryImg="/images/speakers/Speaker-1124.jpg"
      />
    </div>
  );
};

export default ImageChangeOnMouseOver;
