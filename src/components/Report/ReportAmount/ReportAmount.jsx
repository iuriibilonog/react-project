import s from './ReportAmount.module.css';
import iconSlash from '../../../img/slash.svg';

const ReportAmount = () => {
  return (
    <div className={`${s.section} ${s.amountSection}`}>
      <div className={`${s.transactionWrapper} ${s.amountWrapper}`}>
        <p className={s.amountTitle}>Расходы:</p>
        <span className={`${s.amountText} ${s.amountExpense}`}>{'- 18 000 грн.'}</span>
      </div>

      <img src={iconSlash} alt="React Logo" className={s.amountSlash} />
      <div className={`${s.transactionWrapper} ${s.amountWrapper}`}>
        <p className={s.amountTitle}>Доходы:</p>
        <span className={`${s.amountText} ${s.amountIncome}`}>{'+ 18 000 грн.'}</span>
      </div>
    </div>
  );
};
export default ReportAmount;
