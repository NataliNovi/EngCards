//import styles from './card.module.scss';
import React, {useState} from 'react';
import Translate from '../CardTranslate/CardTranslate';
import TransButton from '../CardTransbutton/TransButton';
import {cardsArr} from './const_cardsArr.js';
import classNames from 'classnames';
import styles from './card.module.scss'

function Card (props)  {


  const [isTranslateCard, setIsTranslateCard] = React.useState(false);
  
  const handleShowTranslate = () => {
    setIsTranslateCard(!isTranslateCard)
  }


  const handleHideAnswer = () => {
    setIsTranslateCard(!isTranslateCard)
  }


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


