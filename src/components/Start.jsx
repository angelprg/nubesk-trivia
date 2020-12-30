import React from "react";

const Start = ({ handleStart }) => {
  return (
    <div className="text-center">
      <div
        class="btn btn-primary btn-lg m-5 "
        role="button"
        onClick={handleStart}
      >
        START GAME
      </div>
    </div>
  );
};

export default Start;
