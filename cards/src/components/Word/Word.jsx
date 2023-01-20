import styles from './word.module.scss';

function Word (props) {
    const {photo, title, mean, transcript, translate, theme, sample, isSelected} = props;
    let classWord = isSelected ? "selected":"";


    //className={`${class} ${isSelected && newClass}`}


    return (
        <div className={`${styles.word} ${isSelected && classWord}`}>

            <img src ={photo} className={styles.wordImg} alt='wordPicture'></img>
            <div className={styles.wordTitle}>{title}</div>
            <div className={styles.wordMeaning}>Meaning: {mean}</div>
            <div className={styles.wordTranscription}>Transcription: {transcript}</div>
            <div className="word-translation">Translate: {translate}</div>
            <div className="word-theme">Theme: {theme}</div>
            <div className="word-sample">Sample: {sample}</div>

        </div>
    );
}
export default Word;
