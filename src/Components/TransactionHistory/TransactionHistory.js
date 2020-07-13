import React from 'react';
import TranscationItem from '../TransactionItem/TranscationItem';
import styles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
const TransactionHistory = ({ transactions }) => {
  return (
    <table className={styles['transaction-history']}>
      <thead className={styles.thead}>
        <tr>
          <th className={styles.th}> Type </th>
          <th className={styles.th}> Amount </th>
          <th className={styles.th}> Currency </th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(item => {
          return (
            <TranscationItem
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ).isRequired,
};

export default TransactionHistory;
