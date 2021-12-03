import Summary from '../../components/Summary/Summary';
import Balance from '../../components/Balance';
import IncomesAndExpensesList from '../../components/IncomesAndExpensesList';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getExpenses } from '../../redux/transactions-selectors';
import {
  getExpensesTransactions,
  addExpenseTransaction,
} from '../../redux/transactions-operations';
import FormAddCategory from '../../components/FormAddCategory';
import NavigationBetweenCategories from '../../components/FormAddCategory/NavigationBetweenCategoryes/NavigationBetweenCategoryes';

const ExpensesPage = () => {
  const dispatch = useDispatch();
  //  будет работать при рерауте
  // useEffect(() => {
  //   dispatch(getExpensesTransactions());
  // }, [dispatch]);

  let expenses = useSelector(getExpenses);
  // болванка, удалить в процессе
  let transaction = {
    date: '2020-12-31',
    description: 'Lorem Ipsum',
    category: 'Алкоголь',
    amount: 15.7777777,
  };
  // болванка, удалить в процессе
  return (
    <>
      <NavigationBetweenCategories />
      <Balance />

      <FormAddCategory />
      <button
        type="button"
        onClick={() => {
          dispatch(getExpensesTransactions());
        }}
      >
        GET EXPENSES TRANSACTIONS
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(addExpenseTransaction(transaction));
        }}
      >
        ADD EXPENSE TRANSACTION
      </button>
      <Summary />
      <Balance />
      <IncomesAndExpensesList props={expenses} transactionsType={'expenses'} operationSign={'-'} />
    </>
  );
};

export default ExpensesPage;
