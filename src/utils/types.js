/**
 * @typedef {"confirmed" | "recovered" | "death" | "treatment"} Status
 */

/**
 * @typedef {Object} BaseStats
 * @property {number} confirmed
 * @property {number} recovered
 * @property {number} death
 */

/**
 * @typedef {Object} RegionBase
 * @property {string} type
 * @property {string} name
 */

/**
 * @typedef {Object} TotalData
 * @property {Status} status
 * @property {number} total
 * @property {string} detail
 */

/**
 * @typedef {Object} StatsData
 * @property {string} last_update
 * @property {TotalData[]} indonesia
 */

/**
 * @typedef {Object} DataProvince
 * @property {number} [no]
 * @property {string} [kota]
 * @property {number} kasus
 * @property {number} sembuh
 * @property {number} meninggal
 * @property {number} dirawat
 */

/**
 * @typedef {Object} StatsDataProvinces
 * @property {string} last_update
 * @property {number} total_province
 * @property {DataProvince[]} provinces
 */

/**
 * @typedef {Object} GlobalRegion
 * @property {string} type
 * @property {string} name
 * @property {BaseStats} numbers
 */

/**
 * @typedef {Object} IndonesiaRegion
 * @property {string} type
 * @property {string} name
 * @property {BaseStats & {treatment: number}} numbers
 */

/**
 * @typedef {Object} StatEntry
 * @property {Status} status
 * @property {number} total
 */

/**
 * @typedef {Object} GlobalData
 * @property {string} last_update
 * @property {StatEntry[]} global
 * @property {GlobalRegion[]} regions
 */

/**
 * @typedef {Object} IndonesiaData
 * @property {string} last_update
 * @property {StatEntry[]} indonesia
 * @property {IndonesiaRegion[]} regions
 */

/**
 * @typedef {Object} SectionStatsProps
 * @property {string} title
 * @property {GlobalData | IndonesiaData} stats
 */
