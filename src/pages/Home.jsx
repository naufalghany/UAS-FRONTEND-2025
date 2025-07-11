import { useState, useEffect } from "react";
import Hero from "../components/Hero/Hero";
import StatsRegions from "../components/Stats/Regions/StatsRegions";
import StatsSituation from "../components/Stats/Total/StatsSituation";
import axios from "axios";
import ENDPOINTS from "../utils/constants/endpoints";

const Home = () => {
  const [globalStats, setGlobalStats] = useState(null);

  useEffect(() => {
    async function fetchGlobalData() {
      try {
        const res = await axios.get(ENDPOINTS.GLOBAL);
        setGlobalStats(res.data);
      } catch (error) {
        console.error("Failed to fetch global data:", error);
      }
    }

    fetchGlobalData();
  }, []);

  return (
    <>
      <Hero />
      {globalStats ? (
        <>
          <StatsSituation
            title="Global Situation"
            subtitle="Data Covid Berdasarkan Global"
            stats={globalStats.global}
          />

          <StatsRegions stats={globalStats.regions} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Home;
