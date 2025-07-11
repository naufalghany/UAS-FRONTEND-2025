import styles from "./Section.module.css";

function checkBgColor(bgColor) {
  switch (bgColor) {
    case "bglight":
      return "bglight-color";
    case "light":
      return "light-color";
    default:
      return "default-color"; // Tambahkan fallback biar aman
  }
}

const Section = ({ title, subtitle, children, bgColor }) => {
  return (
    <section
      className={styles.Section}
      style={{ backgroundColor: `var(--${checkBgColor(bgColor)})` }}
    >
      <div className={styles.Section__container}>
        <div className={styles.Section__header}>
          <h1 className={styles.Section__title}>{title}</h1>
          <p className={styles.Section__subtitle}>{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
