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
          <CustomScroll className="rcs-inner-handle">
            <div className={s.summarySection}>
              <h3 className={s.title}>Сводка</h3>
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
            </div>
          </CustomScroll>
        </div>
      )}
    </>
  );
};

export default Summary;
