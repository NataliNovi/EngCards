import React, {useState} from 'react'
import styles from './learned.module.scss';

export default function Learned(props) {
//console.log(props);

// const [notes, setNotes] = useState([1, 2, 3, 4, 5]);

// const result = notes.map((note, index) => {
//   return <p key={index}>{note}</p>;
// });
	
// return <div>
// {result}
// </div>;


// var obj = { 'France': 'Paris', 'England': 'London' };
// // Iterate over the property names:
// for (let country of Object.keys(obj)) {
//     var capital = obj[country];
//     console.log(country, capital);
// }

// for (const [country, capital] of Object.entries(obj))
//     console.log(country, capital);




    //const [countLearnedWords, setCountLearnedWords] = useState(0);

  return (



      <div className={styles.learnedWords}>Learned {props.countLearnedWords} words</div>
  )
}


