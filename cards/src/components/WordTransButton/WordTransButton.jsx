import styles from './wordtransbutton.module.scss';
//import React, {useState} from 'react';

function WordTransButton (props) {
    //console.log(props)
   
    return (
        
        <div className={styles.button}>
           <button className={styles.transButton} onClick = {() => props.handleShowWordTranslate()}>Translate</button>
        </div>
         
    );
}
export default WordTransButton;