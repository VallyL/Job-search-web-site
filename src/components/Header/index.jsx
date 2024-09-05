import CooljobLogo from "../../assets/icons/Cooljob.svg";
import styles from "../../components/Header/styles.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.navContainer}>
      <Link to="/">
        <img src={CooljobLogo} alt="cooljob_logo" className={styles.navLogo} />
      </Link>
      <div className={styles.linksContainer}>
        <div className={styles.innerLinkBtnCont}>
          <Link className={styles.navLinks} to="/vacancies">
            Job Search
          </Link>
        </div>
        <div className={styles.innerLinkBtnCont}>
          <Link to="/modalwindow" className={styles.navLinks}>
            Register
          </Link>
          <Link to="/modalwindow" className={styles.navBtn}>
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
