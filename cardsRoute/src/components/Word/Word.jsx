import { useState } from 'react';
import styles from './word.module.scss';
import WordTransButton from '../WordTransButton/WordTransButton';
import WordTranslate from '../WordTranslate/WordTranslate';

function Word (props) {
    const {photo, title, transcript, translate} = props;
    const [isTranslateWord, setIsTranslateWord] = useState(false);

    const handleShowWordTranslate = () => {
        setIsTranslateWord(!isTranslateWord)
    }

    const handleHideWordTranslate = () => {
        setIsTranslateWord(!isTranslateWord)
    }

    return (
        <div className={styles.word}>

            <img src ={photo} className={styles.wordImg} alt='wordPicture'></img>
            <div className={styles.wordTitle}>{title}</div>
           

            {isTranslateWord
            ? <WordTranslate translate = {translate} transcript={transcript} handleHideWordTranslate={handleHideWordTranslate}/>
            : <WordTransButton handleShowWordTranslate = {handleShowWordTranslate}/>
            }

        </div>
    );
}
export default Word;

