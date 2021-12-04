import s from './Summary.module.css';
import './customScroll.css';

import { useSelector } from 'react-redux';
import { getMonthStats } from '../../redux/selectors';

import CustomScroll from 'react-custom-scroll';

const Summary = () => {
  const summary = useSelector(getMonthStats);

  return (
    <>
      {summary && (
        <div className="scrollWrapper">
          <div className={s.summarySection}>
            <h3 className={s.title}>Сводка</h3>
            <CustomScroll className="rcs-inner-handle">
              <ul className={s.list}>
                {Object.entries(summary)
                  .filter(([key, value]) => value !== 'N/A')
                  .map(([key, value]) => (
                    <li className={s.item} key={key}>
                      <span className={s.itemMonthSum}>{key}</span>
                      <span className={s.itemMonthSum}>{value}</span>
                    </li>
                  ))}
              </ul>
            </CustomScroll>
          </div>
        </div>
      )}
    </>
  );
};

export default Summary;
