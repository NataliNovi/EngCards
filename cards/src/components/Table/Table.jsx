import styles from './table.module.scss';
import React, {useState} from 'react';

function Table (props) {
    console.log('isActive  ' + props.isActive)
    console.log("id " + props.id)
    console.log("index  " + props.index)


    const [id, setId] = useState(props.id);

    return (
        
        <div className={styles.wordsListTable}>
            <div className={styles.id}>{props.id}</div>
            <div className={styles.english}>{props.english}</div>
            <div className={styles.transcription}>{props.transcription}</div>
            <div className={styles.russian}>{props.russian}</div>
            <div className={styles.tableButtons}><button className={styles.listButton}onClick={() => props.handleCorrectWord()} >Correct</button><button className={styles.listButton} onClick={() => props.handleDeleteWord(props.id)}>Delete</button></div>
        </div>
         
    );
}
export default Table;

/* должны отображаться либо поля для чтения и с кнопками редактировать/удалить, либо поля ввода с кнопками сохранить/отмена. */