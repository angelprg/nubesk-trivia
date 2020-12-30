import React from "react";

const Counter = ({ burneds }) => {
  return (
    <div className="counter bg-dark text-light">
      Burned questions: {burneds}
    </div>
  );
};

export default Counter;
