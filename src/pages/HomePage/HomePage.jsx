import NavBar from '../../components/NavBar';
// import Authorization from '../../components/Auth';
import s from './HomePage.module.css';
import imgTitle from '../../img/title.svg';
import Authorization from '../../components/Auth/Auth';

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className={s.container}>
        <div className={s.mainSection}>
          <div className={s.bcgImage}></div>
          <div className={s.text}>
            <img className={s.imgText} src={imgTitle} alt="Kapusta" />
            <h1 className={s.fontText}>SMART FINANSE</h1>
          </div>
        </div>
        <div className={s.secondarySection}>
          <div className={s.bcgImageBottom}>
            <Authorization />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
