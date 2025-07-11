/**
 * @param {{
 *  status: string,
 *  colorStats?: string,
 *  stats: string,
 *  icon: React.ReactNode
 * }} props
 */
const StatsCard = ({ status, colorStats, stats, icon }) => {
  return (
    <Card>
      <div className={styles.StatsCard}>
        <div className={styles.StatsCard__header}>
          {icon}
          <h4 className={styles.StatsCard__title}>
            {capitalizeFirstLetter(status)}
          </h4>
        </div>
        <p
          className={styles.StatsCard__data}
          style={{ color: `var(--${colorStats})` }}
        >
          {stats}
        </p>
      </div>
    </Card>
  );
};
