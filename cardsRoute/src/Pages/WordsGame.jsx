import React, {useState, useEffect, useRef} from 'react'
import { wordsArr } from '../data/wordsDataArr';
import styles from './wordsgame.module.scss'
import Learned from '../components/Learned/Learned';


export default function WordsGame() {

  const ref = useRef();
    useEffect(()=>{ref.current.focus()},[])
  //useEffect(()=>{ref.current.focus()})
  
    let wordDescribe = wordsArr;
    const [isTranslateWord, setIsTranslateWord] = useState(false);
    const[currentIndex, setCurrentIndex]= useState(0);
    const [countLearnedWords, setCountLearnedWords] = useState(0);
    let wordCard = wordDescribe[currentIndex];
    
    

    // for (let word of Object.keys(wordDescribe)) {
    //   let index = wordDescribe[word];
    //   console.log(word, index);
    // }
  
   
    const handleWordTranslate = (id) => {
      console.log(id);
      setIsTranslateWord(!isTranslateWord);
      setCountLearnedWords(countLearnedWords=>countLearnedWords+1 )

      }


    const handleHideWordTranslate = () => {
      setIsTranslateWord(!isTranslateWord)
    }
    
    const onPrevClick = () => {
        setIsTranslateWord(isTranslateWord==="")
      let prevIndex = currentIndex-1;
      if (currentIndex===0) {
        // prevIndex = wordDescribe.length-1;
      return ('well done');
        
      }
      setCurrentIndex(prevIndex)
    }

    
    const onNextClick = () => {
        setIsTranslateWord(isTranslateWord==="")
      let nextIndex = currentIndex+1;
      if (nextIndex===wordDescribe.length) {
        // nextIndex = 0;
        return ('well done');
       
      }
      setCurrentIndex(nextIndex)
    } 

  


    return (
        
        <div className={styles.words}>

        <div className={styles.learnedWords}><Learned countLearnedWords={countLearnedWords}/></div>

        <button onClick={onPrevClick} className={styles.buttonList}>&#8592;</button>
      
          {isTranslateWord
          ? <div className={styles.wordCard}>
            
            <span className={styles.wordTitle}>{wordCard.translate} </span> <img className={styles.imgWord} src = {wordCard.photo} alt ="print" />
            <button onClick={handleHideWordTranslate} className={styles.buttonWordTranslate}>Hide Translation</button>
            
          </div> 
          : <div className={styles.wordCard}><span className={styles.wordTitle}>{wordCard.title}</span><br></br>
        <button ref={ref} onClick={() => {handleWordTranslate(wordCard.id)}} className={styles.buttonWordTranslate}>Translation</button>
        </div>}

          <button onClick={onNextClick} className={styles.buttonList}>&#8594;</button>
     
         
         <button className={styles.buttonAddWord}>Add word</button>
          </div>
       
    )
}

//