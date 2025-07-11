import { formatNumber } from "../../../../utils/helpers";

const ProvinceTableData = ({ regions, no }) => {
  const isIndonesiaRegion = "numbers" in regions;

  if (isIndonesiaRegion) {
    return (
      <tr>
        <td>
          <b>{no}</b>
        </td>
        <td>{regions.name}</td>
        <td>{formatNumber(regions.numbers.confirmed)}</td>
        <td>{formatNumber(regions.numbers.recovered)}</td>
        <td>{formatNumber(regions.numbers.treatment)}</td>
        <td>{formatNumber(regions.numbers.death)}</td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>
          <b>{no}</b>
        </td>
        <td>{regions.kota}</td>
        <td>{formatNumber(regions.kasus)}</td>
        <td>{formatNumber(regions.sembuh)}</td>
        <td>{formatNumber(regions.dirawat)}</td>
        <td>{formatNumber(regions.meninggal)}</td>
      </tr>
    );
  }
};

export default ProvinceTableData;
