import "./footer.scss";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__item_footer-home">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="footer__item_footer-wordslist">
          <NavLink to="/wordslist">Words List</NavLink>
        </div>
        <div className="footer__item_footer-wordsgame">
          <NavLink to="/wordsgame">Words Game</NavLink>
        </div>
        <div className="footer__item_footer-flashcards">
          <NavLink to="/cardsgame">Cards Game</NavLink>
        </div>
      </div>
    </>
  );
}
export default Footer;
