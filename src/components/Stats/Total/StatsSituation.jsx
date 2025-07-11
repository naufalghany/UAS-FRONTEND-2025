import { useCovidDataCtx } from "../../../contexts/DataCovidProvider";
import RegionsCard from "../../ui/Card/RegionsCard/RegionsCard";
import Section from "../../ui/Section/Section";
import styles from "./StatsSituation.module.css";
import { nanoid } from "nanoid";

/**
 * @typedef {Object} StatsProvincesProps
 * @property {Array} [regions]
 */

const StatsProvinces = ({ regions }) => {
  const { dataCovid } = useCovidDataCtx();

  const provincesData = regions || dataCovid.provinces;

  return (
    <Section
      title="Provinsi di Indonesia"
      subtitle="Data Covid Berdasarkan Provinsi"
      bgColor="bgwhite"
    >
      <div className={styles.StatsProvinces__body}>
        {provincesData.map((province) => (
          <span key={nanoid(5)}>
            <RegionsCard
              region={province.kota}
              numbers={{
                confirmed: province.kasus,
                recovered: province.sembuh,
                death: province.meninggal,
              }}
            />
          </span>
        ))}
      </div>
    </Section>
  );
};

export default StatsProvinces;
