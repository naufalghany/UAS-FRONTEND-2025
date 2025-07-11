import RegionsCard from "../../ui/Card/RegionsCard/RegionsCard";
import styles from "./StatsRegions.module.css";
import { nanoid } from "nanoid";
import Section from "../../ui/Section/Section";

/**
 * @typedef {Object} StatsRegionProps
 * @property {Array} stats
 */

/**
 * @param {StatsRegionProps} props
 */
const StatsRegions = ({ stats }) => {
  return (
    <Section
      title="Situation By Regions"
      subtitle="Data Berdasarkan dengan daerah."
      bgColor="light"
    >
      <div className={styles.StatsRegions__body}>
        {stats?.map((data) => (
          <span key={nanoid(5)}>
            <RegionsCard region={data.name} numbers={data.numbers} />
          </span>
        ))}
      </div>
    </Section>
  );
};

export default StatsRegions;
