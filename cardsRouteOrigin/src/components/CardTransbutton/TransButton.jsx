import React, { forwardRef } from 'react';
import styles from './transbutton.module.scss';


const TransButton = forwardRef(({handleShowAnswer}, ref) => (

        <div className={styles.button}>
           <button ref={ref} className={styles.transButton} onClick = {() => handleShowAnswer()}>Answer</button>
        </div>
         
 ) );
    
export default TransButton;