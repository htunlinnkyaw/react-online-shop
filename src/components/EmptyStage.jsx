import React from "react";
import EmptySvg from "../assets/empty.svg";

const EmptyStage = () => {
  return (
    <div className="flex absolute justify-center items-center h-full">
      <div className="text-center">
        <img src={EmptySvg} alt="" />
        <p>There is no item.</p>
      </div>
    </div>
  );
};

export default EmptyStage;
