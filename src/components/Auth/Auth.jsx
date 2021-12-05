import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UnifiedModal from '../../shared/UnifiedModal';
import { register, login, loginFromGoogle, getUser } from '../../redux/auth/auth-operations';
import { FacebookAuth } from './SocialAuth';
import s from './Auth.module.css';
import RegisterModal from '../RegisterModal/';
import { useLocation } from 'react-router';
import google from '../../img/google.svg';





const Authorization = ({ getDataFromSocial, getTypeOfAuth }) => {
  const isRegisterFullField = useSelector(state => state.auth.isRegisterFullField)
  
  const location = useLocation();
  
  const urlParams = new URLSearchParams(location.search);
  const accessToken = urlParams.get('accessToken');
  const refreshToken = urlParams.get('refreshToken');
  const sid = urlParams.get('sid');
  
  const dispatch = useDispatch();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginType, setIsLoginType] = useState(true);
  const [socialAuth, setSocialAuth] = useState(false)
  const [isModalShown, setIsModalShown] = useState(false);
 
 
  
  useEffect(() => {
    if (!location?.search) return
    
    dispatch(getUser({ accessToken, refreshToken, sid }))
    
    
    
  }, [])

  useEffect(() => {
    if (isRegisterFullField) dispatch(login({ email, password, socialAuth }))
    setEmail('');
      setPassword('');

   }, [isRegisterFullField])
  

  

  
  
  
  const responseHandling = response => {
    setIsModalShown(false);
    
    if (response) {
      // dispatch(login({ email, password, socialAuth }))
      //  setEmail('');
      // setPassword('');
      
      // POSITIVE ACTION;
    }
    return response;
  };

  
/***/
  
  


  


  const handleOnChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name': return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };



  const toggleIsLoginType = (e) => {
  
      isLoginType ? setIsLoginType(false) : setIsLoginType(true)
      console.log('LoginTypeAfterClick -->', isLoginType)
    
     
  }

  // const handleOnTimer = (count) => {
  //   if (count === true) {
  //     dispatch(login({ email, password, socialAuth }))
  //     setIsModalShown(false)
  //     setEmail('');
  //     setPassword('');
  //   }
  // }



  const handleOnSubmit = e => {

    e.preventDefault();
    if (!isLoginType) {
      setSocialAuth(false)
      dispatch(register({ email, password, socialAuth }))
      setIsLoginType(true)
      getTypeOfAuth(false)
      setIsModalShown(true)
      // if (isRegisterFullField === 'true') {
        
      //   setIsModalShown(true)
      // }
      // setEmail('');
      // setPassword('');
      
      
    }
    else if (isLoginType) {
      setSocialAuth(false)
      dispatch(login({email, password, socialAuth }))
      console.log('Сабмит формы Логин')
      getTypeOfAuth(false)
      setEmail('');
      setPassword('');
    }
  }

  const handleAuthFromSocial = (authEmailFromSocial, authPasswordFromSocial, authImgFromSocial, authNameFromSocial) => {
  
    const img = authImgFromSocial;
    const email = authEmailFromSocial;
    const name = authNameFromSocial;
    const password = authPasswordFromSocial;
    console.log(img);
    console.log(email);
    console.log(password);
    
    if (!isLoginType) {
      setSocialAuth(true)
      dispatch(register({ email, password, socialAuth }));
      
      
    } else if (isLoginType) {
      setSocialAuth(true)
      dispatch(login({ email, password, socialAuth }));
      
    }
    getDataFromSocial({ img, name })
    getTypeOfAuth(true)
  }

  console.log(isModalShown)
  
  
  
  return (
    
    <div className={s.auth}>
     
      {/* {isModalShown && <RegisterModal handleOnTimer={handleOnTimer}/>} */}
      <div className={s.authWrapper}>
        <p className={s.authText}>Вы можете авторизоваться с помощью Google Account:</p>
        <div className={s.socialBtnsWrapper}>
          <a className={s.googleBtn} href="https://kapusta-backend.goit.global/auth/google">
            <img className={s.googleIcon} src={google} alt="Google" />
            Google</a>
        {/* <FacebookAuth onSubmit={handleAuthFromSocial}/> */}
        </div>
          <p className={`${s.authText} ${s.text}`} >
          Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
        </p>
        <form className={s.authForm} onSubmit={handleOnSubmit}>
          <div className={s.inputsWrapper}>
             
            <label htmlFor="authMail" className={s.inputTitle}>
              {' '}
              Электронная почта:
            </label>
            <input
              className={s.authInput}
              type="email"
              name="email"
              value={email}
              id="authMail"
              minLength="10"
              maxLength="63"
              placeholder="your@email.com"
              title="Введите данные в формате: somemail@email.com / somemail@email.com.vn"
              pattern="^([a-zA-Z0-9_\-\.]{2,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
              required
              onChange={handleOnChange}
            />
            <label htmlFor="authPassword" className={s.inputTitle}>
              {' '}
              Пароль:
            </label>
            <input
              className={s.authInput}
              type="password"
              name="password"
              value={password}
              id="authPassword"
              minLength='2'
              // pattern="/^[a-z0-9]+/"
              title='Пароль должен состоять из цифр и латинских букв'
              required
              onChange={handleOnChange}
            />
          </div>
          {isLoginType ? <div className={s.authLoginBtnsWrapper}>
           
            <button className={s.authBtn + ' ' + s.authBtnActive} type="submit">Войти</button>
            <button className={s.authBtn} type="button" onClick={toggleIsLoginType} >Регистрация</button>

            </div> : <div className={s.authAuthBtnsWrapper}>
           
            <button className={s.authBtn + ' ' + s.authBtnActive} type="submit">Регистрация</button>
            <button className={s.authBtn} type="button" onClick={toggleIsLoginType} >Войти</button>

            </div>}
        </form>
        
      </div>
    </div>
  );
};

export default Authorization;



