import styles from './input.module.scss';
import { useState } from 'react';



function Input (props) {
    //console.log(props)


    const [valueId, setValueId] = useState('');
    const onChangeValueId = (e) => {
        setValueId(e.target.value);
        //console.log(valueId.length)

        if (valueId.length > 0) {
            console.log(valueId);
            return valueId
        }
        else console.log ('error'); 
    }
    
    const [valueEng, setValueEng] = useState('');
    const onChangeValueEng = (e) => {
        setValueEng(e.target.value);
        //console.log(valueEng)
    }

    const [valueTranscript, setValueTranscript] = useState('');
    const onChangeValueTranscript = (e) => {
        setValueTranscript(e.target.value);
        //console.log(valueTranscript)
    }

    const [valueTranslate, setValueTranslate] = useState('');
    const onChangeValueTranslate = (e) => {
        setValueTranslate(e.target.value);
        //console.log(valueTranslate)
    }

    return (
        
        // <div >
        //     <form className={styles.inputTable}>
        //     <input className={styles.id} placeholder='id' type='text' onChange={()=>props.onChangeValueId()} value={valueId} >{props.id}</input>
        //     <input className={styles.english} placeholder='english word' type='text' onChange={()=>props.onChangeValueEng()} value={valueEng} ></input>
        //     <input className={styles.transcription} placeholder='transcript' type='text' onChange={()=>props.onChangeValueTranscript()} value={valueTranscript} ></input>
        //     <input className={styles.russian} placeholder='translate' type='text' onChange={()=>props.onChangeValueTranslate()} value={valueTranslate} ></input>
        //     <div className={styles.tableButtons}><button className={styles.listButton} type='submit' onClick={() => props.handleSaveWordChange()}>Save</button><button className={styles.listButton} type='submit' onClick={() => props.handleCancelWordChange()}>Cancel</button></div>
        //     </form>
        // </div>

        <div >
        <form className={styles.inputTable}>
        <input className={styles.id} placeholder='id' type='text' onChange={onChangeValueId} value={valueId} >{props.id}</input>
        <input className={styles.english} placeholder='english word' type='text' onChange={onChangeValueEng} value={valueEng} ></input>
        <input className={styles.transcription} placeholder='transcript' type='text' onChange={onChangeValueTranscript} value={valueTranscript} ></input>
        <input className={styles.russian} placeholder='translate' type='text' onChange={onChangeValueTranslate} value={valueTranslate} ></input>

        <div className={styles.tableButtons}><button className={styles.listButton} type='submit' onClick={() => props.handleSaveWordChange()}>Save</button><button className={styles.listButton} type='submit' onClick={() => props.handleCancelWordChange()}>Cancel</button></div>
        </form>
        </div>
         
    );
}
export default Input;