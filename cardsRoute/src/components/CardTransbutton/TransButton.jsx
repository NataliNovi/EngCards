import React, { forwardRef } from 'react';
import styles from './transbutton.module.scss';
//import React, {useState} from 'react';

const TransButton = forwardRef(({handleShowTranslate}, ref) => (
    //console.log(props)
   
  
        <div className={styles.button}>
           <button ref={ref} className={styles.transButton} onClick = {() => handleShowTranslate()}>Answer</button>
        </div>
         
 ) );
    
export default TransButton;