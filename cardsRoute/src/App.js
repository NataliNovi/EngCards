// import styles from './App.module.scss';
import './App.css';
import React, {useState} from 'react';
import {
//createBrowserRouter,
BrowserRouter as Router,
Routes,
Route,
Link,
NavLink,
Navigate
} from 'react-router-dom';
import './components/Word/Word.jsx';
//import Table from './components/Table/Table';
//import Input from './components/Input-Save-Cancel/Input-Save-Cancel'
//import Read from './components/Read-Change-Delete/Read-Change-Delete';
//import Translate from './components/Translate/Translate';
//import Card from './components/Card/Card.jsx';
//import {cardsArr} from './data/cardsDataArr';
//import Word from './components/Word/Word.jsx';
//import {wordsArr} from './data/wordsDataArr';
//import ButtonAddWord from './components/ButtonAddWord/ButtonAddWord';
//import ButtonAddCard from './components/ButtonAddCard/ButtonAddCard';
//import TransButton from './components/Transbutton/Transbutton';
//import Header from './components/Header/Header.jsx';
import Main from './components/Mainpage/Main.jsx';
import Know from './components/Knowcards/Know';
import Remaincards from './components/Remaincards/Remaincards';
import Dontknow from './components/Dontknowcards/Dontknow';
import Footer from './components/Footer/Footer.jsx';
import { wordsListArr } from './data/wordsList';
import Menu from './components/Menu/Menu';
import logo from '..//src/assets/photo/logoBoy.jpeg';
import { render } from '@testing-library/react';

import {Home,WordsList,CardsGame,WordsGame,Error} from './Pages';



function App() {


  
  
// слова
// const wordDescribe = wordsArr;
// const[currentIndex, setCurrentIndex]= useState(0);
// let wordCard = wordDescribe[currentIndex];
// console.log(wordCard)

// const [isTranslateNewWord, setIsTranslateNewWord] = React.useState(false);


// const handleWordTranslate = () => {
//   setIsTranslateNewWord(!isTranslateNewWord)
// }

// const handleHideWordTranslate = () => {
//   setIsTranslateNewWord(!isTranslateNewWord)
// }

// const onPrevClick = () => {
//   let prevIndex = currentIndex-1;
//   if (currentIndex===0) {
//     prevIndex = wordDescribe.length-1;
//     return "FINISH";
//   }
//   setCurrentIndex(prevIndex)
// }

// const onNextClick = () => {
//   let nextIndex = currentIndex+1;
//   if (nextIndex===wordDescribe.length) {
//     nextIndex = 0;
//      //return "FINISH";
//   }
//   setCurrentIndex(nextIndex)
// }


  return (

<>

<header className="header">
<h1 className="slogan">Learn by Playing</h1>
<a className="link"><NavLink to='/'>Home</NavLink></a>
<a className="link"><NavLink to='/wordslist'>Words List</NavLink></a>
<a className="link"><NavLink to='/cardsgame'>Cards Game</NavLink></a>
 <a className="link"><NavLink to='/wordsgame'>Words Game</NavLink></a>
{/* <NavLink to='/contacts-us'>Contact Us</NavLink> */}
<Link to="/logo"><img className="logo" src={logo} alt="logo"/></Link>
</header>


<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/wordslist' element={<WordsList/>}/>
<Route path='/cardsgame' element={<CardsGame/>}/>
<Route path='/wordsgame' element={<WordsGame/>}/>
<Route path ='/logo' element={<Navigate to='/wordslist'/>}/>
{/* <Route path='/about/:id' element={<Post/>}/> */}
<Route path='*' element={<Error/>}/>
</Routes>

</>

);
}

  


//  {/* <div className={styles.words}> */}

//  {/* <button onClick={onPrevClick} className={styles.buttonList}>&#8592;</button> */}
//   {/* <div className={styles.wordsNewContainer}> */}
//    {/* { wordDescribe.map((word)=>
//      <Word key={word.title} title={word.title} photo={word.photo} mean={word.mean} transcript = {word.transcript} translate = {word.translate} theme = {word.theme} sample = {word.sample} isSelected={word.isSelected}/>)
//     }  */}

//     {/* {isTranslateNewWord
//     ? <div className={styles.wordCard}><span className={styles.wordTitle}>{wordCard.translate} </span><br></br> <img className={styles.imgWord} src = {wordCard.photo} alt ="print" />
//      <button onClick={handleHideWordTranslate} className={styles.buttonWordTranslate}>Hide Translation</button></div> 
//     : <div className={styles.wordCard}><span className={styles.wordTitle}>{wordCard.title}</span><br></br>
//   <button onClick={handleWordTranslate} className={styles.buttonWordTranslate}>Translation</button>
//   </div>}
//     <button onClick={onNextClick} className={styles.buttonList}>&#8594;</button>
//   </div> */}

// {/* <ButtonAddWord/> */}


// {/* <div className={styles.resultsContainer}>
//   <Know/>
//   <Remaincards/>
//   <Dontknow/>
//   </div> */}
  

//      <Footer/>
    
//     </div>
//   );
// }


export default App;

