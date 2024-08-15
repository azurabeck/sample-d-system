/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Lottie from "lottie-react";

interface AnimationProps {
  src?: any;
  size?: number;
  loop?: boolean;
  autoplay?: boolean;
}

const Animation: React.FC<AnimationProps> = ({
  size = 24,
  loop = false,
  src,
}) => {
  const style = {
    height: size,
    width: size,
  };

  return (
    <Lottie animationData={src} loop={loop} style={style} autoplay={true} />
  );
};

export default Animation;
