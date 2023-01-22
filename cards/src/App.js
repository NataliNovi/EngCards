import styles from './App.module.scss';
import React, {useState} from 'react';
import './components/Word/Word.jsx';
import Table from './components/Table/Table';
import Input from './components/Input-Save-Cancel/Input-Save-Cancel'
import Read from './components/Read-Change-Delete/Read-Change-Delete';
//import Translate from './components/Translate/Translate';
import Card from './components/Card/Card.jsx';
import {cardsArr} from './constants/const_cardsArr';
import Word from './components/Word/Word.jsx';
import {wordsArr} from './constants/const_wordsArr';
import ButtonAddWord from './components/ButtonAddWord/ButtonAddWord';
import ButtonAddCard from './components/ButtonAddCard/ButtonAddCard';
//import TransButton from './components/Transbutton/Transbutton';
import Header from './components/Header/Header.jsx';
import Main from './components/Mainpage/Main.jsx';
import Know from './components/Knowcards/Know';
import Remaincards from './components/Remaincards/Remaincards';
import Dontknow from './components/Dontknowcards/Dontknow';
import Footer from './components/Footer/Footer.jsx';
import { wordsListArr } from './constants/wordsList';

 
// получение JSON-файла через fetch
/*fetch("./src/constants/wordsList.json",{
  method: 'GET',
  headers: {
      'Content-Type': 'application/json;charset=utf-8'
  },
})
.then((response) => {
  let list = response.json();
  return list;
})
.then((list) => {
  console.log(list);
  //getFlowersOut(catalogue);
})

.catch(error => console.log(error))*/




  /*через условный рендеринг*/
  /*const isInputField = false;
  let actionItem;

  if (isInputField) { 
    actionItem = <Input/>; 
  }  else {
    actionItem = wordsListArr.map((item) =>
    (<Read key={item.id} id={item.id} english={item.english} transcription={item.transcription} russian={item.russian} tags={item.tags}/>
  ))}*/


function App() {

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
      console.log(el.index)
      wordsList.splice(`${el.index}`, 1)
    }

  })}


//слова
const wordDescribe = wordsArr;
//карточки
const cardDescribe = cardsArr;

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

  return (
    <div className={styles.App}>
      <Header></Header>
      <Main></Main>
    

  {isInputShow
            ? <Input handleCancelWordChange = {handleCancelWordChange} handleSaveWordChange = {handleSaveWordChange}/>
            :  <div className={styles.table}>
            {wordsList.map((item)=>
                    <Table key={item.id} id={item.id} english={item.english} transcription={item.transcription} russian={item.russian} tags={item.tags} isActive = {item.isActive} index = {item.index} handleCorrectWord = {handleCorrectWord} handleDeleteWord = {handleDeleteWord} />
                  )}
            </div>
            }
      {/* {actionItem} это к условному рендеру*/}


 

  <div className={styles.cardsContainer}>
  {cardDescribe.map((card)=>
     <Card key={card.transcript} title={card.title} photo={card.photo} mean={card.mean} question={card.question} translate = {card.translate} transcript = {card.transcript} theme = {card.theme} sample = {card.sample}/>)
    }
  </div>
  
  

 <ButtonAddCard/>

  <div className={styles.wordsContainer}>
    { wordDescribe.map((word)=>
     <Word key={word.title} title={word.title} photo={word.photo} mean={word.mean} transcript = {word.transcript} translate = {word.translate} theme = {word.theme} sample = {word.sample} isSelected={word.isSelected}/>)
    }
  </div>

<ButtonAddWord/>


<div className={styles.resultsContainer}>
  <Know/>
  <Remaincards/>
  <Dontknow/>
  </div>
  

     <Footer/>
    
    </div>
  );
}

export default App;

  /*<div className={styles.wordsListContainer}>
        {wordsList.map((item)=>
          <Table key={item.id} id={item.id} english={item.english} transcription={item.transcription} russian={item.russian} tags={item.tags}/>
        )}
      </div>*/


/*<div className={styles.cardsContainer}>
  {cardDescribe.map((card)=>
     <Card key={card.transcript} photo={card.photo} mean={card.mean} question={card.question} transcript = {card.transcript} theme = {card.theme} sample = {card.sample} translateCard={translateCard}/>)
    }
  </div>*/

/*{cardDescribe.map((card)=>
     <Card key={card.transcript} photo={card.photo} mean={card.mean} question={card.question} transcript = {card.transcript} theme = {card.theme} sample = {card.sample} translateCard={translateCard}/>)
    }*/


/*- Список всех существующих слов. У каждого слова есть основное значение, транскрипция, перевод, тема. У каждого слова должна быть возможность его удаления и редактирования. Также должна быть возможность добавления слов.
- Карточка слова, у которой есть основное значение, транскрипция, перевод, тема.
- Главная страница, где отображаются списки слов и карточек.*/

/*- Подключите стили для всех созданных элементов
- Выделите основные цвета, шрифты и размеры в отдельный файл
- Добавьте анимацию наведения, фокуса и нажатия на все элементы взаимодействия с пользователем (кнопки, формы и т.д.)
- Сделайте список слов в виде таблицы. Реализуйте условный рендеринг для полей таблицы: должны отображаться либо поля для чтения и с кнопками редактировать/удалить, либо поля ввода с кнопками сохранить/отмена. */