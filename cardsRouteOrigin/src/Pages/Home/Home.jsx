import React from "react";
import styles from "./home.module.scss";
import photo from "..//..//assets/photo/mainPhoto.avif";

export default function Home() {
  return (
    <div className={styles.main}>
      <img className={styles.mainImg} src={photo} alt="mainPhoto"></img>
      <div className={styles.mainSlogan}>Studying with us</div>
    </div>
  );
}
