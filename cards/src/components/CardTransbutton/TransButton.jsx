import styles from './transbutton.module.scss';
//import React, {useState} from 'react';

function TransButton (props) {
    //console.log(props)
   
    return (
        
        <div className={styles.button}>
           <button className={styles.transButton} onClick = {() => props.handleShowTranslate()}>Answer</button>
        </div>
         
    );
}
export default TransButton;