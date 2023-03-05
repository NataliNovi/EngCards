import styles from './footer.module.scss';

function Footer () {
    return (
        <div className={styles.footer}>
            <div className="footer-home">Home</div>
            <div className="footer-flashwords">Words</div>
            <div className="footer-flashcards">Cards</div>
            <div className="footer-about">About</div>
            <div className="footer-contact">Contact</div>
        </div>
    );
}
export default Footer;
