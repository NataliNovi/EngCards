//import styles from './card.module.scss';
import React, {useState} from 'react';
import Translate from '../Translate/Translate';
import classNames from 'classnames';
import TransButton from '../Transbutton/TransButton';
import {cardsArr} from './const_cardsArr.js';
import './card.css'


function Card (props) {
let isTranslateButtonPressed = false; //пока отображение карточки зависит от true / false здесь
let translateCard;

  const [pressed, setPressed] = useState(false);

  const handleClick = (isTranslateButtonPressed) => {
      console.log('click')
      setPressed(isTranslateButtonPressed); }

 
  //const [translate, setTranslate] = useState(isTranslateButtonPressed);

  if (isTranslateButtonPressed) { 
    translateCard = <Translate key={props.transcript} photo={props.photo} title={props.title}  mean={props.mean} translate = {props.translate} transcript = {props.transcript} sample = {props.sample}/>
  }  else {
    translateCard = <TransButton handleClick={handleClick}/>
  }


    return (

        <div className={'card'}>
             <img src ={props.photo} className={'cardImg'} alt="cardImg"></img>
            <div className="card-question">Question: {props.question}</div>
            {translateCard}
          



        </div>
    
)}

      

export default Card;

//через классы
//export default class Card extends React.Component {


    /*constructor(props) {
        super(props);
        this.state = {
            pressed: false
        };
    };*/

    /*onClickHandle = () => {
      this.setState(prevState => {
        return {
          isClicked: !prevState.isClicked
        };
      });
    };*/

    /*render() {
      
        const cardDescribe = cardsArr;
        const isTranslateButtonPressed = false;
        let translateCard;

     if (isTranslateButtonPressed) { 
        console.log(cardDescribe);
        translateCard = <Translate/>
        
        }  else {
          translateCard = <TransButton/>
        }
  
      return (
        <div className="card" onClick={this.onClickHandle} >
            {translateCard}
         
         
          <Translate key={card.transcript} mean={card.mean} transcript = {card.transcript} theme = {card.theme} sample = {card.sample}/>)
        
        </div>
      );
    }}*/
  
  

//через классы
/*export default class Card extends React.Component {
    state = {
      isClicked: false
    };
    onClickHandle = () => {
      this.setState(prevState => {
        return {
          isClicked: !prevState.isClicked
        };
      });
    };
    render() {
      let divClases = classNames({
        box: true,
        active: this.state.isClicked
      });
  
      return (
        <div className="App">
          <div className={divClases} onClick={this.onClickHandle} />
        </div>
      );
    }
  }*/
  


/*Карточке слова добавьте состояние, которое будет отвечать за показывание/скрытие перевода. По умолчанию перевод всегда скрыт.  При нажатии на кнопку "Показать перевод", появляется перевод слова, а кнопка исчезает. Реализуйте этот функционал с помощью внутреннего состояния элемента и условного рендеринга.*/


//const cardDescribe = cardsArr;


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

/*
<div className="card-theme">Theme: {props.theme}</div>            
<div className="card-meaning">Meaning: {props.mean}</div>*/

/*<button {...props} onClick={handleChange}>
                {pressed? "Translate": props.translate}
            </button>*/


             /*{translateCard}*/

