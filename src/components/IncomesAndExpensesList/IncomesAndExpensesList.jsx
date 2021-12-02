import s from './IncomesAndExpensesList.module.css';
import IncomesAndExpensesListItem from './IncomesAndExpensesListItem';

import CustomScroll from 'react-custom-scroll';
import './customScroll.css';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIncomes } from '../../redux/transactions-selectors';

import { getIncomeTransactions, addIncomeTransaction } from '../../redux/transactions-operations';
import FormAddCategory from '../FormAddCategory';

const IncomesAndExpensesList = ({ props }) => {
  console.log('props' + props);

  const dispatch = useDispatch();

  let incomes = useSelector(getIncomes);
  console.log(incomes);

  // будет работать при рерауте
  // useEffect(() => {
  //   dispatch(getIncomeTransactions())
  // }, [dispatch])

  // let transaction =  { date: "2020-12-31", description: 'Lorem Ipsum', category: "З/П", amount: 120.5 }

  return (
    <>
      {/* <button type="button" onClick={()=>{ dispatch(getIncomeTransactions())}}>GET INCOMES TRANSACTIONS</button>
      <button type="button" onClick={() => { dispatch(addIncomeTransaction(transaction)) }}>ADD INCOME TRANSACTION</button> */}
      <FormAddCategory />
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
            {props.length && props.map(item => <IncomesAndExpensesListItem itemProps={item} />)}
          </ul>
        </CustomScroll>
      </div>
    </>
  );
};

export default IncomesAndExpensesList;
