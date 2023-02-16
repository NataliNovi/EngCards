import React from 'react'
import Card from '../components/Card/Card'
import ButtonAddCard from '../components/ButtonAddCard/ButtonAddCard'
import {cardsArr} from '..//data/cardsDataArr'
import styles from './cardsgame.module.scss'

export default function CardsGame() {
    const cardDescribe = cardsArr;

    return (
    
    <div className={styles.cardsContainer}>
          {cardDescribe.map((card)=>
        <Card key={card.transcript} title={card.title} photo={card.photo} mean={card.mean} question={card.question} translate = {card.translate} transcript = {card.transcript} theme = {card.theme} sample = {card.sample}/>
        )}
        <ButtonAddCard/>
    </div>
      )}
