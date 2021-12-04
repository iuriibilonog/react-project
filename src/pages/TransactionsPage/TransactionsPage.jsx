import s from './TransactionsPage.module.css';
import IncomesAndExpensesList from '../../components/IncomesAndExpensesList';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIncomes, getExpenses } from '../../redux/transactions-selectors';
import {
  getIncomeTransactions,
  getExpensesTransactions,
  getIncomesCategories,
  getExpensesCategories,
  getDataMonth
} from '../../redux/transactions-operations';

import Container from '../../components/Container';
import FormAddCategory from '../../components/FormAddCategory';
import Balance from '../../components/Balance/Balance';
import Summary from '../../components/Summary/Summary';

const TransactionsPage = () => {
  const [isExpenses, setIsExpenses] = useState(true);
  const [curMonth, setCurMon] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getExpensesTransactions());
  // }, [dispatch]);

  let incomes = useSelector(getIncomes);
  let expenses = useSelector(getExpenses);

  return (
    <>
    <Container>
       <Balance />
      <div className={s.incomesWrapper}>
        <div className={s.buttonsHolder}>
          <button
            type="button"
            className={s.navBtn}
            onClick={() => {
              dispatch(getIncomesCategories());
              dispatch(getIncomeTransactions());
              dispatch(getDataMonth(`${year}-${curMonth}`));
              setIsExpenses(false);
            }}
          >
            {' '}
            ДОХОД
          </button>

          <button
            type="button"
            className={`${s.navBtn} ${s.active}`}
            onClick={() => {
              dispatch(getExpensesTransactions());
              dispatch(getExpensesCategories());
              setIsExpenses(true);
            }}
          >
            РАСХОД
          </button>
{/* //         </div>
//         <div className={s.incomesContainer}>
//           <Balance />
//           <FormAddCategory isExpenses={isExpenses ? 'expenses' : 'incomes'} />;
//           <div className={s.tableWrapper}>
//             <IncomesAndExpensesList
//               transactions={isExpenses ? expenses : incomes}
//               transactionsType={isExpenses ? 'expenses' : 'incomes'}
//               operationSign={isExpenses ? '-' : ''}
//             />
//             <Summary />
//           </div> */}

          </div>
        <div className={s.elementsWrapper}>
          <FormAddCategory isExpenses={isExpenses ? "expenses" : "incomes"}/>
          <IncomesAndExpensesList
            transactions={isExpenses ? expenses : incomes}
            transactionsType={isExpenses ? 'expenses' : 'incomes'}
            operationSign={isExpenses ? '-' : ''}
          />
           <Summary />

        </div>
      </div>
      </Container>
      </>
  );
};

export default TransactionsPage;
