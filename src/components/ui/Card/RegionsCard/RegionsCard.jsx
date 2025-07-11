import Card from "../Card";
import styles from "./Regions.module.css";
import { PiFaceMask, PiSkull } from "react-icons/pi";
import { BiHappyBeaming } from "react-icons/bi";
import { formatNumber } from "../../../../utils/helpers";

/**
 * @param {{ 
 *  region: string, 
 *  numbers: { confirmed: number, recovered: number, death: number } 
 * }} props
 */
const RegionsCard = ({ region, numbers }) => {
  return (
    <Card>
      <div className={styles.RegionsCard}>
        <h4 className={styles.RegionsCard__title}>{region}</h4>
        <div className={styles.RegionsCard__row}>
          <div className={styles.RegionsCard__field}>
            <p className={styles.RegionsCard__status}>Confirmed</p>
            <p className={styles.RegionsCard__data}>
              {formatNumber(numbers.confirmed)}
            </p>
          </div>
          <PiFaceMask className={styles.RegionsCard__icon} />
        </div>
        <div className={styles.RegionsCard__row}>
          <div className={styles.RegionsCard__field}>
            <p className={styles.RegionsCard__status}>Recovered</p>
            <p className={styles.RegionsCard__data}>
              {formatNumber(numbers.recovered)}
            </p>
          </div>
          <BiHappyBeaming className={styles.RegionsCard__icon} />
        </div>
        <div className={styles.RegionsCard__row}>
          <div className={styles.RegionsCard__field}>
            <p className={styles.RegionsCard__status}>Death</p>
            <p className={styles.RegionsCard__data}>
              {formatNumber(numbers.death)}
            </p>
          </div>
          <PiSkull className={styles.RegionsCard__icon} />
        </div>
      </div>
    </Card>
  );
};

export default RegionsCard;
