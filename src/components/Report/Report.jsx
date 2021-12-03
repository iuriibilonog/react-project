import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import expenseIconCategories from '../../data/expenselcon.json';
import incomeIconCategories from '../../data/incomeIcon.json';
import Container from '../Container';
import sprite from '../../img/icon.svg';
import s from './Report.module.css';
import { setIncomesByCategories } from '../../redux/actions';

import ReportAmount from './ReportAmount';
import { useDispatch, useSelector } from 'react-redux';
import { getExpenses, getIncomes } from '../../redux/transactions-selectors';
import { useState } from 'react';



const Report = () => {
  const [category, setCategory] = useState('');
  const [reportTypeRender, setReportTypeRender] = useState('incomes');
  const dispatch = useDispatch();
  const transactionExpenses = useSelector(getExpenses);
  const transactionIncomes = useSelector(getIncomes);
  const [type, setType] = useState('expenses');
  console.log(`reportTypeRender`, reportTypeRender);
  const onHandleChangeType = () => {
    console.log(`reportTypeRender`, reportTypeRender);
    if (reportTypeRender === 'incomes') setReportTypeRender('expenses');
    else setReportTypeRender('incomes');
  };
  const getCategory = e => {
    setCategory(console.log(e.target.attributes.title.nodeValue));
  };

  const findTotalSumByCategoryExpenses = category => {
    let totalExpense = 0;
    // Для Юры и Сережи
    const expensesByCategory = transactionExpenses.filter(item => item.category === category);
    console.log(`expensesByCategory`, expensesByCategory);
    expensesByCategory.map(item => (totalExpense += item.amount));

    return totalExpense;
  };
  const findTotalSumByCategoryIncomes = category => {
    let totalIncomes = 0;
    // Для Юры и Сережи
    const incomesByCategory = transactionIncomes.filter(item => item.category === category).map(item => {
      totalIncomes += item.amount;
      const incomesInfo = {
        amount: item.amount,
        description: item.description,
        category,
      }
      console.log(incomesInfo)
      return incomesInfo;

    });
    console.log('запустил')
    dispatch(setIncomesByCategories(incomesByCategory));
    return totalIncomes;
  };

 



  const categoriesExpenses = expenseIconCategories;
  const categoriesIncomes = incomeIconCategories;

  return (
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
                categoriesIncomes.map(item => {
                  let sum = findTotalSumByCategoryIncomes(item.label);
                  console.log(`sum`, sum);
                  if (sum === 0) {
                    return null;
                  }
                  return (
                    <li className={s.reportCard} key={item.id}>
                      <p>{`${sum.toLocaleString('ru')}.00`}</p>
                      <svg className={s.iconSvg} title={item.label} onClick={getCategory}>
                        <use xlinkHref={`${sprite}#${item.label}`} title={item.label} />
                      </svg>
                      <p className={s.reportCardTitle}>{item.label}</p>
                    </li>
                  );
                })
              )}
            </ul>
          )}
          {reportTypeRender === 'expenses' && (
            <ul className={s.reportList}>
              {transactionExpenses.length === 0 ? (
                <p>Расходы</p>
              ) : (
                categoriesExpenses.map(item => {
                  let sum = findTotalSumByCategoryExpenses(item.label);
                  console.log(`sum`, sum);
                  if (sum === 0) {
                    return null;
                  }
                  return (
                    <li className={s.reportCard} key={item.id}>
                      <p>{`${sum.toLocaleString('ru')}.00`}</p>
                      <svg className={s.iconSvg} title={item.label}>
                        <use xlinkHref={`${sprite}#${item.label}`} title={item.label} />
                      </svg>
                      <p className={s.reportCardTitle}>{item.label}</p>
                    </li>
                  );
                })
              )}
            </ul>
          )}
        </div>
      </div>
    </Container>
  );
};
export default Report;
