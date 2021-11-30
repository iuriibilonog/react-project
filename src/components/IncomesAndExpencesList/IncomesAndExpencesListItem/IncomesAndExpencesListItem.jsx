import s from './IncomesAndExpencesListItem.module.css';
import sprite from '../../../img/sprite.svg';

const IncomesAndExpencesListItem = ({ itemProps: { date, desc, categ, amount } }) => {
  // console.log(date)
  return (
    <>
      <li className={s.listItem}>
        <div className={s.changeFlow}>
          <span className={s.date}>{date}</span>
          <span className={s.description}>{desc}</span>
        </div>
        <span className={s.category}>{categ}</span>
        <div className={s.flex}>
          <span className={s.amount}>- {parseFloat(amount).toFixed(2)}</span>
          <span>
            <button type="button" className={s.delete} onDelete={()=> {}}>
              <svg className={s.deleteIcon}>
                <use href={sprite + '#icon-del'}></use>
              </svg>
            </button>
          </span>
        </div>
      </li>
    </>
  );
};

export default IncomesAndExpencesListItem;
