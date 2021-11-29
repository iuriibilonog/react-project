import s from './IncomesAndExpencesList.module.css';

import IncomesAndExpencesListItem from './IncomesAndExpencesListItem';

const IncomesAndExpencesList = () => {
  return (
    <>
      <div className={s.list}>
        <header className={s.header}>
          <span className={s.date}>Дата</span>
          <span className={s.description}>Описание</span>
          <span className={s.category}>Категория</span>
          <span className={s.amount}>Сумма</span>
        </header>
        <ul>
          <IncomesAndExpencesListItem />
        </ul>
      </div>

      {/* <table>
        <tr>
          <th>1</th>
          <th>2</th>
        </tr>
        <tr>
          <td>haha</td>
          <td>hoho</td>
        </tr>
      </table> */}
    </>
  );
};

export default IncomesAndExpencesList;
