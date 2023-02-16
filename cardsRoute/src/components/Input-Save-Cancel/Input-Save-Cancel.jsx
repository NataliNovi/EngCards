import styles from './input.module.scss';

function Input (props) {
    console.log(props)
    return (
        
        <div className={styles.inputTable}>
           
            <input className={styles.id} placeholder='id'>{props.id}</input>
            <input className={styles.english} placeholder='english word'></input>
            <input className={styles.transcription} placeholder='transcript'></input>
            <input className={styles.russian} placeholder='translate'></input>
            <div className={styles.tableButtons}><button className={styles.listButton} onClick={() => props.handleSaveWordChange()}>Save</button><button className={styles.listButton} onClick={() => props.handleCancelWordChange()}>Cancel</button></div>

           
            </div>
         
    );
}
export default Input;