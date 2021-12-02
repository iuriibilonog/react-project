import s from './ReportAmount.module.css';
import iconSlash from '../../../img/slash.svg';
import { getExpensesTransactions } from '../../../redux/transactions-operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getExpenses, getIncomes } from '../../../redux/transactions-selectors';



const ReportAmount = () => {
  const transactionExpenses = useSelector(getExpenses);
  const transactionIncomes = useSelector(getIncomes);

  
  const findTotalSumExpenses = () => {
    let totalSumExpenses = 0;
    transactionExpenses.map(item => (totalSumExpenses += item.amount));
    return totalSumExpenses;
  }

  const findTotalSumIncomes = () => {
    let totalSumIncomes = 0;
    transactionIncomes.map(item => (totalSumIncomes += item.amount));
    return totalSumIncomes;
  }


  return (
    <div className={`${s.section} ${s.amountSection}`}>
      <div className={`${s.transactionWrapper} ${s.amountWrapper}`}>
        <p className={s.amountTitle}>Расходы:</p>
        <span className={`${s.amountText} ${s.amountExpense}`}>{`- ${findTotalSumExpenses().toFixed(2).toLocaleString('ru')} грн.`}</span>
      </div>

      <img src={iconSlash} alt="React Logo" className={s.amountSlash} />
      <div className={`${s.transactionWrapper} ${s.amountWrapper}`}>
        <p className={s.amountTitle}>Доходы:</p>
        <span className={`${s.amountText} ${s.amountIncome}`}>{`+ ${findTotalSumIncomes().toFixed(2).toLocaleString('ru')} грн.`}</span>
      </div>
    </div>
  );
};
export default ReportAmount;
