import sprite from '../../img/sprite.svg';
import s from './CurrentMonth.module.css';

const CurrentMonth = () => {
  //   const month2 = new Date().getMonth() + 1;
  const month = new Date().toLocaleString('ru', {
    month: 'long',
  });
  const year = new Date().getFullYear();
  //   const date=new Date().getDate()
  // console.log(`${date}.${month2}.${year}`)

  return (
    <div className={s.currentMonthBlock}>
      <span className={s.currentMonth}>Текущий период</span>
      <div className={s.monthBlock}>
        <svg width="10" height="10">
          <use href={sprite + '#icon-arrowLeft'}></use>
        </svg>
        <span className={s.currentMonthText}>
          {month} {year}
        </span>
        <svg width="10" height="10">
          <use href={sprite + '#icon-arrowRight'}></use>
        </svg>
      </div>
    </div>
  );
};

export default CurrentMonth;
