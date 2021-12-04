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
