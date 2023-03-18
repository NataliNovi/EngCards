import React, {useState, useEffect, useRef} from 'react'
//import { wordsArr } from '../data/wordsDataArr';
import styles from './wordsgame.module.scss'
import Learned from '../components/Learned/Learned';
import {MyContext} from '..//context/MyContext';
import { useContext } from 'react';
import AddServices from '../services/AddServices';


export default function WordsGame() {
   const {valueContext, setValueContext} = useContext(MyContext);
   console.log(valueContext)

  //при перезагрузке страницы WordsGame теряется valueContext. Выдает ошибку (предохранители (компоненты Error Boundary))
   
  //  const [valueContextGame, setVaueContextGame] = useState([valueContext])
  //  console.log(valueContextGame)
 

  const ref = useRef();
    useEffect(()=>{ref.current.focus()},[])
  //useEffect(()=>{ref.current.focus()})
  
    let wordDescribe = valueContext;
   
    const [isTranslateWord, setIsTranslateWord] = useState(false);
    const[currentIndex, setCurrentIndex]= useState(0);
    const [countLearnedWords, setCountLearnedWords] = useState(0);
    let wordCard = wordDescribe[currentIndex];
    console.log(wordCard.english)
    console.log(wordCard.russian)
    
   
    const handleWordTranslate = () => {
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

    async function handleAddWord() {
      console.log('add')
      AddServices.addWords()
      const copyContext = [...valueContext]
      const copyContextAdd = copyContext.push('Hello')
      setValueContext(copyContextAdd)
    }
  

  


    return (
        
        <div className={styles.words}>

        <div className={styles.learnedWords}><Learned countLearnedWords={countLearnedWords}/></div>

        <button onClick={onPrevClick} className={styles.buttonList}>&#8592;</button>
      
          {isTranslateWord
          ? <div className={styles.wordCard}>
            
            <span className={styles.wordTitle}>{wordCard.russian} </span> 
            <button onClick={handleHideWordTranslate} className={styles.buttonWordTranslate}>Hide Translation</button>
            
          </div> 
          : <div className={styles.wordCard}><span className={styles.wordTitle}>{wordCard.english}</span><br></br>
        <button ref={ref} onClick={() => {handleWordTranslate(wordCard.id)}} className={styles.buttonWordTranslate}>Translation</button>
        </div>}

          <button onClick={onNextClick} className={styles.buttonList}>&#8594;</button>
     
         
         <button onClick = {handleAddWord} className={styles.buttonAddWord}>Add word</button>
          </div>
       
    )
}

//