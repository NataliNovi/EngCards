import React, {useState, useEffect, useRef} from 'react'
import { wordsArr } from '../data/wordsDataArr';
import styles from './wordsgame.module.scss'


export default function WordsGame() {

  const ref = useRef();

  useEffect(()=>{ref.current.focus()},[])
  
    const wordDescribe = wordsArr;
    const[currentIndex, setCurrentIndex]= useState(0);
    const [countLearnedWords, setCountLearnedWords] = useState(0);
    const [currentId, setCurrentId] = useState('');
    let wordCard = wordDescribe[currentIndex];
    let wordId = wordDescribe[currentIndex].id;
    //console.log(wordDescribe[2].id)
    //console.log(wordCard)
    
  

    const [isTranslateNewWord, setIsTranslateNewWord] = React.useState(false);


    const handleWordTranslate = () => {
      setCountLearnedWords(countLearnedWords =>countLearnedWords+ 1) 
     
      setIsTranslateNewWord(!isTranslateNewWord);

      
      setTimeout (onNextClick, 1500);

      console.log(setCountLearnedWords);
      console.log(wordId);
      console.log(localStorage.getItem(wordId, wordId))
      let prevIndex = currentIndex-1;
      console.log(prevIndex, currentIndex);
      console.log(countLearnedWords);


    //попытки предотвратить счет слов при повторном нажатии на кнопку перевода:


    // let  buttonTranslate = document.querySelector('#buttonTranslate');
    // console.log(buttonTranslate) //null
    // buttonTranslate.addEventListener("click", {handleWordTranslate(event)
    //   {
    //   setIsTranslateNewWord(!isTranslateNewWord);
    //   console.log(event);

    //   setCountLearnedWords(countLearnedWords=>countLearnedWords+1 )
     
    //   let prevIndex = currentIndex-1;
    //   console.log(prevIndex, currentIndex);
    //   console.log(countLearnedWords);
    //   }, 

    //   });


    
    
    // const handleWordTranslate = () => {
    //   setIsTranslateNewWord(!isTranslateNewWord);
    //   setCountLearnedWords(localStorage.setItem(wordId, wordId));
    //   let storage = localStorage.getItem(wordId, wordId);
    //   setCountLearnedWords(countLearnedWords =>countLearnedWords+ 1)
    //   if (wordId === storage)
    //    {
    //     setCountLearnedWords(countLearnedWords =>countLearnedWords)
    //    }

      // error:
      // function dispatchSetState(fiber, queue, action) {
      //   {
      //     if (typeof arguments[3] === 'function') {
      //       error("State updates from the useState() and useReducer() Hooks don't support the " + 'second callback argument. To execute a side effect after ' + 'rendering, declare it in the component body with useEffect().');
      //     }
      //   }

      }


    const handleHideWordTranslate = () => {
      setIsTranslateNewWord(!isTranslateNewWord)
    }
    
    const onPrevClick = () => {
        setIsTranslateNewWord(isTranslateNewWord==="")
      let prevIndex = currentIndex-1;
      if (currentIndex===0) {
        // prevIndex = wordDescribe.length-1;
      return ('well done');
        
      }
      setCurrentIndex(prevIndex)
    }

    
    const onNextClick = () => {
        setIsTranslateNewWord(isTranslateNewWord==="")
      let nextIndex = currentIndex+1;
      if (nextIndex===wordDescribe.length) {
        // nextIndex = 0;
        return ('well done');
       
      }
      setCurrentIndex(nextIndex)
    } 

  


    return (
        
        <div className={styles.words}>

        <div className={styles.learnedWords}>Learned {countLearnedWords} words</div>

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
        <button ref={ref} onClick={handleWordTranslate} className={styles.buttonWordTranslate}>Translation</button>
        </div>}

          <button onClick={onNextClick} className={styles.buttonList}>&#8594;</button>
          {/* <ButtonAddWord/> */}
         
         <button className={styles.buttonAddWord}>Add word</button>
          </div>
       
    )
}

//