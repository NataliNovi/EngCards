import styles from './header.module.scss';

function Header () {
    return (
        <div className={styles.header}>
            <div className="header-logo">Logo</div>
            <div className="header-search">Search</div>
            <div className="header-login">Log In</div>
            <div className="header-signup">Sign Up</div>
        </div>
    );
}
export default Header;
