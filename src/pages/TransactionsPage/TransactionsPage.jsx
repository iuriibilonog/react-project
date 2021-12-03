import s from './TransactionsPage.module.css'
import IncomesAndExpensesList from '../../components/IncomesAndExpensesList';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIncomes, getExpenses } from '../../redux/transactions-selectors';
import {
  getIncomeTransactions,
  getExpensesTransactions,
} from '../../redux/transactions-operations';
import FormAddCategory from '../../components/FormAddCategory';
import Balance from '../../components/Balance/Balance';

const TransactionsPage = () => {
  const [isExpenses, setIsExpenses] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExpensesTransactions());
  }, [dispatch]);

  let incomes = useSelector(getIncomes);
  let expenses = useSelector(getExpenses);

  return (
    <>
      <button
              type="button"
              className={s.navBtn}
        onClick={() => {
          dispatch(getIncomeTransactions());
          setIsExpenses(false);
        }}
      >
        {' '}
        Доход
      </button>
      <button
              type="button"
              className={s.navBtn}
        onClick={() => {
          dispatch(getExpensesTransactions());
            setIsExpenses(true);
        }}
      >
        Расход
      </button>
      <Balance />
      <FormAddCategory />;
      <IncomesAndExpensesList
        transactions={isExpenses ? expenses : incomes}
        transactionsType={isExpenses ? 'expenses' : 'incomes'}
        operationSign={isExpenses ? '-' : ''}
      />
    </>
  );
};

export default TransactionsPage;
