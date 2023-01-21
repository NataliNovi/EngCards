import styles from './cardtranslate.module.scss';
//import {cardsArr} from './const_cardsArr';

function Translate (props) {

    console.log(props.translate)
   
    return (
        <>
         <div className={styles.cardTitle}>Answer: {props.title}</div>
        <div className="card-transcription">Transcription: {props.transcript}</div>
        <div className="card-sample">Sample: {props.sample}</div>
        <div className={styles.cardTranslate}>Translate: {props.translate}</div>
        <button className={styles.hideAnswer} onClick={() => props.handleHideAnswer()}>Hide answer</button>
        </>
    );
}
export default Translate;

