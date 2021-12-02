import s from './IncomesAndExpensesList.module.css';
import IncomesAndExpensesListItem from './IncomesAndExpensesListItem';

import CustomScroll from 'react-custom-scroll';
import './customScroll.css';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import UnifiedModal from '../../shared/UnifiedModal';

import { deleteTransaction } from '../../redux/transactions-operations';

const IncomesAndExpensesList = ({ props, transactionsType, operationSign = '' }) => {
  console.log(transactionsType);
  console.log('props', props);
  const [isModalShown, setIsModalShown] = useState(false);
  const [itemId, setItemId] = useState(null);

  const dispatch = useDispatch();

  const modalHandler = id => {
    setIsModalShown(true);
    setItemId(id);
  };

  const responseHandling = response => {
    setIsModalShown(false);

    if (response) {
      dispatch(deleteTransaction(itemId));
    }
    setItemId(null);
  };

  return (
    <>
      {/* {props.length > 0 && (
        <div className={s.list}>
          <header className={s.header}>
            <div className={s.groupingDiv}>
              <span className={s.date}>Дата</span>
              <span className={s.description}>Описание</span>
            </div>
            <span className={s.category}>Категория</span>
            <span className={s.amount}>Сумма</span>
          </header>
          <CustomScroll className="rcs-inner-handle">
            <ul className={s.transactionsList}>
              {props.map(item => (
                <IncomesAndExpensesListItem
                  key={item.id}
                  itemProps={item}
                  modalHandler={modalHandler}
                  transactionsType={transactionsType}
                  operationSign={operationSign}
                />
              ))}
            </ul>
          </CustomScroll>
          {isModalShown && <UnifiedModal title={'Вы уверены?'} response={responseHandling} />}
        </div>
      )}
      */}
    </>
  );
};

export default IncomesAndExpensesList;
