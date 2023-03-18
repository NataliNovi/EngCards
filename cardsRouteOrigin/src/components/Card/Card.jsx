//import styles from './card.module.scss';
import React, {useState, useEffect, useRef} from 'react';
import Translate from '../CardTranslate/CardTranslate';
import TransButton from '../CardTransbutton/TransButton';
//import HideAllAnswersButton from '../HideAllAnswersButton/HideAllAnswersButton';
import styles from './card.module.scss'
import {cardsArr} from '..//..//data/cardsDataArr';


function Card (props)  {
//console.log(props)


  const ref = useRef();
  useEffect(()=>{ref.current.focus()},[])
  //useEffect(()=>{ref.current.focus()})

  const [isTranslateCard, setIsTranslateCard] = React.useState(false);
  
  const handleShowAnswer= () => {
    setIsTranslateCard(!isTranslateCard)
  }

  const handleHideAnswer = () => {
    setIsTranslateCard(!isTranslateCard)
  }

  if (props.isHideAllAnswers===true) {
  //console.log('hide all answers = true')
    if (isTranslateCard===true){
              setIsTranslateCard(!isTranslateCard)         
    }
  }

    return (
       
        <div className={styles.card}>
             <img src ={props.photo} className={styles.cardImg} alt="cardImg"></img>
            <div className="card-question">Question: {props.question}</div>

           {isTranslateCard
            ?  <Translate key={props.transcript} photo={props.photo} title={props.title}  mean={props.mean} translate = {props.translate} transcript = {props.transcript} sample = {props.sample} handleHideAnswer={handleHideAnswer}/>
          
            :<TransButton ref={ref} handleShowAnswer={() => handleShowAnswer()}/>
              
           }
          

        </div>
    
)}

export default Card;


