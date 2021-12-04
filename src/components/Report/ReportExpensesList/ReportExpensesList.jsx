import sprite from '../../../img/icon.svg';
import s from '../Report.module.css';
//import { setIncomesByCategories } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
//import { getIncomes } from '../../redux/transactions-selectors';
import { useState, useEffect } from 'react';
import {
  getExpenses,
  getExpensesCategories,
  getIncomes,
  getInomesCategories,
  getTotalExpensesByCategory,
} from '../../../redux/transactions-selectors';
import { setExpensesByCategories, setIncomesByCategories } from '../../../redux/actions';

const ReportExpensesList = ({ category, sum }) => {
  // const transactionExpenses  = useSelector(getExpenses);
  // const dispatch = useDispatch();
  // const [sum, setSum] = useState(null);
  // const SUM = 'Сумма';
  // let totalExpense = 0;
  // const findTotalSumByCategoryExpenses = category => {
  //     const expensesByCategory = transactionExpenses.filter(item => item.category === category).map(item => {
  //         totalExpense += item.amount;
  //         const expensesInfo = {
  //           amount: item.amount,
  //           description: item.description,
  //           category,
  //         }
  //         console.log(expensesInfo)
  //         return expensesInfo;

  //       });
  //       dispatch(setExpensesByCategories({ name: category, [SUM]: totalExpense}));
  //       return totalExpense;
  //   };

  //   useEffect(() => {
  //     setSum(findTotalSumByCategoryExpenses(category));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [])

  //   const getTotalExpensesByCategories = useSelector(getTotalExpensesByCategory);
  //   console.log(`getTotalIncomesByCategories`, getTotalExpensesByCategories)

  //  const getExpensesCategory = useSelector(getExpensesCategories);
  //  console.log(`getInomesCategory`, getExpensesCategory)
  //  const newExensescomes = getExpensesCategory.map((item) => {
  //    console.log(`item`, item)
  //    if(getTotalExpensesByCategories[item]){
  //     return {
  //       sum: getTotalExpensesByCategories[item].total,
  //       category : item,
  //     //  [item] : getTotalExpensesByCategories[item].total,
  //     };
  //    }
  //    return false;
  //  });

  //  console.log(`newExensescomes`, newExensescomes)
  return (
    <>
      {category && (
        <li className={s.reportCard}>
          <p>{`${sum}.00`}</p>
          <svg className={s.iconSvg} title={category}>
            <use xlinkHref={`${sprite}#${category}`} title={category} />
          </svg>
          <p className={s.reportCardTitle}>{category}</p>
        </li>
      )}
    </>
  );
};
export default ReportExpensesList;
