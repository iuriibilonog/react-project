import s from "./IncomesAndExpencesList.module.css";

import IncomesAndExpencesListItem from "./IncomesAndExpencesListItem";

const IncomesAndExpencesList = () => {
  return (
    <>
      <div className={s.list}>
        <header className={s.header}><span>Дата</span><span>Описание</span><span>Категория</span><span>Сумма</span></header>
        <ul>
          <IncomesAndExpencesListItem />
        </ul>
      </div>
    </>
  );
};

export default IncomesAndExpencesList;
