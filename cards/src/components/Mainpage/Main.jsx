import styles from './main.module.scss';
import photo from '/Users/nn/Desktop/Frontend/React/engProject/cards/src/assets/photo/photo.webp';
function Main () {
    return (
        <div className={styles.main}>
      <img className = {styles.mainImg} src={photo} alt ="mainPhoto"></img>
            <div className={styles.mainSlogan}>Studying with us</div>
        </div>
    );
}
export default Main;


/*  <img src="https://img.freepik.com/free-photo/close-up-hand-writing-notebook-top-view_23-2148888824.jpg?w=2000&t=st=1671365059~exp=1671365659~hmac=f80c2aeafc0c24b32583548b6457765c4569d8da9c862e694429a04cfb24e45a" alt="mainPhoto"></img> */