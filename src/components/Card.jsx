import React, { useState } from "react";

const Card = ({ data, viewed, setViewed, incBurneds }) => {
  const [viewAnswer, setViewAnswer] = useState(false);
  const date = new Date(data.airdate);

  const handleRevealAnswer = () => {
    if (!viewed) {
      incBurneds();
      setViewed(true);
    }
    setViewAnswer(!viewAnswer);
  };

  return (
    <div className="card d-flex justify-content-center">
      <div className="card-category text-center pb-2 pb-md-3">
        <div className="category-label text-left">Category</div>
        <div>{data.category.title}</div>
      </div>
      <div className="card-body">
        <div className="card-info mb-2 mb-md-5 d-flex justify-content-between">
          <div className="text-left">
            <div className="card-info-label">Air date</div>
            <div>{date.toLocaleDateString()}</div>
          </div>
          <div className="text-right">
            <div className="card-info-label">Difficulty</div>
            <div>{data.value}</div>
          </div>
        </div>
        <div className="question text-left my-2 my-md-3">
          <div className="card-info-label ">
            {!viewAnswer ? "Question" : "Answer"}
          </div>
          <div>{!viewAnswer ? data.question : data.answer}</div>
        </div>
        <div className="text-center" onClick={() => handleRevealAnswer()}>
          {!viewAnswer ? (
            <div className="btn btn-info">Reveal Answer</div>
          ) : (
            <div className="btn btn-warning">View Question</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
