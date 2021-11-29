import s from "./Balance.module.css";

const Balance = () => {
  return (
    <div className={s.wrapper}>
      <span className={s.title}>Баланс:</span>
      <input type="input" value="00.00 UAH" className={s.balance} />
      <button type="button" className={s.confirmBtn}>
        Подтвердить
      </button>
    </div>
  );
};

export default Balance;
