import React, { useState } from "react";
import Card from "../components/Card/Card";
import ButtonAddCard from "../components/ButtonAddCard/ButtonAddCard";
import { cardsArr } from "..//data/cardsDataArr";
import styles from "./cardsgame.module.scss";

const CardsGame = () => {
  const [isHideAllAnswers, setIsHideAllAnswers] = useState(false);
  const cardDescribe = cardsArr;

  const handleHideAllAnswers = () => {
    setIsHideAllAnswers(!isHideAllAnswers);
  };

  return (
    <>
      <div className={styles.buttonHideTranslationContainer}>
        {isHideAllAnswers ? (
          <button
            onClick={handleHideAllAnswers}
            className={styles.buttonHideTranslation}
          >
            Click here - and you can see the answers
          </button>
        ) : (
          <button
            onClick={handleHideAllAnswers}
            className={styles.buttonHideTranslation}
          >
            {" "}
            Hide all answers
          </button>
        )}
      </div>

      <div className={styles.cardsContainer}>
        {cardDescribe.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            photo={card.photo}
            mean={card.mean}
            question={card.question}
            translate={card.translate}
            transcript={card.transcript}
            theme={card.theme}
            sample={card.sample}
            isHideAllAnswers={isHideAllAnswers}
          />
        ))}

        <ButtonAddCard />
      </div>
    </>
  );
};

export default CardsGame;
