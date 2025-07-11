import styles from "./Form.module.css";
import formImage from "../../assets/images/form.png";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useCovidDataCtx } from "../../contexts/DataCovidProvider.jsx";

const statuses = ["sembuh", "meninggal", "dirawat"];

const FormProvince = () => {
  const { dataCovid, setDataCovid } = useCovidDataCtx();
  const [selectedKotaValue, setSelectedKotaValue] = useState(
    dataCovid.provinces[0].kota
  );
  const [selectedStatusValue, setSelectedStatusValue] = useState("sembuh");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKotaChange = (e) => {
    setSelectedKotaValue(e.target.value);
  };

  const handleStatusChange = (e) => {
    setSelectedStatusValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProvinces = dataCovid.provinces.map((province) => {
      if (province.kota === selectedKotaValue && parseInt(inputValue) > 0) {
        return {
          ...province,
          kasus: province.kasus + parseInt(inputValue, 10),
          [selectedStatusValue]:
            province[selectedStatusValue] + parseInt(inputValue, 10),
        };
      }
      return province;
    });

    setDataCovid((prevState) => ({
      ...prevState,
      provinces: updatedProvinces,
    }));
  };

  return (
    <div id="form" className={styles.form}>
      <div className={styles.form__image}>
        <img src={formImage} alt="Form IMG Illustration" />
      </div>
      <div className={styles.form__content}>
        <h1 className={styles.form__title}>Form Covid</h1>
        <form action="">
          <label className={styles.form__label} htmlFor="provinces">
            Provinsi
          </label>
          <select
            className={styles.form__input}
            name="provinces"
            id="provinces"
            value={selectedKotaValue}
            onChange={handleKotaChange}
          >
            {dataCovid.provinces.map((province) => (
              <option key={nanoid(3)} value={province.kota}>
                {province.kota}
              </option>
            ))}
          </select>
          <label className={styles.form__label} htmlFor="status">
            Status
          </label>
          <select
            className={styles.form__input}
            name="status"
            id="status"
            value={selectedStatusValue}
            onChange={handleStatusChange}
          >
            <option value="sembuh">Sembuh</option>
            <option value="dirawat">Di Rawat</option>
            <option value="meninggal">Meninggal</option>
          </select>
          <label className={styles.form__label} htmlFor="total">
            Jumlah
          </label>
          <input
            className={styles.form__input}
            type="number"
            name="total"
            id="total"
            placeholder="0"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className={styles.form__button} onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormProvince;
