import React from 'react';
import MainStyle from './Main.module.css';
import StatList from '../StatList/StatList';
const Main = () => {
  return (
    <section className={MainStyle.sec}>
      <StatList />
    </section>
  );
};

export default Main;
