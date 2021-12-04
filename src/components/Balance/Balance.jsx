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
import GoHome from '../GoHome/GoHome';
const Balance = () => {
  const [balanceState, setBalanceState] = useState('unset');
  const [timerId, setTimerId] = useState(null);
  const [isReminderShown, setIsReminderShown] = useState(false);
  const [isModalShown, setIsModalShown] = useState(false);

  const userBalanceFromAuth = useSelector(getUserBalance);
  const [balance, setBalance] = useState(Math.round(userBalanceFromAuth) + ' UAH'); //то что отображается в инпуте

  const dispatch = useDispatch();
  const pushIsSystemStartedMarkerToState = marker => dispatch(actions.setIsSystemStarted(marker));
  const pushBalanceToState = newBalance => dispatch(actions.setBalance(newBalance)); //if it`s beginning

  const bal = useSelector(getBalance);

  const isSystemStarted = useSelector(getIsSystemInitialised);
  const expenses = useSelector(getExpenses).length;
  const incomes = useSelector(getIncomes).length;

  useEffect(() => {
    console.log(bal);
    setBalance(Math.round(bal) + ' UAH');
  }, [bal]);

  const zeroReminding = () => {
    const timerId = setTimeout(() => {
      setIsReminderShown(true);
    }, 4000);
    setTimerId(timerId);
  };

  useEffect(() => {
    if (userBalanceFromAuth || isSystemStarted || expenses || incomes) {
      pushBalanceToState(userBalanceFromAuth); //  - to state only
      setBalance(userBalanceFromAuth + ' UAH');
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

  // useEffect(() => {
  //   setBalance(initBalance); // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [initBalance]);

  useEffect(() => {
    setBalance(userBalanceFromAuth);
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
    const balanceDigit = balance.slice(0, balance.length - 4).trim();
    if (Number(balanceDigit)) {
      console.log('Output Balance :', balanceDigit);
      finalInitializing();
      sendDataToState(Number(balanceDigit));
    } else {
      console.log('Wrong balance!');
      setBalance('0 UAH');
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
    console.log(balance);
    setIsModalShown(true);
  };

  const clickBalanceHandler = event => {
    if (event.target.value === '0 UAH') {
      setBalance('');
    } else if (event.target.value.slice(event.target.value.length - 3) === 'UAH')
      setBalance(event.target.value.slice(0, event.target.value.length - 4));
  };

  const looseFocusBalanceHandler = event => {
    if (event.target.value === '') {
      setBalance('0 UAH');
    } else setBalance(prev => prev + ' UAH');
  };

  const changeBalanceHandler = event => {
    setBalance(event.target.value.trim());
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

  const inputMarkup = isEnabled => {
    return isEnabled ? (
      <input
        type="input"
        value={balance}
        className={s.balance}
        onChange={changeBalanceHandler}
        onClick={clickBalanceHandler}
        onBlur={looseFocusBalanceHandler}
      />
    ) : (
      <input
        type="input"
        value={balance}
        className={s.balance}
        onChange={changeBalanceHandler}
        onClick={clickBalanceHandler}
        onBlur={looseFocusBalanceHandler}
        disabled
      />
    );
  };

  return (
    <>
    {/* <div className={s.wrapper}> */}
      {/* <section className={s.goHomeSection}> */}
        {/* <GoHome /> */}
      {/* </section> */}
      <section className={s.balanceSection}>
        <span className={s.title}>Баланс:</span>
        {isReminderShown === true && (
          <div className={s.reminding}>
            <p>Привет! Для начала работы внеси текущий баланс своего счета!</p>
            <p className={s.remindingSubMessage}>
              Ты не можешь тратить деньги пока их у тебя нет!{' '}
            </p>
          </div>
        )}
        <form onSubmit={submitBalanceHandler}>
          <div className={s.formWrapper}>
            {balanceState === 'set' ? inputMarkup(false) : inputMarkup(true)}
            {balanceState === 'set' ? confirmBtnMarkup(false) : confirmBtnMarkup(true)}
          </div>
        </form>
      </section>
      {/* <section className={s.goToReportSection}> */}
        {/* <GoToReport /> */}
        {isModalShown && <UnifiedModal title={'Вы уверены?'} response={responseHandling} />}
      {/* </section> */}
      {/* </div> */}
      </>
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
