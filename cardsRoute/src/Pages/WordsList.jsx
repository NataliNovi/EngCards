import React, {useState} from 'react'
import styles from './wordslist.module.scss'
import { wordsListArr } from '..//data/wordsList';
import Table from '..//components/Table/Table';
import Input from '..//components/Input-Save-Cancel/Input-Save-Cancel';
import Footer from '../components/Footer/Footer';



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


  const [valueId, setValueId] = useState('');
  const onChangeValueId = (e) => {
      //setValueId(e.target.value);
      if (valueId > 0) {
          return valueId
      }
      else return 'error' ;
      
  }
  //console.log(valueId)

  const [valueEng, setValueEng] = useState('');
  const onChangeValueEng = (e) => {
      //setValueEng(e.target.value);
      console.log(valueEng)
  }

  const [valueTranscript, setValueTranscript] = useState('');
  const onChangeValueTranscript = (e) => {
      //setValueTranscript(e.target.value);
      //console.log(valueTranscript)
  }

  const [valueTranslate, setValueTranslate] = useState('');
  const onChangeValueTranslate = (e) => {
      //setValueTranslate(e.target.value);
      //console.log(valueTranslate)
  }




    return (
          <div className={styles.wordsListTableContainer}>
             
        {isInputShow
             ? <Input handleCancelWordChange = {handleCancelWordChange} handleSaveWordChange = {handleSaveWordChange} onChangeValueId={onChangeValueId} onChangeValueEng={onChangeValueEng} onChangeValueTranscript={onChangeValueTranscript} onChangeValueTranslate={onChangeValueTranslate} value={[valueId, valueEng, valueTranscript, valueTranslate]}  />
             : <div className={styles.wordsList}>
            {wordsList.map((item)=>
                <Table key={item.id} id={item.id} english={item.english} transcription={item.transcription} russian={item.russian} tags={item.tags} isActive = {item.isActive} index = {item.index} handleCorrectWord = {handleCorrectWord} handleDeleteWord = {handleDeleteWord} />
                  )}
            </div>} 

            </div>
    
        
    )
    }
  
    export default WordsList;


    