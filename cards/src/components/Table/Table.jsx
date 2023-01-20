import styles from './table.module.scss';

function Table (props) {

    return (
        
        <div className={styles.wordsListTable}>
           
            <div className={styles.id}>{props.id}</div>
            <div className={styles.english}>{props.english}</div>
            <div className={styles.transcription}>{props.transcription}</div>
            <div className={styles.russian}>{props.russian}</div>
            <div className={styles.tableButtons}><button className={styles.listButton}>Save</button><button className={styles.listButton}>Correct</button><button className={styles.listButton}>Delete</button></div>
            </div>
         
    );
}
export default Table;