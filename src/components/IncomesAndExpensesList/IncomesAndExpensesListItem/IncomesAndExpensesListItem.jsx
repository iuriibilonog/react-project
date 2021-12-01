import s from './IncomesAndExpensesListItem.module.css';
import sprite from '../../../img/sprite.svg';
import { deleteTransaction } from '../../../redux/transactions-operations'
import { useDispatch, useSelector } from 'react-redux';

const IncomesAndExpensesListItem = ({ itemProps: { date, description, category, amount, _id } }) => {
  // console.log(id)
const dispatch = useDispatch()

  return (
    <>
      <li className={s.listItem}>
        <div className={s.changeFlow}>
          <span className={s.date}>{date}</span>
          <span className={s.description}>{description}</span>
        </div>
        <span className={s.category}>{category}</span>
        <div className={s.flex}>
          <span className={s.amount}>- {parseFloat(amount).toFixed(2)}</span>
          <span>
            <button type="button" className={s.delete} onClick={()=> dispatch(deleteTransaction(_id))}>
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

export default IncomesAndExpensesListItem;
