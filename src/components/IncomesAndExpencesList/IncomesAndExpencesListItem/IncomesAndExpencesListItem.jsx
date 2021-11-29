import s from "./IncomesAndExpencesListItem.module.css";

const IncomesAndExpencesListItem = () => {
  return (
    <>
      <li className={s.listItem}>
        <div className={s.changeFlow}><span>"05.09.2019"</span>
        <span className={s.description}>"Метро"</span></div>
        <span>"Транспорт"</span>
        <span className={s.amount}>"- 30.00 грн."</span>
        <span>"delete btn"</span>
      </li>
    </>
  );
};

export default IncomesAndExpencesListItem;
