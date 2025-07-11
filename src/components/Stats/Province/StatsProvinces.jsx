import styles from "./StatsProvinces.module.css";
import ProvinceTableData from "./TableData/ProvinceTableData";
import { nanoid } from "nanoid";
import Section from "../../ui/Section/Section";
import { useCovidDataCtx } from "../../../contexts/DataCovidProvider";

/**
 * @typedef {Object} StatsProvincesProps
 * @property {Array} [regions]
 */

/**
 * @param {StatsProvincesProps} props
 */
const StatsProvinces = ({ regions }) => {
  const { dataCovid } = useCovidDataCtx();

  // Default to dataCovid.provinces if regions not passed
  if (!regions) {
    regions = dataCovid.provinces;
  }

  return (
    <Section
      title="Situation By Provinces"
      subtitle="Data Covid Berdasarkan Provinsi"
      bgColor="bglight"
    >
      <div className={styles.StatsProvince__tableContainer}>
        <table className={styles.StatsProvince__table}>
          <thead>
            <tr className={styles.StatsProvince__tableth}>
              <th>No</th>
              <th>Provinsi</th>
              <th>Kasus</th>
              <th>Sembuh</th>
              <th>Dirawat</th>
              <th>Meninggal</th>
            </tr>
          </thead>
          <tbody>
            {regions.map((data, index) => (
              <ProvinceTableData
                key={nanoid(5)}
                no={index + 1}
                regions={data}
              />
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
};

export default StatsProvinces;
