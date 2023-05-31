import PropTypes from 'prop-types';
import css from 'components/statistics/Statistics.module.css';

export const Statistics = ({ stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>
      <ul className={css.statlist}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={css.statItem}>
            <div className={css.card}>
              <div className={css.card2}>
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
};
