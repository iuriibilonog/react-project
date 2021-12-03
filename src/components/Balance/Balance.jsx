import s from './Balance.module.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
import UnifiedModal from '../../shared/UnifiedModal';
import { getBalance, getUserBalance, getIsSystemInitialised } from '../../redux/selectors';
import { getIncomes, getExpenses } from '../../redux/transactions-selectors';
import GoToReport from '../GoToReport';
import { updateBalance } from '../../redux/transactions-operations';
const Balance = () => {
  //const strangeConst = 15.777777699999433;
  const initbalance = useSelector(getBalance);
  const userBalanceFromAuth = useSelector(getUserBalance);
  //const userBalance = useSelector(state => state.auth.user.userData.balance);
  const isSystemStarted = useSelector(getIsSystemInitialised);

  const expenses = useSelector(getExpenses).length;
  const incomes = useSelector(getIncomes).length;

  const dispatch = useDispatch();
  const pushIsSystemStartedMarkerToState = marker => dispatch(actions.setIsSystemStarted(marker));
  const pushBalanceToState = newBalance => dispatch(actions.setBalance(newBalance));

  const [initBalance, setInitBalance] = useState(Math.round(initbalance) + ' UAH'); //was balance in useState

  const [balanceState, setBalanceState] = useState('unset');
  const [timerId, setTimerId] = useState(null);
  const [isReminderShown, setIsReminderShown] = useState(false);

  const [isModalShown, setIsModalShown] = useState(false);

  const zeroReminding = () => {
    const timerId = setTimeout(() => {
      setIsReminderShown(true);
    }, 4000);
    setTimerId(timerId);
  };

  const confirmBtnMarkup = isEnabled => {
    return isEnabled ? (
      <button type="submit" className={s.confirmBtn}>
        Подтвердить
      </button>
    ) : (
      <button type="submit" className={s.confirmBtn_disabled} disabled>
        Подтвердить
      </button>
    );
  };

  useEffect(() => {
    if (isSystemStarted || expenses || incomes) {
      pushBalanceToState(userBalanceFromAuth); //  - to state only
      setInitBalance(userBalanceFromAuth);
      setBalanceState('set');
    } else if (balanceState === 'unset') {
      zeroReminding();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (balanceState === 'set') {
      clearTimeout(timerId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [balanceState]);

  useEffect(() => {
    setInitBalance(userBalanceFromAuth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userBalanceFromAuth]);

  const responseHandling = response => {
    setIsModalShown(false);
    console.log(response);
    if (response) {
      prepareDataForBackend();
    }
    return response;
  };

  const prepareDataForBackend = () => {
    const balanceDigit = initBalance.slice(0, initBalance.length - 4).trim();
    if (Number(balanceDigit)) {
      console.log('Output Balance :', balanceDigit);
      finalInitializing();
      sendDataToState(Number(balanceDigit));
    } else {
      console.log('Wrong balance!');
      setInitBalance('0 UAH');
    }
  };

  const finalInitializing = () => {
    setIsReminderShown('false');
    setBalanceState('set');
  };

  const sendDataToState = balanceDigit => {
    /* Send marker and balance to STATE */
    pushIsSystemStartedMarkerToState(true);
    //pushBalanceToState(userBalanceFromAuth); //  - to state only
    dispatch(
      updateBalance({
        newBalance: balanceDigit,
      }),
    );
  };

  const submitBalanceHandler = event => {
    event.preventDefault();
    setIsModalShown(true);
  };

  const clickBalanceHandler = event => {
    if (event.target.value === '0 UAH') {
      setInitBalance('');
    } else if (event.target.value.slice(event.target.value.length - 3) === 'UAH')
      setInitBalance(event.target.value.slice(0, event.target.value.length - 4));
  };

  const looseFocusBalanceHandler = event => {
    if (event.target.value === '') {
      setInitBalance('0 UAH');
    } else setInitBalance(prev => prev + ' UAH');
  };

  const changeBalanceHandler = event => {
    setInitBalance(event.target.value.trim());
  };

  const inputMarkup = isEnabled => {
    return isEnabled ? (
      <input
        type="input"
        value={initBalance}
        className={s.balance}
        onChange={changeBalanceHandler}
        onClick={clickBalanceHandler}
        onBlur={looseFocusBalanceHandler}
      />
    ) : (
      <input
        type="input"
        value={initBalance}
        className={s.balance}
        onChange={changeBalanceHandler}
        onClick={clickBalanceHandler}
        onBlur={looseFocusBalanceHandler}
        disabled
      />
    );
  };

  return (
    <div className={s.wrapper}>
      <GoToReport />
      <div className={s.flex}>
      <span className={s.title}>Баланс:</span>
        {isReminderShown === true && (
        <div className={s.reminding}>
          <p>Привет! Для начала работы внеси текущий баланс своего счета!</p>
          <p className={s.remindingSubMessage}>Ты не можешь тратить деньги пока их у тебя нет! </p>
        </div>
      )}
       <form onSubmit={submitBalanceHandler}>
        <div>
          {balanceState === 'set' ? inputMarkup(false) : inputMarkup(true)}
          {balanceState === 'set' ? confirmBtnMarkup(false) : confirmBtnMarkup(true)}
        </div>
      </form>
      </div>
      
      {isModalShown && <UnifiedModal title={'Вы уверены?'} response={responseHandling} />}
    </div>
  );
};

/***************** HOW TO USE UNIFIED MODAL WINDOW *****************/
//   const [isModalShown, setIsModalShown] = useState(false);

//   const responseHandling = response => {
//     setIsModalShown(false);

//     if (response) {
//       // POSITIVE ACTION;
//     }
//     return response;
//   };

// return
//   { isModalShown && <UnifiedModal title={'Вы уверены?'} response={responseHandling} />}
/*******************************************************************/

export default Balance;
