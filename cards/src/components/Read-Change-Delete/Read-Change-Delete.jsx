import styles from './read.module.scss';

function Read (props) {
    console.log(props);
    return (
        
        <div className={styles.readTable}>
           
            <div className={styles.id}>{props.id}</div>
            <div className={styles.english}>{props.english}</div>
            <div className={styles.transcription}>{props.transcription}</div>
            <div className={styles.russian}>{props.russian}</div>
            <div className={styles.tableButtons}><button className={styles.listButton}>Change</button><button className={styles.listButton}>Delete</button></div>
            </div>
         
    );
}
export default Read;