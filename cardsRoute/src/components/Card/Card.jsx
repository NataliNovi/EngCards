//import styles from './card.module.scss';
import React, {useState, useEffect, useRef} from 'react';
import Translate from '../CardTranslate/CardTranslate';
import TransButton from '../CardTransbutton/TransButton';
import HideAllAnswersButton from '../HideAllAnswersButton/HideAllAnswersButton';
import styles from './card.module.scss'


function Card (props)  {
console.log(props)


  const ref = useRef();

  // Card.jsx:15 Uncaught TypeError: Cannot read properties of undefined (reading 'focus')
  // at Card.jsx:15:1

  useEffect(()=>{ref.current.focus()},[])


  const [isTranslateCard, setIsTranslateCard] = React.useState(false);
  
  const handleShowTranslate = () => {
    setIsTranslateCard(!isTranslateCard)
  }

  const handleHideAnswer = () => {
    setIsTranslateCard(!isTranslateCard)
  }

  const handleHideAllAnswers = () => {
    setIsTranslateCard(!isTranslateCard)
  }




    return (
       
        <div className={styles.card}>
             <img src ={props.photo} className={styles.cardImg} alt="cardImg"></img>
            <div className="card-question">Question: {props.question}</div>

         
           {isTranslateCard
            ?  <Translate key={props.transcript} photo={props.photo} title={props.title}  mean={props.mean} translate = {props.translate} transcript = {props.transcript} sample = {props.sample} handleHideAnswer = {handleHideAnswer}/>
            // :<HideAllAnswersButton handleHideAllAnswers={handleHideAllAnswers}/>&&
             :<TransButton ref={ref} handleShowTranslate={handleShowTranslate}/>
              
            }

          

        </div>
    
)}

export default Card;


