import s from './TransactionsPage.module.css';
import IncomesAndExpensesList from '../../components/IncomesAndExpensesList';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIncomes, getExpenses, getLoader } from '../../redux/transactions-selectors';
import {
  getIncomeTransactions,
  getExpensesTransactions,
  getIncomesCategories,
  getExpensesCategories,
  getDataMonth,
} from '../../redux/transactions-operations';

import Container from '../../components/Container';
import FormAddCategory from '../../components/FormAddCategory';
// import { getIncomesCategories } from '../../redux/transactions-operations';
// import { getExpensesCategories } from '../../redux/transactions-operations';
// import { getIncomeTransactions } from '../../redux/transactions-operations';
import GoHome from '../../components/GoHome/GoHome';
import Balance from '../../components/Balance/Balance';
import GoToReport from '../../components/GoToReport';
import Summary from '../../components/Summary/Summary';
import Loader from '../../components/Loader';
import { FourGPlusMobiledataOutlined } from '@mui/icons-material';
import Footer from '../../components/Footer';

const TransactionsPage = () => {
  const [isExpenses, setIsExpenses] = useState(true);
  const [curMonth, setCurMon] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  const loader = useSelector(getLoader);

  const [isExpensesTabActive, setExpensesTabActive] = useState(true);
  const [isIncomesTabActive, setIsIncomesTabActive] = useState(false);
  // const [isActive, setIsActive] = useState(false)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIncomesCategories());
    dispatch(getIncomeTransactions());

    dispatch(getExpensesCategories());
    dispatch(getExpensesTransactions());

    dispatch(getDataMonth(`${year}-${curMonth}`));
  }, []);

  // useEffect(() => {
  //   dispatch(getExpensesTransactions());
  // }, [dispatch]);

  let incomes = useSelector(getIncomes);
  let expenses = useSelector(getExpenses);

  const handleToggle = () => {
    setIsIncomesTabActive(!isIncomesTabActive);
    setExpensesTabActive(!isExpensesTabActive);
  };

  return (
    <>
      <Container>
        <div className={s.section}>
          {/* <GoHome/> */}
          <div className={s.goToReport}>
            <GoToReport />
          </div>
          {loader && <Loader />}
          <Balance />
        </div>

        <div className={s.mainWrapper}>
          <div className={s.buttonsHolder}>
            <button
              type="button"
              className={`navBtn ${isExpensesTabActive ? 'navBtnActive' : null}`}
              onClick={() => {
                setIsExpenses(true);
                handleToggle();
              }}
            >
              РАСХОД
            </button>
            <button
              type="button"
              className={`navBtn ${isIncomesTabActive ? 'navBtnActive' : null}`}
              onClick={() => {
                setIsExpenses(false);
                handleToggle();
              }}
            >
              {' '}
              ДОХОД
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
          <div className={s.shadowBigScreen}>
            <div className={s.form}>
              <FormAddCategory isExpenses={isExpenses ? 'expenses' : 'incomes'} />
            </div>
            <div className={s.shadowSmallScreen}>
              <IncomesAndExpensesList
                transactions={isExpenses ? expenses : incomes}
                transactionsType={isExpenses ? 'expenses' : 'incomes'}
                operationSign={isExpenses ? '-' : ''}
              />
            </div>
            <div className={s.summaryHolder}>
              <Summary isExpenses={isExpenses ? 'expenses' : 'incomes'} className={s.summary} />
            </div>
          </div>
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default TransactionsPage;
