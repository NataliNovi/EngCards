import React, {useState} from 'react'
import styles from './wordslist.module.scss'
import { wordsListArr } from '..//data/wordsList';
import Table from '..//components/Table/Table';
import Input from '..//components/Input-Save-Cancel/Input-Save-Cancel';



 function WordsList() {


    const[isInputShow, setIsInputShow] = useState(false);


    const handleCorrectWord = () => {
      setIsInputShow(!isInputShow)
    }
  
    const handleCancelWordChange = () => {
      setIsInputShow(!isInputShow)
    }//
  
    const handleSaveWordChange = () => {
      setIsInputShow(!isInputShow)
    }

  
 

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



    return (
          <div className={styles.wordsListTableContainer}>
             
        {isInputShow
             ? <Input handleCancelWordChange = {handleCancelWordChange} handleSaveWordChange = {handleSaveWordChange}/>
             : <div className={styles.wordsList}>
            {wordsList.map((item)=>
                    <Table key={item.id} id={item.id} english={item.english} transcription={item.transcription} russian={item.russian} tags={item.tags} isActive = {item.isActive} index = {item.index} handleCorrectWord = {handleCorrectWord} handleDeleteWord = {handleDeleteWord} />
                  )}
            </div>} 

            </div>
    
         
    )
    }
  
    export default WordsList;