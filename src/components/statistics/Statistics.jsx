import data from '../statistics/data';
import propTypes from 'prop-types';

export const Statistics = () => {
  return (
    <section style={{ textAlign: 'center' }} className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul
        style={{ display: 'flex', padding: '0', justifyContent: 'center' }}
        className="stat-list"
      >
        {data.map(({ id, label, percentage }) => (
          <li
            key={id}
            className="item"
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '10px',
              alignItems: 'center',
            }}
          >
            <span className="label">{label}</span>
            <span style={{ fontSize: '30px' }} className="percentage">
              {percentage}%
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

// const { id, label, percentage } = data;

Statistics.propTypes = {
  id: propTypes.string,
  label: propTypes.string,
  percentage: propTypes.number,
};
