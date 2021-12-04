import Report from '../../components/Report';
import CurrentMonth from '../../components/CurrentMonth/CurrentMonth';
import GoHome from '../../components/GoHome/GoHome';


import s from './ReportsPage.module.css';

import Chart from '../../components/Chart';

import Container from '../../components/Container'
import Loader from '../../components/Loader'
import { getLoader } from '../../redux/transactions-selectors';
import { useSelector } from 'react-redux';


const ReportsPage = () => {
  const loader = useSelector(getLoader);
  return (

    <>
      <Container>
      {loader && <Loader />}
      <GoHome />
        <CurrentMonth />
        </Container>
      <Report />
      {/* <Chart/> */}
    
    </>

  );
};

export default ReportsPage;
