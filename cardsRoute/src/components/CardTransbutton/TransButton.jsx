import React, { forwardRef } from 'react';
import styles from './transbutton.module.scss';
//import React, {useState} from 'react';


const TransButton = forwardRef(({handleShowAnswer}, ref) => (

        <div className={styles.button}>
           <button ref={ref} className={styles.transButton} onClick = {() => handleShowAnswer()}>Answer</button>
        </div>
         
 ) );
    
export default TransButton;