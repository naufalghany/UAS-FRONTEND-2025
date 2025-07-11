import {
  useState,
  createContext,
  useContext,
} from "react";
import data from "../utils/constants/provinces.js";

/**
 * @typedef {Object} CovidDataContextType
 * @property {Object} dataCovid
 * @property {Function} setDataCovid
 */

/**
 * @typedef {Object} CovidDataProviderProps
 * @property {React.ReactNode} children
 */

export const CovidDataCtx = createContext(undefined);

export function useCovidDataCtx() {
  const covidData = useContext(CovidDataCtx);

  if (covidData === undefined) {
    throw new Error("useCovidDataCtx must be used within a CovidDataProvider");
  }

  return covidData;
}

export const CovidDataProvider = ({ children }) => {
  const [dataCovid, setDataCovid] = useState(data);

  const value = {
    dataCovid,
    setDataCovid,
  };

  return (
    <CovidDataCtx.Provider value={value}>
      {children}
    </CovidDataCtx.Provider>
  );
};
