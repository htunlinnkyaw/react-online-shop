import React, { useContext, useEffect, useRef } from "react";
import { DataContext } from "../contexts/DataContext";

const AnimationImage = ({ src, info, setAnimate }) => {
  const { cartBtnInfo } = useContext(DataContext);

  const styles = {
    width: info.width + "px",
    height: info.height + "px",
    left: info.left + "px",
    top: top.left + "px",
  };

  const imgRef = useRef();

  useEffect(() => {
    const keyframe = [
      {
        top: info.top + "px",
        left: info.left + "px",
      },
      {
        top: cartBtnInfo.top + 10 + "px",
        left: cartBtnInfo.left + 10 + "px",
        height: 10 + "px",
        width: 10 + "px",
        rotate: "2turn",
      },
    ];

    const options = {
      duration: 500,
      iterations: 1,
      fill: "both",
    };
    const animation = imgRef.current.animate(keyframe, options);

    const run = () => {
      setAnimate(false);
    };

    animation.addEventListener("finish", run);

    return () => {
      animation.removeEventListener("finish", run);
    };
  }, []);

  return <img style={styles} ref={imgRef} src={src} className="z-40 fixed" />;
};

export default AnimationImage;
