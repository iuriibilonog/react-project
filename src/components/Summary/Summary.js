import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import s from './Summary.module.css';

const Summary = () => {
  // const [summary, setSummary] = useState([]);
  const summary = {
    Январь: 5,
    Февраль: 100,
    Март: 'N/A',
    Апрель: 'N/A',
    Май: 1,
    Июнь: 'N/A',
    Июль: 3,
    Август: 'N/A',
    Сентябрь: 'N/A',
    Октябрь: 77,
    Ноябрь: 'N/A',
    Декабрь: 123,
  };

  return (
    <>
      <div className={s.summarySection}>
        <h3 className={s.title}>Сводка</h3>
        <ul>
          <li className={s.item}>
            <span className={s.itemMonthSum}>Декабрь</span>
            <span className={s.itemMonthSum}>20000,00</span>
          </li>
          {Object.entries(summary)
            .filter(([key, value]) => value !== 'N/A')
            .map(([key, value]) => (
              <li className={s.item} key={key}>
                <span className={s.itemMonthSum}>{key}</span>
                <span className={s.itemMonthSum}>{value}</span>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Summary;
