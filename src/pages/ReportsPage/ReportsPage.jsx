import Report from '../../components/Report';
import CurrentMonth from '../../components/CurrentMonth/CurrentMonth';
import GoHome from '../../components/GoHome/GoHome';


import s from './ReportsPage.module.css';

import Chart from '../../components/Chart';

import Container from '../../components/Container'



const ReportsPage = () => {
  
  return (

    <>
      <Container>
      <GoHome />
        <CurrentMonth />
        </Container>
      <Report />
      {/* <Chart/> */}
    
    </>

  );
};

export default ReportsPage;
