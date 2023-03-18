import styles from "./wordtranslate.module.scss";
//import {cardsArr} from './const_cardsArr';

function WordTranslate(props) {
  console.log(props.translate);

  return (
    <>
      <div className={styles.cardTranslate}>Translate: {props.translate}</div>
      <div className="card-transcription">
        Transcription: {props.transcript}
      </div>
      <button
        className={styles.hideAnswer}
        onClick={() => props.handleHideWordTranslate()}
      >
        Hide translate
      </button>
    </>
  );
}
export default WordTranslate;
