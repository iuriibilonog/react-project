import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import s from './Report.module.css';

import { setIncomesByCategories } from '../../redux/actions';
import Chart from '../Chart';
import Container from '../Container';
import ReportAmount from './ReportAmount';
import {  useSelector } from 'react-redux';
import { getExpenses, getExpensesCategories, getIncomes, getInomesCategories, getTotalExpensesByCategory, getTotalIncomesByCategory } from '../../redux/transactions-selectors';
import { useState } from 'react';
import ReportIncomesList from './ReportIncomesList/ReportIncomesList';
import ReportExpensesList from './ReportExpensesList/ReportExpensesList';
import GoHome from '../GoHome/GoHome';
import CurrentMonth from '../CurrentMonth/CurrentMonth';
import Balance from '../Balance';

const Report = () => {
  const [category, setCategory] = useState('');
  const [reportTypeRender, setReportTypeRender] = useState('incomes');
  const [type, setType] = useState('expenses');
  const transactionExpenses = useSelector(getExpenses);
  const transactionIncomes = useSelector(getIncomes);
  const getIncomesCategoties = useSelector(getInomesCategories);
  const getExpensesCategoties = useSelector(getExpensesCategories);

  const onHandleChangeType = () => {
    if (reportTypeRender === 'incomes') setReportTypeRender('expenses');
    else setReportTypeRender('incomes');
  };
  

  const getCategory = e => {
    setCategory(console.log(e.target.attributes.title.nodeValue));
  };

  const getTotalIncomesByCategories = useSelector(getTotalIncomesByCategory);
  console.log(`getTotalIncomesByCategories`, getTotalIncomesByCategories)

 const getInomesCategory = useSelector(getInomesCategories);
 console.log(`getInomesCategory`, getInomesCategory)

 const newIncomes = getInomesCategory.map((item) => {
   console.log(`item`, item)
   if(getTotalIncomesByCategories[item]){
    return {
      sum: getTotalIncomesByCategories[item].total,
      category : item,
    //  [item] : getTotalExpensesByCategories[item].total,
    };
   }
   return false;
 });


  const getTotalExpensesByCategories = useSelector(getTotalExpensesByCategory);
  console.log(`getTotalIncomesByCategories`, getTotalExpensesByCategories)
  const fullDataAboutExpenses = Object.entries(getTotalExpensesByCategories);
  console.log(fullDataAboutExpenses)

 const getExpensesCategory = useSelector(getExpensesCategories);
 console.log(`getInomesCategory`, getExpensesCategory)
 const newExensescomes = getExpensesCategory.map((item) => {
   console.log(`item`, item)
   if(getTotalExpensesByCategories[item]){
    return {
      sum: getTotalExpensesByCategories[item].total,
      category : item,
    
    };
   }
   return false;
 });

  return (
    <>
      <Container>
      <div className={s.reportContainer}>
      <ReportAmount />
        <div className={`${s.navigation} ${s.section}`}>
          <div className={s.navigationWrapper}></div>
        </div>

        <div className={`${s.reportWrapper} ${s.section}`}>
          <div className={`${s.transactionWrapper} ${s.sectionReportTitle}`}>
            <ArrowBackIosIcon
              style={{ color: '#FF751D', cursor: 'pointer' }}
              fontSize="small"
              onClick={onHandleChangeType}
            />

            {type === reportTypeRender ? (
              <h1 className={s.reportTitle}>расходы</h1>
            ) : (
              <h1 className={s.reportTitle}>доходы</h1>
            )}
            <ArrowForwardIosIcon
              style={{ color: '#FF751D', cursor: 'pointer' }}
              fontSize="small"
              onClick={onHandleChangeType}
            />
          </div>
          {reportTypeRender === 'incomes' && (
            <ul className={s.reportList}>
              {transactionIncomes.length === 0 ? (
                <p>Доходы</p>
              ) : (
                newIncomes.map(item => <ReportIncomesList category={item.category} sum={item.sum} />)
              )}
            </ul>
          )}
          {reportTypeRender === 'expenses' && (
            <ul className={s.reportList}>
              {transactionExpenses.length === 0 ? (
                <p>Расходы</p>
              ) : (
                newExensescomes.map(item =>  <ReportExpensesList category={item.category} sum={item.sum}/>)
              )}
            </ul>
          )}
        </div>
      </div>

        <Chart chartTypeRender={reportTypeRender} newIncomes={newIncomes} newExensescomes={newExensescomes}/>
    </Container>

    </>

  );
};
export default Report;

