import { useState } from 'react';
import sprite from '../../img/sprite.svg';
import { format } from 'date-fns';
import s from './CurrentMonth.module.css';

const CurrentMonth = () => {
  const [curMonth, setCurMon] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  // console.log(curMonth);
  // console.log(year);
  //   const monthLit = curMonth.toLocaleString('ru', {
  //     month: 'long',
  //   });
  //   const yearLit = year.toLocaleString('ru', {
  //     year: 'numeric',
  //   });
  // const date = new Date(this.year, this.month + 1);
  // this.setState({ date });
  const handlePrevMonth = () => {
    if (curMonth === 1) {
      setYear(year => (year -= 1));
      setCurMon(12);
    } else {
      setCurMon(curMonth => (curMonth -= 1));
    }
  };
  const handleNextMonth = () => {
    if (curMonth === 12) {
      setYear(year => (year += 1));
      setCurMon(1);
    } else {
      setCurMon(curMonth => (curMonth += 1));
    }
  };

  // const mothLit = format(curMonth, 'mmmm');
  // console.log(mothLit);

  return (
    <div className={s.currentMonthBlock}>
      <span className={s.currentMonth}>Текущий период</span>
      <div className={s.monthBlock}>
        <svg onClick={handlePrevMonth} width="10" height="10">
          <use href={sprite + '#icon-arrowLeft'}></use>
        </svg>
        <span className={s.currentMonthText}>
          {curMonth} / {year}
        </span>
        <svg onClick={handleNextMonth} width="10" height="10">
          <use href={sprite + '#icon-arrowRight'}></use>
        </svg>
      </div>
    </div>
  );
};

export default CurrentMonth;
