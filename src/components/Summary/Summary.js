import { useState, useEffect } from 'react';
import s from './Summary.module.css';

const Summary = () => {
  const [summary, setSummary] = useState([]);

  return (
    <>
      <div className={s.summarySection}>
        <h3 className={s.title}>Сводка</h3>
        <ul>
          <li className={s.item}>
            <span className={s.itemMonthSum}>Ноябрь</span>
            <span className={s.itemMonthSum}>10000,00</span>
          </li>
          <li className={s.item}>
            <span className={s.itemMonthSum}>Декабрь</span>
            <span className={s.itemMonthSum}>20000,00</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Summary;
