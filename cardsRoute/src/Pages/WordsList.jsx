import React, {useState} from 'react'
import styles from './wordslist.module.scss'
import { wordsListArr } from '../data/wordsList';
import Table from '../components/Table/Table';


 function WordsList() {


    const[isInputShow, setIsInputShow] = useState(false);


    const handleCorrectWord = () => {
      setIsInputShow(!isInputShow)
    }
  
    const handleCancelWordChange = () => {
      setIsInputShow(!isInputShow)
    }//
  
   
  
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
  setValueId(e.target.value);
}

  const [valueEng, setValueEng] = useState('');
  const onChangeValueEng = (e) => {
      setValueEng(e.target.value);
  }

  const [valueTranscript, setValueTranscript] = useState('');
  const onChangeValueTranscript = (e) => {
      setValueTranscript(e.target.value);
  }

  const [valueTranslate, setValueTranslate] = useState('');
  const onChangeValueTranslate = (e) => {
      setValueTranslate(e.target.value);
  }


  const handleSaveWordChange = (e) => {
    console.log(valueId.length, valueEng.length, valueTranscript.length, valueTranslate.length)
   
    e.preventDefault();

    // if (valueId.length>0) {
    //   return (valueId.length)
    // }
    // else console.log('bag1')

    // if (valueEng.length>0) {
    //   return (valueEng.length)
    // }
    // else console.log('bag2')

    // if (valueTranscript.length>0) {
    //   return (valueTranscript.length)
    // }
    // else console.log('bag3')

    // if (valueTranslate.length>0) {
    //   return (valueTranslate.length)
    // }
    // else console.log('bag4')

    if((valueId.length > 0) && (valueEng.length > 0) && (valueTranscript.length > 0) && (valueTranslate.length>0)) 
    {
     console.log('ok')
    }

    else console.log('fooo')

   


    setIsInputShow(!isInputShow)
    
  }



    return (


          <div className={styles.wordsListTableContainer}>
             
        {isInputShow
             ?      <div >
             <form className={styles.inputTable}>
             <input className={styles.id} placeholder='id' type='text' onChange={onChangeValueId} value={valueId} ></input>
             <input className={styles.english} placeholder='english word' type='text' onChange={onChangeValueEng} value={valueEng} ></input>
             <input className={styles.transcription} placeholder='transcript' type='text' onChange={onChangeValueTranscript} value={valueTranscript} ></input>
             <input className={styles.russian} placeholder='translate' type='text' onChange={onChangeValueTranslate} value={valueTranslate} ></input>
     
             <div className={styles.tableButtons}><button className={styles.listButton} type='submit' onClick={handleSaveWordChange}>Save</button><button className={styles.listButton} type='submit' onClick={handleCancelWordChange}>Cancel</button></div>
             </form>
             </div> 
             : <div className={styles.wordsList}>
            {wordsList.map((item)=>
                <Table key={item.id} id={item.id} english={item.english} transcription={item.transcription} russian={item.russian} tags={item.tags} isActive = {item.isActive} index = {item.index} handleCorrectWord = {handleCorrectWord} handleDeleteWord = {handleDeleteWord} />
                  )}
            </div>} 

            </div>

)
}

export default WordsList;






        //   <div className={styles.wordsListTableContainer}>
             
        // {isInputShow
        //      ? <Input handleCancelWordChange = {handleCancelWordChange} handleSaveWordChange = {handleSaveWordChange}   />
        //      : <div className={styles.wordsList}>
        //     {wordsList.map((item)=>
        //         <Table key={item.id} id={item.id} english={item.english} transcription={item.transcription} russian={item.russian} tags={item.tags} isActive = {item.isActive} index = {item.index} handleCorrectWord = {handleCorrectWord} handleDeleteWord = {handleDeleteWord} />
        //           )}
        //     </div>} 

        //     </div>
    
        


    