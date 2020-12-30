import React from "react";

const NextQuestion = ({ viewed, handleNext }) => {
  return (
    <button
      disabled={!viewed}
      onClick={handleNext}
      className="btn btn-success btn-lg "
    >
      Next Question
    </button>
  );
};

export default NextQuestion;
