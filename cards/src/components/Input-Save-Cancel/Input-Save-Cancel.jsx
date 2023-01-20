import styles from './input.module.scss';

function Input (props) {
    return (
        
        <div className={styles.inputTable}>
           
            <input className={styles.id}></input>
            <input className={styles.english}></input>
            <input className={styles.transcription}></input>
            <input className={styles.russian}></input>
            <div className={styles.tableButtons}><button className={styles.listButton}>Save</button><button className={styles.listButton}>Cancel</button></div>
            </div>
         
    );
}
export default Input;