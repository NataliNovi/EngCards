import Input from '../Input-Save-Cancel/Input-Save-Cancel';
//import Read from './components/Read-Change-Delete/Read-Change-Delete';
import Read from '../Read-Change-Delete/Read-Change-Delete';
//import { wordsListArr } from './constants/wordsList';


const isInputField = true;
//const wordsList = wordsListArr;
  let actionItem;

  /*if (isInputField) { 
    actionItem = <Input/>; 
  }  else {
    actionItem = <Header/>
  }*/

  if (!isInputField) { 
    actionItem = <Input/>; 
  }  else {
    actionItem = <Read/>
  }

 

  function Choice (props) {

    return (
        
        <div>
            <p>Hello! Hello!</p>
            {actionItem}
           
            </div>
         
    );
}
export default Choice;


  /*{wordsList.map((item)=>
        <Read key={item.id} id={item.id} english={item.english} transcription={item.transcription} russian={item.russian} tags={item.tags}/>
      )}*/