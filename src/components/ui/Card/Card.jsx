import styles from "./Card.module.css";

/**
 * @param {{ children: React.ReactNode }} props
 */
const Card = ({ children }) => {
  return <div className={styles.Card}>{children}</div>;
};


export default Card;
