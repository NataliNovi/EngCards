import React from "react";
import styles from "./learned.module.scss";

export default function Learned(props) {
  return (
    <div className={styles.learnedWords}>
      Learned {props.countLearnedWords} words
    </div>
  );
}
