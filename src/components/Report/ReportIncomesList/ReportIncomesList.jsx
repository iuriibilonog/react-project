import sprite from '../../../img/icon.svg';
import s from '../Report.module.css';
//import { setIncomesByCategories } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
//import { getIncomes } from '../../redux/transactions-selectors';
import { useState, useEffect } from 'react';
import {
  getIncomes,
  getInomesCategories,
  getTotalIncomesByCategory,
} from '../../../redux/transactions-selectors';
import { setIncomesByCategories } from '../../../redux/actions';

const ReportIncomesList = ({ category, sum }) => {
  //   const [incomes, setIncomes] = useState()
  //   const getTotalIncomesByCategories = useSelector(getTotalIncomesByCategory);
  //   console.log(`getTotalIncomesByCategories`, getTotalIncomesByCategories)

  //  const getInomesCategory = useSelector(getInomesCategories);
  //  console.log(`getInomesCategory`, getInomesCategory)
  //  const newIncomes = getInomesCategory.map((item) => {
  //    console.log(`item`, item)
  //    if(getTotalIncomesByCategories[item]){
  //     return {
  //      [item] : getTotalIncomesByCategories[item].total,
  //     };
  //    }
  //    return false;
  //  });
  //  console.log(`newIncomes`, newIncomes);
  //  console.log(`getTotalIncomesByCategories`, getTotalIncomesByCategories)
  //  const categoryIncomes = getTotalIncomesByCategories["З/П"].total;
  //  console.log(`categoryIncomes`, categoryIncomes);
  //   if(getTotalIncomesByCategories){
  //     // const newIncomes = Object.entries(getTotalIncomesByCategories);
  //     //   const newCategory = newIncomes.flatMap(newIncome => newIncome);
  // // const newCategory = new Array(newIncomes)
  // // const newArray = newCategory.filter(item => item === item.total);
  //       // const newArray = newCategory.map((item, index) => {
  //       //   return {item: item[index]} = newObject
  //       // });

  //     // let newArray;
  //     // newCategory.forEach((item)=>{
  //     //   return newArray = item;
  //     // })
  //     // console.log(`newarray`, newArray)
  //     // console.log(`newObject`, newObject)
  //     // // const newCategory = newIncomes.find(item => item === category);
  //     // // const newCategory = Object.assign(...newIncomes.map(([key, val]) => ({[category[key]]: val})))
  //     // console.log(`newCategory`, newCategory)
  //     // // // // for(const incomes of getTotalIncomesByCategories){
  //     // // // //   newIncomes.push(incomes)
  //     // // // const newIncomes = Object.assign(getTotalIncomesByCategories);
  //     // console.log(`newIncomes`, newIncomes)
  //     }

  // // const newIncomes = Object.entries(getTotalIncomesByCategories);

  // // const {total} = Object.values(getTotalIncomesByCategories);

  // // console.log(`newIcomesTotal`, newIcomesTotal)
  //   // sum = newIncomes.map(item => {

  //   //   console.log(`item`, item)
  //   //   return item[1].total;

  //   // })
  //   }

  // useEffect(() => {
  //   setIncomes(newIncomes)
  // }, []);

  //     const transactionIncomes = useSelector(getIncomes);
  //     const dispatch = useDispatch();
  // const [sum, setSum] = useState(null);
  //     const SUM = 'Сумма';
  // const findTotalSumByCategoryIncomes = category => {
  //     let totalIncomes = 0;
  //     // Для Юры и Сережи
  //     const incomesByCategory = transactionIncomes.filter(item => item.category === category).map(item => {
  //       totalIncomes += item.amount;
  //       const incomesInfo = {
  //         amount: item.amount,
  //         description: item.description,
  //         category,
  //       }
  //       console.log(incomesInfo)
  //       return incomesInfo;

  //     });
  //     console.log('запустил')
  //     dispatch(setIncomesByCategories({ name: category, [SUM]: totalIncomes}));
  //     return totalIncomes;
  //   };

  // useEffect(() => {
  //   setSum(findTotalSumByCategoryIncomes(category));
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  // console.log(`sum`, sum)
  return (
    <>
      {category && (
        <li className={s.reportCard}>
          <p>{sum}.00</p>
          <svg className={s.iconSvg} title={category}>
            <use xlinkHref={`${sprite}#${category}`} title={category} />
          </svg>
          <p className={s.reportCardTitle}>{category}</p>
        </li>
      )}
    </>
  );
};
export default ReportIncomesList;
