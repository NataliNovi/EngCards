//import styles from './card.module.scss';
import React, {useState} from 'react';
import Translate from '../CardTranslate/CardTranslate';
import TransButton from '../CardTransbutton/TransButton';
import {cardsArr} from './const_cardsArr.js';
import classNames from 'classnames';
import styles from './card.module.scss'

function Card (props)  {
//function Card (props) {
//let isTranslateButtonPressed = false; //пока отображение карточки зависит от true / false здесь
//let translateCard;

  const [isTranslateCard, setIsTranslateCard] = React.useState(false);
  
  const handleShowTranslate = () => {
    setIsTranslateCard(!isTranslateCard)
  }


  const handleHideAnswer = () => {
    setIsTranslateCard(!isTranslateCard)
  }


  /*if (isTranslateButtonPressed) { 
    translateCard = <Translate key={props.transcript} photo={props.photo} title={props.title}  mean={props.mean} translate = {props.translate} transcript = {props.transcript} sample = {props.sample}/>
  }  else {
    translateCard = <TransButton handleClick={handleClick}/>
  }*/

    return (
       
        <div className={styles.card}>
             <img src ={props.photo} className={styles.cardImg} alt="cardImg"></img>
            <div className="card-question">Question: {props.question}</div>
            
            {isTranslateCard
            ?  <Translate key={props.transcript} photo={props.photo} title={props.title}  mean={props.mean} translate = {props.translate} transcript = {props.transcript} sample = {props.sample} handleHideAnswer = {handleHideAnswer}/>
            : <TransButton handleShowTranslate={handleShowTranslate}/>
            }

        </div>
    
)}

export default Card;




 /*<div className={styles.card}>
            <img src ={props.photo} className={styles.cardImg} alt="cardImg"></img>
            <div className="card-question">Question: {props.question}</div>
            <div className="card-meaning">Meaning: {props.mean}</div>
            <div className="card-transcription">Transcription: {props.transcript}</div>
            <div className="card-theme">Theme: {props.theme}</div>
            <div className="card-sample">Sample: {props.sample}</div>
            <div className={styles.cardTranslation}>Перевод: {props.translate}</div>
            <button>Translate</button>
        </div>*/
