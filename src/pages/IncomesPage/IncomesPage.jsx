import IncomesAndExpensesList from '../../components/IncomesAndExpensesList';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIncomes } from '../../redux/transactions-selectors';
import { getIncomeTransactions, addIncomeTransaction } from '../../redux/transactions-operations';
import FormAddCategory from '../../components/FormAddCategory';
import Balance from '../../components/Balance/Balance';
import NavigationBetweenCategories from '../../components/FormAddCategory/NavigationBetweenCategoryes/NavigationBetweenCategoryes';
const IncomesPage = () => {
  const dispatch = useDispatch();
  //  будет работать при рерауте

  // useEffect(() => {
  //   dispatch(getIncomeTransactions());
  // }, [dispatch]);

  let incomes = useSelector(getIncomes);
  console.log('incomes', incomes);
  // болванка, удалить в процессе
  let transaction = {
    date: '2020-12-31',
    description: 'Lorem Ipsum',
    category: 'З/П',
    amount: 120.5,
  };
  // болванка, удалить в процессе

  return (
    <>
      <NavigationBetweenCategories />
      <Balance />
      <button
        type="button"
        onClick={() => {
          dispatch(getIncomeTransactions());
        }}
      >
        GET INCOMES TRANSACTIONS
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(addIncomeTransaction(transaction));
        }}
      >
        ADD INCOME TRANSACTION
      </button>
      <FormAddCategory />;
      <IncomesAndExpensesList props={incomes} transactionsType={'incomes'} />
    </>
  );
};

export default IncomesPage;
