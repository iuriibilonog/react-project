import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import expenseIconCategories from '../../data/expenselcon.json';
import incomeIconCategories from '../../data/incomeIcon.json';
import Container from '../Container';
import sprite from '../../img/icon.svg';
import s from './Report.module.css';
import ReportAmount from './ReportAmount';

const Report = () => {
  return (
    <Container>
      <div className={s.reportContainer}>
        <ReportAmount />
        <div className={`${s.navigation} ${s.section}`}>
          <div className={s.navigationWrapper}></div>
        </div>

        <div className={`${s.reportWrapper} ${s.section}`}>
          <div className={`${s.transactionWrapper} ${s.sectionReportTitle}`}>
            <ArrowBackIosIcon style={{ color: '#FF751D', cursor: 'pointer' }} fontSize="small" />

            <h1 className={s.reportTitle}>расходы:</h1>

            <h1 className={s.reportTitle}>доходы:</h1>

            <ArrowForwardIosIcon style={{ color: '#FF751D', cursor: 'pointer' }} fontSize="small" />
          </div>
          <ul className={s.reportList}>
            {expenseIconCategories.map(item => {
              return (
                <li className={s.reportCard} key={item.id}>
                  <p>{`00`}</p>
                  <svg className={s.iconSvg} title={item.label}>
                    <use xlinkHref={`${sprite}#${item.label}`} title={item.label} />
                  </svg>
                  <p className={s.reportCardTitle}>{item.label}</p>
                </li>
              );
            })}
          </ul>
          <ul className={s.reportList}>
            {incomeIconCategories.map(item => {
              return (
                <li className={s.reportCard} key={item.id}>
                  <p>{`00`}</p>
                  <svg className={s.iconSvg} title={item.label}>
                    <use xlinkHref={`${sprite}#${item.label}`} title={item.label} />
                  </svg>
                  <p className={s.reportCardTitle}>{item.label}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Container>
  );
};
export default Report;
