import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProfileStats.module.css';
const ProfileStats = ({ stats: { followers, likes, views } }) => {
  console.log(followers);
  return (
    <ul className={styles.stats}>
      <li className={styles.item}>
        <span className={styles.label}> Followers </span>
        <span className={styles.quantity}> {followers} </span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}> Views </span>
        <span className={styles.quantity}> {views} </span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}> Likes </span>
        <span className={styles.quantity}> {likes} </span>
      </li>
    </ul>
  );
};

export default ProfileStats;
