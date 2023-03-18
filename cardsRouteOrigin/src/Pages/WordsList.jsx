import React, {useState} from 'react'
import './wordslist.scss'
import {MyContext} from '..//context/MyContext';
import { useContext } from 'react';
import DelServices from '../services/DelServices';


 function WordsList() {
  const {valueContext, setValueContext} = useContext(MyContext);
  console.log(valueContext)


  async function handleDeleteWord(id) {
    //console.log(id)
    DelServices.delWords(id)
    const copyContext = [...valueContext]
    const copyContextDel = copyContext.filter(item => item.id !==id)
    setValueContext(copyContextDel)
  }

  
    const[isInputShow, setIsInputShow] = useState(false);

    async function handleChangeWord () {
      setIsInputShow(!isInputShow)
    }
  
    const handleCancelWordChange = () => {
      setIsInputShow(!isInputShow)
    }


  
//это к таблице со словами
// const wordsList = wordsListArr;

//  const [words, setWords] = useState(wordsList);

 //const handleDeleteWord = (id) => {
//   words.forEach(el => {

//    if(el.isActive) {
//          el.isActive=false;
//   }
   
//  if(el.id === id) {
//      el.isActive = true;
//     }
//    setWords([...words])

//    if(el.isActive===true) {
//    console.log('удалили элемент с индексом ' + el.index)
//    wordsList.splice(`${el.index}`, 1)
//        }

//  })
//}

 
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


const handleSaveWordChange = (e) => {
  e.preventDefault(e);
  setIsInputShow(!isInputShow)


 
  //const regexEng = new RegExp(/^[a-zA-Z]*$/);
  //const regexEng = new RegExp(/[a-zA-Z0-9]+/gu);
  const regexEng = new RegExp(/^[A-Za-z\s]*$/);
  
  const checkEng = () => {
    if (!regexEng.test(initialValue.eng)) {
      alert("Error in english word");
      setIsInputShow(isInputShow===false);
    }
    else console.log(initialValue.eng)
   
    }
    checkEng();


    const regexTransl = new RegExp(/^[a-яё]+(?:[ -][a-яё]+)*$/i)
  
    const checkTransl = () => {
      if (!regexTransl.test(initialValue.translation)) {
        alert("Error in translation");
      }
      else console.log(initialValue.translation)
     
      }
      checkTransl();
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
           
             </div> 

            : <div className='wordsList'>
               <div>
              {valueContext.map((item, key)=>
              (
              <div className = "tableRow" key = {key}>
                <span>{item.id}</span><span>{item.english}</span><span>{item.transcription}</span><span>{item.russian}</span><span>{item.tags}</span>
                <button className='listButton' onClick={()=>{handleChangeWord(item.id)}}>Change</button>
                <button className='listButton' onClick={()=>{handleDeleteWord(item.id)}}>Delete</button>
               

              </div>
              ))}
            </div>

            </div>

            }
            </div>)}



export default WordsList;





    