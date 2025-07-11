import heroImage from "../../assets/images/hero.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div id="about" className={styles.hero}>
      <div className={styles.hero__content}>
        <div className={styles.hero__header}>
          <h1 className={styles.hero__title}>Covid ID</h1>
          <p className={styles.hero__subtitle}>Monitoring Perkembangan Covid</p>
        </div>
        <div className={styles.hero__body}>
          <p className={styles.hero__text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since.
          </p>
          <button className={styles.hero__button}>Vaccine</button>
        </div>
      </div>
      <div className={styles.hero__image}>
        <img src={heroImage} alt="Hero IMG Illustration" />
      </div>
    </div>
  );
};

export default Hero;
