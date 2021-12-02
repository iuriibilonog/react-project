import { useState } from 'react';
import sprite from '../../img/sprite.svg';
import s from './CurrentMonth.module.css';

const CurrentMonth = () => {
  const [curMonth, setCurMon] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  //   const monthLit = curMonth.toLocaleString('ru', {
  //     month: 'long',
  //   });
  //   const yearLit = year.toLocaleString('ru', {
  //     year: 'numeric',
  //   });

  const handlePrevMonth = () => {
    setCurMon(prev => {
      if (curMonth === 1) {
        setYear(year => year - 1);
        setCurMon(1);
      }
      return prev - 1;
    });
    console.log(curMonth);
  };
  const handleNextMonth = () => {
    setCurMon(prev => {
      if (curMonth === 12) {
        setYear(year => year + 1);
        setCurMon(1);
      }
      return prev + 1;
    });
    console.log(curMonth);
  };

  return (
    <div className={s.currentMonthBlock}>
      <span className={s.currentMonth}>Текущий период</span>
      <div className={s.monthBlock}>
        <svg onClick={handlePrevMonth} width="10" height="10">
          <use href={sprite + '#icon-arrowLeft'}></use>
        </svg>
        <span className={s.currentMonthText}>
          {curMonth} {year}
        </span>
        <svg onClick={handleNextMonth} width="10" height="10">
          <use href={sprite + '#icon-arrowRight'}></use>
        </svg>
      </div>
    </div>
  );
};

export default CurrentMonth;
