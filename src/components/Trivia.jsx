import React, { useState, useEffect } from "react";
import { Card, Counter, Loader, Error, NextQuestion } from "./index";

const apiUrl = `https://jservice.io/api/random`;

const Trivia = () => {
  const [burneds, setBurneds] = useState(0);
  const [cardData, setCardData] = useState(null);
  const [error, setError] = useState(false);
  const [viewed, setViewed] = useState(false);

  const getNewCard = async () => {
    setError(false);
    setCardData(null);
    setViewed(false);
    try {
      const result = await fetch(apiUrl);
      const data = await result.json();
      setCardData(data[0]);
    } catch {
      setError(true);
    }
  };

  useEffect(() => getNewCard(), []);

  useEffect(() => console.log({ cardData }), [cardData]);

  if (error) return <Error retryHandler={() => getNewCard()} />;

  if (cardData === null) return <Loader />;

  return (
    <>
      <Counter burneds={burneds} />
      <Card
        data={cardData}
        viewed={viewed}
        setViewed={setViewed}
        incBurneds={() => setBurneds(burneds + 1)}
      />
      <NextQuestion viewed={viewed} handleNext={() => getNewCard()} />
    </>
  );
};

export default Trivia;
