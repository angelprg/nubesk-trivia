import React from "react";
import logo from "./../assets/logo-light.png";

const Counter = ({ burneds }) => {
  return (
    <div className="counter bg-dark text-light d-flex justify-content-between">
      <div>
        <img alt="logo" src={logo} />
      </div>
      <div>Burned questions: {burneds}</div>
    </div>
  );
};

export default Counter;
