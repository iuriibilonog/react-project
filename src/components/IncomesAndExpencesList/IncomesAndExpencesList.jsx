import s from './IncomesAndExpencesList.module.css';
import IncomesAndExpencesListItem from './IncomesAndExpencesListItem';

import CustomScroll from 'react-custom-scroll';
import './customScroll.css';

import { useEffect, useState } from 'react';

const IncomesAndExpencesList = () => {
  // useEffect(() => {
  //   // запрос за данными
  // })

  const [transactions, setTransactions] = useState([
    { date: '05.06', desc: 'Lorem Ipsum', categ: 'food', amount: 245 },
    { date: '05.06', desc: 'Lorem Ipsum', categ: 'food', amount: 25.0345 },
    { date: '05.06', desc: 'Lorem Ipsum', categ: 'food', amount: 56.16 },
    { date: '05.06', desc: 'Lorem Ipsum', categ: 'food', amount: 17.256 },
    { date: '05.06', desc: 'Lorem Ipsum', categ: 'food', amount: 120.5 },
    { date: '05.06', desc: 'Lorem Ipsum', categ: 'food', amount: 120.5 },
  ]);
  console.log(transactions);

  return (
    <>
      <div className={s.list}>
        <header className={s.header}>
          <div className={s.groupingDiv}>
            <span className={s.date}>Дата</span>
            <span className={s.description}>Описание</span>
          </div>
          <span className={s.category}>Категория</span>
          <span className={s.amount}>Сумма</span>
        </header>
        <CustomScroll className="rcs-inner-handle">
          <ul className={s.transactionsList}>
            {transactions.map(item => (
              <IncomesAndExpencesListItem itemProps={item} />
            ))}
          </ul>
        </CustomScroll>
      </div>
    </>
  );
};

export default IncomesAndExpencesList;
