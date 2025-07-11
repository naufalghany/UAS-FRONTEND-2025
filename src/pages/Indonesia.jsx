import { useState, useEffect } from "react";
import Hero from "../components/Hero/Hero";
import axios from "axios";
import StatsSituation from "../components/Stats/Total/StatsSituation";
import StatsProvinces from "../components/Stats/Province/StatsProvinces";
import ENDPOINTS from "../utils/constants/endpoints";

const Indonesia = () => {
  const [indoStats, setIndoStats] = useState(null);

  useEffect(() => {
    async function fetchIndoData() {
      try {
        const res = await axios.get(ENDPOINTS.INDONESIA);
        setIndoStats(res.data);
      } catch (error) {
        console.error("Failed to fetch Indonesia data:", error);
      }
    }

    fetchIndoData();
  }, []);

  return (
    <>
      <Hero />
      {indoStats?.indonesia ? (
        <StatsSituation
          title="Indonesia Situation"
          subtitle="Data Covid Berdasarkan Indonesia"
          stats={indoStats.indonesia}
        />
      ) : (
        <p>Loading data Indonesia...</p>
      )}
      {indoStats?.regions ? (
        <StatsProvinces regions={indoStats.regions} />
      ) : (
        <p>Loading provinces data...</p>
      )}
    </>
  );
};

export default Indonesia;
