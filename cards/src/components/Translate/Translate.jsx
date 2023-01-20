import './translate.css';
//import {cardsArr} from './const_cardsArr';

function Translate (props) {

    console.log(props.translate)
   

    return (
        <>
         <div className="card-title">Answer: {props.title}</div>
        <div className="card-transcription">Transcription: {props.transcript}</div>
        <div className="card-sample">Sample: {props.sample}</div>
        <div className="card-translate">Translate: {props.translate}</div>
        </>
    );
}
export default Translate;

