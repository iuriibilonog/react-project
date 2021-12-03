import Report from '../../components/Report';
import CurrentMonth from '../../components/CurrentMonth/CurrentMonth';
import GoHome from '../../components/GoHome/GoHome';
import Container from '../../components/Container';
import s from './ReportsPage.module.css';

const ReportPage = () => {
  
  return (
    <Container>
      <GoHome />
      <CurrentMonth />
      
      <Report  />
    </Container>
  );
};

export default ReportPage;
