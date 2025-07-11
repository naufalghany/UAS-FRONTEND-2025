import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <nav className={styles.footer}>
      <div>
        <h3 className={styles.footer__brand}>Covid ID</h3>
        <p className={styles.footer__credit}>Developed by naufalghany</p>
      </div>
      <ul className={styles.footer__list}>
        <li className={styles.footer__item}>
          <a href="https://github.com/naufalghany" target="_blank">
            <FaGithub />
            GitHub
          </a>
        </li>
        <li className={styles.footer__item}>
          <a href="https://www.linkedin.com/in/naufal-ghany-7b3b50251/" target="_blank">
            <FaLinkedin />
            LinkedIn
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
