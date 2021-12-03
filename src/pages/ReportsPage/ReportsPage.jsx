import Report from '../../components/Report';
import CurrentMonth from '../../components/CurrentMonth/CurrentMonth';
import GoHome from '../../components/GoHome/GoHome';
// import Chart from '../../components/Chart';
import Container from '../../components/Container'


const ReportsPage = () => {
  
  return (
    <Container>
      <GoHome />
      <CurrentMonth />
      <Report />
      {/* <Chart/> */}
    
    </Container>
  );
};

export default ReportsPage;
