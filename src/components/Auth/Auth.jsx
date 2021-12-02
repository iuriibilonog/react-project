import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Parser from 'html-react-parser';
import { register, login, loginFromGoogle, getUser } from '../../redux/auth/auth-operations';
import { FacebookAuth } from './SocialAuth';
import s from './Auth.module.css';



const Authorization = () => {

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginType, setIsLoginType] = useState(true);
  const [markUp, setMarkUp] = useState('');
  
  


  const handerGoogleAuth = (data) => {
    setMarkUp(data)
  
    
  }


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



  const handleOnSubmit = e => {

    e.preventDefault();
    if (!isLoginType) {
      dispatch(register({ email, password }))
      console.log('Сабмит формы Регистрация')
      setEmail('');
      setPassword('');
      
      
    }
    else if(isLoginType){
      dispatch(login({email, password }))
      console.log('Сабмит формы Логин')
      setEmail('');
      setPassword('');
    }
  }

  const handleAuthFromSocial = (authEmailFromSocial, authPasswordFromSocial, authImgFromSocial) => {
  
    const img = authImgFromSocial;
    const email = authEmailFromSocial;
    
    const password = authPasswordFromSocial;
    console.log(img);
    console.log(email);
    console.log(password);
    
    if (!isLoginType) {
      dispatch(register({ email, password }));
      
      
    } else if (isLoginType) {
      dispatch(login({ email, password }));
      
      
    }
  }





  return (

    <div className={s.auth}>
      <div className={s.authWrapper}>
        <p className={s.authText}>Вы можете авторизоваться с помощью Google Account:</p>
        <div className={s.socialBtnsWrapper}>
        <button className={s.googleBtn} type="button" onClick={() => dispatch(loginFromGoogle(handerGoogleAuth))}>
          Google
          </button>
          {/* <a href="https://kapusta-backend.goit.global/auth/google" onClick={() =>dispatch(getUser())}>Google</a> */}
        <FacebookAuth onSubmit={handleAuthFromSocial}/>
        </div>
          <p className={s.authText}>
          Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
        </p>
        <form className={s.authForm} onSubmit={handleOnSubmit}>
          <div className={s.inputsWrapper}>
            {/* {!isLoginType && <>
            <label htmlFor="authName" className={s.inputTitle}>
              {' '}
              Имя:
            </label>
            <input
              className={s.authInput}
              type="text"
              name="name"
              value={name}
              id="authName"
                placeholder="Имя"
                
              onChange={handleOnChange}
            />
            </>} */}
             
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
              placeholder="your@email.com"
              title="Введите данные в формате: somemail@email.com / somemail@email.com.vn"
              pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
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
      <div className="content">{Parser(markUp)}</div>
    </div>
  );
};

export default Authorization;



