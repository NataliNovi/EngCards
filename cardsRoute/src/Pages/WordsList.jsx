import React, {useState} from 'react'
import './wordslist.scss'
import { wordsListArr } from '../data/wordsList';
import Table from '../components/Table/Table';


 function WordsList() {


    const[isInputShow, setIsInputShow] = useState(false);


    const handleCorrectWord = () => {
      setIsInputShow(!isInputShow)
    }
  
    const handleCancelWordChange = () => {
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

 


const [initialValue, setInitialValue] = useState({
id: '',
eng: '',
transcript: '',
translation: ''
});  

function onChangeValue(e) {
  e.preventDefault();
  const localInitialValue = {...initialValue};
  localInitialValue[e.target.name] = e.target.value;
  setInitialValue(localInitialValue)
  //console.log(localInitialValue)
}

function validateValue(value) {
  if (value !== '') {
    return value
  }
  return false
}

const validateInputs = validateValue(initialValue.id) && validateValue(initialValue.eng)&& validateValue(initialValue.transcript) && validateValue(initialValue.translation);

// console.log(validateInputs);


const [localInputValue, setLocalInputValue] = useState({
  id: initialValue.id,
  eng: initialValue.eng,
  transcript: initialValue.transcript,
  translation: initialValue.translation 
})
  //console.log(initialValue.id);
  //console.log(initialValue.eng);

const handleSaveWordChange = (e) => {
  setIsInputShow(!isInputShow)

  //console.log(initialValue.id)
 
  const regexEng = new RegExp(/^[a-zA-Z]*$/);
  
  const checkEng = () => {
    if (!regexEng.test(initialValue.eng)) {
      alert("Error in eng");
    }
    else console.log(initialValue.eng)
   
    }
    checkEng();

    const regexTransl = new RegExp(/[^А-яЁё ]/g,"");
  
    const checkTransl = () => {
      if (!regexTransl.test(initialValue.translation)) {
        alert("Error in translation");
      }
      else console.log(initialValue.translation)
     
      }
      checkTransl();
  


  //   function checkEng(eng) {
  //     const regexEng = new RegExp('/^[A-ZА-ЯЁ]+$/i');
      
  //     if (eng !== regexEng) {
  //       console.log(initialValue.eng)
        
  //     }
  //     else alert("Error in Eng");
  //     }
  
  //     checkEng();

   }


    return (


          <div className='wordsListTableContainer'>
             
        {isInputShow
             ?      <div >
             <form className='inputTable'>
             <input className='idInput' placeholder='id' type='text' onChange={onChangeValue} name="id" value={initialValue.id} required></input>
             <input className='englishInput' placeholder='english word' type='text' onChange={onChangeValue} name="eng" value={initialValue.eng} required></input>
             <input className='transcriptionInput' placeholder='transcript' type='text' onChange={onChangeValue} name="transcript" value={initialValue.transcript} required></input>
             <input className='russianInput' placeholder='translation' type='text' onChange={onChangeValue} name="translation" value={initialValue.translation} required></input>
     
             <div className='tableButtons'>
              <button className='listButton' type='submit' onClick={handleSaveWordChange} disabled={!validateInputs} >Save</button>
              <button className='listButton' type='submit' onClick={handleCancelWordChange}>Cancel</button>
              </div>
             </form>
             {/* {console.log(initialValue)} */}
             </div> 
             : <div className='wordsList'>
            {wordsList.map((item)=>
                <Table key={item.id} id={item.id} english={item.english} transcription={item.transcription} russian={item.russian} tags={item.tags} isActive = {item.isActive} index = {item.index} handleCorrectWord = {handleCorrectWord} handleDeleteWord = {handleDeleteWord} />
                  )}
            </div>} 
            </div>

)
}

export default WordsList;



// const [valueId, setValueId] = useState('');
//   const onChangeValueId = (e) => {
//       setValueId(e.target.value);

//       if (valueId.length>0)
//       console.log(valueId);
//       return true;
     
// }

//   const [valueEng, setValueEng] = useState('');
//   const onChangeValueEng = (e) => {
//       setValueEng(e.target.value);

//       if (valueEng.length>0)
//       console.log(valueEng);
//       return true;
      
// }

//   const [valueTranscript, setValueTranscript] = useState('');
//   const onChangeValueTranscript = (e) => {
//       setValueTranscript(e.target.value);

//       if (valueTranscript.length>0)
//       console.log(valueTranscript);
//       return true;
      
// }

//   const [valueTranslate, setValueTranslate] = useState('');
//   const onChangeValueTranslate = (e) => {
//       setValueTranslate(e.target.value);

//       if (valueTranslate.length>0)
//       console.log(valueTranslate);
//       return true; 
// }


        //   <div className={styles.wordsListTableContainer}>
             
        // {isInputShow
        //      ? <Input handleCancelWordChange = {handleCancelWordChange} handleSaveWordChange = {handleSaveWordChange}   />
        //      : <div className={styles.wordsList}>
        //     {wordsList.map((item)=>
        //         <Table key={item.id} id={item.id} english={item.english} transcription={item.transcription} russian={item.russian} tags={item.tags} isActive = {item.isActive} index = {item.index} handleCorrectWord = {handleCorrectWord} handleDeleteWord = {handleDeleteWord} />
        //           )}
        //     </div>} 

        //     </div>
    
        


    