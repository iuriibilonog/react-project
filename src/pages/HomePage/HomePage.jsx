import NavBar from '../../components/NavBar';
// import Authorization from '../../components/Auth';
import s from './HomePage.module.css';
import imgTitle from '../../img/title.svg';
import Authorization from '../../components/Auth/Auth';

import { useState } from 'react';

import FormAddCategory from '../../components/FormAddCategory';
import { isUserLoggedIn } from '../../redux/selectors'
import { useSelector } from 'react-redux';


const HomePage = () => {


  const isLoggedIn = useSelector(isUserLoggedIn)
  console.log(isLoggedIn)

  const [socialImg, setSocialImg] = useState('');
  const [socialName, setSocialName] = useState('');
  const [isAuthFromSocial, setIsAuthFromSocial] = useState(false);

  
  const getDataFromSocial = ({ img, name}) => {
    setSocialImg(img);
    setSocialName(name);
  }

  const getTypeOfAuth = (bool) => {
    setIsAuthFromSocial(bool)
  }

  


  return (
    <>

      <NavBar socialName={socialName} socialImg={socialImg} isAuthFromSocial={isAuthFromSocial}/>

      <div className={s.container}>
        <div className={s.mainSection}>
          <div className={s.bcgImage}></div>
          <div className={s.text}>
            <img className={s.imgText} src={imgTitle} alt="Kapusta" />
            <h1 className={s.fontText}>SMART FINANSE</h1>
          </div>
        </div>
        <div className={s.secondarySection}>
          {!isLoggedIn && <Authorization getDataFromSocial={getDataFromSocial} getTypeOfAuth={getTypeOfAuth} />}
            <div className={s.bcgImageBottom}>
            </div>
          </div>

         
      </div>
    </>
  );
};

export default HomePage;
