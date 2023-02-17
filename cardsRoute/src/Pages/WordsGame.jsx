import React, {useState} from 'react'
import { wordsArr } from '../data/wordsDataArr';
import styles from './wordsgame.module.scss'


export default function WordsGame() {

  
    const wordDescribe = wordsArr;
    const[currentIndex, setCurrentIndex]= useState(0);
    let wordCard = wordDescribe[currentIndex];
    console.log(wordCard)
    
    const [isTranslateNewWord, setIsTranslateNewWord] = React.useState(false);
    
    
    const handleWordTranslate = () => {
      setIsTranslateNewWord(!isTranslateNewWord)
    }
    
    const handleHideWordTranslate = () => {
      setIsTranslateNewWord(!isTranslateNewWord)
    }
    
    const onPrevClick = () => {
        setIsTranslateNewWord(isTranslateNewWord==="")
      let prevIndex = currentIndex-1;
      if (currentIndex===0) {
        prevIndex = wordDescribe.length-1;
        
        
      }
      setCurrentIndex(prevIndex)
    }
    
    const onNextClick = () => {
        setIsTranslateNewWord(isTranslateNewWord==="")
      let nextIndex = currentIndex+1;
      if (nextIndex===wordDescribe.length) {
        nextIndex = 0;
       
      }
      setCurrentIndex(nextIndex)
    }




    return (
        
        <div className={styles.words}>

        <button onClick={onPrevClick} className={styles.buttonList}>&#8592;</button>
        {/* <div className={styles.wordsNewContainer}> */}
          {/* { wordDescribe.map((word)=>
            <Word key={word.title} title={word.title} photo={word.photo} mean={word.mean} transcript = {word.transcript} translate = {word.translate} theme = {word.theme} sample = {word.sample} isSelected={word.isSelected}/>)
          }  */}

          {isTranslateNewWord
          ? <div className={styles.wordCard}>
            
            <span className={styles.wordTitle}>{wordCard.translate} </span> <img className={styles.imgWord} src = {wordCard.photo} alt ="print" />
            <button onClick={handleHideWordTranslate} className={styles.buttonWordTranslate}>Hide Translation</button>
            
          </div> 
          : <div className={styles.wordCard}><span className={styles.wordTitle}>{wordCard.title}</span><br></br>
        <button onClick={handleWordTranslate} className={styles.buttonWordTranslate}>Translation</button>
        </div>}
          <button onClick={onNextClick} className={styles.buttonList}>&#8594;</button>
          {/* <ButtonAddWord/> */}
          <div className={styles.buttonAddWordContainer}>
         
         <button className={styles.buttonAddWord}>Add word</button>

     </div>
    
          </div>
       
    )
}