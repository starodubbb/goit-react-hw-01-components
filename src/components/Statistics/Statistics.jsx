import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  const getStatStyles = () => ({
    backgroundColor: getRandomHexColor(),
  });

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className={css.item} key={id} style={getStatStyles()}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{`${percentage}%`}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

// { "id": "id-1", "label": ".docx", "percentage": 22 },
