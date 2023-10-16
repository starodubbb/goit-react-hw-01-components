import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export function TransactionHistory({ transactions }) {
  return (
    <table className={css.table}>
      <thead className={css.tableHead}>
        <tr className={css.tableRow}>
          <th className={css.tableCell}>Type</th>
          <th className={css.tableCell}>Amount</th>
          <th className={css.tableCell}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tableBody}>
        {transactions.map(({ id, type, amount, currency }) => {
          const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);

          return (
            <tr className={css.tableRow} key={id}>
              <td className={css.tableCell}>{capitalizedType}</td>
              <td className={css.tableCell}>{amount}</td>
              <td className={css.tableCell}>{currency.toUpperCase()}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
