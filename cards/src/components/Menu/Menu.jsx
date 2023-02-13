import styles from './menu.module.scss';
import React, {useState} from 'react';
//import Word from '../Word/Word';
//import Main from '../Mainpage/Main';
import Card from '../Card/Card';
import Table from '../Table/Table';
import Input from '../Input-Save-Cancel/Input-Save-Cancel';
import {cardsArr} from '../../data/cardsDataArr';
import { wordsArr } from '../../data/wordsDataArr';
import { wordsListArr } from '../../data/wordsList';
import ButtonAddCard from '../ButtonAddCard/ButtonAddCard';
//import ButtonAddWord from '../ButtonAddWord/ButtonAddWord';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

function Menu (props) {
  const cardDescribe = cardsArr;
  //const wordDescribe = wordsArr;

  //это к таблице со словами
const wordsList = wordsListArr;

const [words, setWords] = useState(wordsList);

const handleDeleteWord = (id) => {
  words.forEach(el => {

    if(el.isActive) {
      el.isActive=false;
    }
   
    if(el.id === id) {
      el.isActive = true;
    }
    setWords([...words])

    if(el.isActive===true) {
      console.log('удалили элемент с индексом ' + el.index)
      wordsList.splice(`${el.index}`, 1)
    }

  })}

  const[isInputShow, setIsInputShow] = useState(false);

  const handleCorrectWord = () => {
    setIsInputShow(!isInputShow)
  }

  const handleCancelWordChange = () => {
    setIsInputShow(!isInputShow)
  }

  const handleSaveWordChange = () => {
    setIsInputShow(!isInputShow)
  }


  //слова
const wordDescribe = wordsArr;
const[currentIndex, setCurrentIndex]= useState(0);
let wordCard = wordDescribe[currentIndex];
//console.log(wordCard)

const [isTranslateNewWord, setIsTranslateNewWord] = React.useState(false);


const handleWordTranslate = () => {
  setIsTranslateNewWord(!isTranslateNewWord)
}

const handleHideWordTranslate = () => {
  setIsTranslateNewWord(!isTranslateNewWord)
}

const onPrevClick = () => {
  let prevIndex = currentIndex-1;
  if (currentIndex===0) {
    prevIndex = wordDescribe.length-1;
    //return "FINISH";
  }
  setCurrentIndex(prevIndex)
}

const onNextClick = () => {
  let nextIndex = currentIndex+1;
  if (nextIndex===wordDescribe.length) {
    nextIndex = 0;
     //return "FINISH";
  }
  setCurrentIndex(nextIndex)
}


   
    return (
    <Router>
    <div className={styles.Router}>
    <nav>
    <ul className={styles.linksList}>
            <li className={styles.link} >
              <Link to="/main">Main Page</Link>
            </li>
            <li className={styles.link}>
              <Link to="/words_list">Words List</Link>
            </li>
            <li className={styles.link}>
              <Link to="/card">Cards Game</Link>
            </li>
            <li className={styles.link}>
              <Link to="/word">Words Game</Link>
            </li>
          </ul>
    </nav>
   
        <Routes>
          {/* главная */}

          <Route path="/" element= {<MainPhrase/>}/>

          {/* таблица слов */}
          <Route exact path="/words_list" element={ 
            isInputShow
             ?<Input handleCancelWordChange = {handleCancelWordChange} handleSaveWordChange = {handleSaveWordChange}/>
             : <div className={styles.table}>
            {wordsList.map((item)=>
                    <Table key={item.id} id={item.id} english={item.english} transcription={item.transcription} russian={item.russian} tags={item.tags} isActive = {item.isActive} index = {item.index} handleCorrectWord = {handleCorrectWord} handleDeleteWord = {handleDeleteWord} />
                  )}
              </div>
            }/>
          {/* карточки  */}
          <Route exact path="/card" element={
         <div className={styles.cardsContainer}>
          {cardDescribe.map((card)=>
        <Card key={card.transcript} title={card.title} photo={card.photo} mean={card.mean} question={card.question} translate = {card.translate} transcript = {card.transcript} theme = {card.theme} sample = {card.sample}/>
        )}
        <ButtonAddCard/>
        </div>
      }/>

          {/* слова */}
          <Route path="/word" element = {
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
             }/>

          {/* <Route exact path="/word" element={<Word/>}/> */}

          <Route path="*" component={<NotFound/>}/>

        </Routes>
        </div>

  </Router>
);
}

 
  function MainPhrase() {
    return <h2>Hello to Main Page</h2>
  }
  
  // function Card() {
  // return <Card/>
  // }
  // function Word() {
  // return <Word/>
  // }
  // function Home() {
  //   return <h2>Home</h2>
  // }

  function NotFound() {
    return <h2>"404 SORRY COULDN'T FIND IT!!!"</h2>
  }
  
  
export default Menu;