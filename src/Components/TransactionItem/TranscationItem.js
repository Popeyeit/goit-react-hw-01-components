import React from 'react';
import styles from './TransactionItem.module.css';
import PropTypes from 'prop-types';
const TranscationItem = ({ type, amount, currency }) => {
  return (
    <>
      <tr className={styles.tr}>
        <td className={styles.td}> {type} </td>
        <td className={styles.td}> {amount} </td>
        <td className={styles.td}> {currency} </td>
      </tr>
    </>
  );
};
TranscationItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
export default TranscationItem;
