//import styles from './card.module.scss';
import React, { useState, useEffect, useRef } from "react";
import Translate from "../CardTranslate/CardTranslate";
import TransButton from "../CardTransbutton/TransButton";
import styles from "./card.module.scss";

function Card(props) {
  const [isTranslateCard, setIsTranslateCard] = useState(false);
  const { id, photo, title, mean, translate, transcript, sample, question } =
    props;

  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleShowAnswer = () => {
    setIsTranslateCard(!isTranslateCard);
  };

  const handleHideAnswer = () => {
    setIsTranslateCard(!isTranslateCard);
  };

  if (props.isHideAllAnswers === true) {
    if (isTranslateCard === true) {
      setIsTranslateCard(!isTranslateCard);
    }
  }

  return (
    <div className={styles.card}>
      <img src={photo} className={styles.cardImg} alt="cardImg"></img>
      <div className="card-question">Question: {question}</div>

      {isTranslateCard ? (
        <Translate
          key={id}
          photo={photo}
          title={title}
          mean={mean}
          translate={translate}
          transcript={transcript}
          sample={sample}
          handleHideAnswer={handleHideAnswer}
        />
      ) : (
        <TransButton ref={ref} handleShowAnswer={() => handleShowAnswer()} />
      )}
    </div>
  );
}

export default Card;
