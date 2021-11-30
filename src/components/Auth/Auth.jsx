import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import s from './Auth.module.css';



const Authorization = () => {

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginType, setIsLoginType] = useState(true);


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
      
      
    }
    else if(isLoginType){
      dispatch(register({email, password }))
      console.log('Сабмит формы Логин')
      
    }
  }

  return (
    <div className={s.auth}>
      <div className={s.authWrapper}>
        <p className={s.authText}>Вы можете авторизоваться с помощью Google Account:</p>
        <button className={s.googleBtn} type="button">
          Google
        </button>
        <p className={s.authText}>
          Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
        </p>
        <form className={s.authForm} onSubmit={handleOnSubmit}>
          <div className={s.inputsWrapper}>
            {!isLoginType && <>
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
            </>}
             
            <label htmlFor="authMail" className={s.inputTitle}>
              {' '}
              Электронная почта:
            </label>
            <input
              className={s.authInput}
              type="text"
              name="email"
              value={email}
              id="authMail"
              placeholder="your@email.com"
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


