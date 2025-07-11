import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <Link className={styles.navbar__brand} to="/">
          <h2>Covid ID</h2>
        </Link>
      </div>
      <ul className={styles.navbar__list}>
        <li className={styles.navbar__item}>
          <Link to="/about">About</Link>
        </li>
        <li className={styles.navbar__item}>
          <Link className={styles.navbar__brand} to="/">
            Global
          </Link>
        </li>
        <li className={styles.navbar__item}>
          <Link to="/indonesia">Indonesia</Link>
        </li>
        <li className={styles.navbar__item}>
          <Link to="/province">Province</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
