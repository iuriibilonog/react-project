import s from './IncomesAndExpencesListItem.module.css';


const IncomesAndExpencesListItem = () => {
  return (
    <>
      <li className={s.listItem}>
        <div className={s.changeFlow}>
          <span className={s.date}>05.09.2019</span>
          <span className={s.description}>Метро</span>
        </div>
        <span className={s.category}>Транспорт</span>
        <div className={s.flex}>
          <span className={s.amount}>- 30.00 грн.</span>
          <span className={s.delete}>
            <svg className={s.deleteIcon}>
                <use href="../../../img/sprite.svg"></use>
            </svg>
          </span>
        </div>
      </li>
    </>
  );
};

export default IncomesAndExpencesListItem;
