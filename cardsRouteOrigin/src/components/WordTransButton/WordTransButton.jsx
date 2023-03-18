import styles from './wordtransbutton.module.scss';


function WordTransButton (props) {
       
    return (
        
        <div className={styles.button}>
           <button className={styles.transButton} onClick = {() => props.handleShowWordTranslate()}>Translate</button>
        </div>
         
    );
}
export default WordTransButton;