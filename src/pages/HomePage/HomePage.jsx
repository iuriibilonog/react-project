import NavBar from '../../components/NavBar';
// import Authorization from '../../components/Auth';
import s from './HomePage.module.css';
import imgTitle from '../../img/title.svg';
import Authorization from '../../components/Auth/Auth';

import { useEffect, useState } from 'react';

import FormAddCategory from '../../components/FormAddCategory';



import IncomesPage from '../IncomesPage';
import NavigationBetweenCategories from '../../components/FormAddCategory/NavigationBetweenCategoryes/NavigationBetweenCategoryes';


import { useDispatch, useSelector } from 'react-redux';
import { getIncomesCategories } from '../../redux/transactions-operations';
import { getExpensesCategories } from '../../redux/transactions-operations';
import { getIncomeTransactions} from '../../redux/transactions-operations';
import { isUserLoggedIn } from '../../redux/selectors'




const HomePage = () => {
  const isLoggedIn = useSelector(isUserLoggedIn);
  console.log(isLoggedIn);
  const token = useSelector(state => state.auth.token)

  const [socialImg, setSocialImg] = useState('');
  const [socialName, setSocialName] = useState('');
  const [isAuthFromSocial, setIsAuthFromSocial] = useState(false);
  
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('ok')
    console.log('before-->', isLoggedIn);
    if (isLoggedIn) {
      dispatch(getIncomesCategories())
      dispatch(getExpensesCategories())
       dispatch(getIncomeTransactions());
    }
    
    console.log('after-->', isLoggedIn);
   
   console.log('ok2')
  }, [isLoggedIn])

  const getDataFromSocial = ({ img, name }) => {
    setSocialImg(img);
    setSocialName(name);
  };

  const getTypeOfAuth = bool => {
    setIsAuthFromSocial(bool);
  };

  return (
    <>
      {/* <NavBar socialName={socialName} socialImg={socialImg} isAuthFromSocial={isAuthFromSocial} /> */}

      <div className={s.container}>
        <div className={s.mainSection}>
          <div className={s.bcgImage}></div>
          <div className={s.text}>
            <img className={s.imgText} src={imgTitle} alt="Kapusta" />
            <h1 className={s.fontText}>SMART FINANSE</h1>
          </div>
        </div>
        {isLoggedIn && <NavigationBetweenCategories />}
        <div className={s.secondarySection}>
          {!isLoggedIn && (
            <Authorization getDataFromSocial={getDataFromSocial} getTypeOfAuth={getTypeOfAuth} />
          )}
          {/* <IncomesPage /> */}
          <div className={s.bcgImageBottom}></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
