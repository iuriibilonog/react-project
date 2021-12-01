import s from './Balance.module.css';
import { useState } from 'react';
import * as selectors from '../../redux/selectors';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
import UnifiedModal from '../../shared/UnifiedModal';

const Balance = () => {
  const balance = useSelector(state => state.transactions.balance);
  const isSystemStarted = useSelector(state => state.isSystemStarted);
  const dispatch = useDispatch();
  const pushIsSystemStartedMarkerToState = marker => dispatch(actions.setIsSystemStarted(marker));
  const pushBalanceToState = newBalance => dispatch(actions.setBalance(newBalance));

  const [initBalance, setInitBalance] = useState(balance + ' UAH');
  const [balanceState, setBalanceState] = useState('unset');
  const [timerId, setTimerId] = useState(null);
  const [isReminderShown, setIsReminderShown] = useState(false);

  const [isModalShown, setIsModalShown] = useState(false);
  const [isBalanceConfirmed, setIsBalanceConfirmed] = useState(false);

  const zeroReminding = () => {
    const timerId = setTimeout(() => {
      setIsReminderShown(true);
    }, 4000);
    setTimerId(timerId);
  };

  const clickBalanceHandler = event => {
    if (event.target.value === '00.00 UAH' || balance === 0) {
      setInitBalance('');
    } else if (event.target.value.slice(event.target.value.length - 3) === 'UAH')
      setInitBalance(event.target.value.slice(0, event.target.value.length - 4));
  };

  const looseFocusBalanceHandler = event => {
    if (event.target.value === '') {
      setInitBalance('00.00 UAH');
    } else setInitBalance(prev => prev + ' UAH');
  };

  const changeBalanceHandler = event => {
    setInitBalance(event.target.value.trim());
  };

  const finalInitializing = balanceDigit => {
    setIsReminderShown('false');
    setBalanceState('set');
    pushIsSystemStartedMarkerToState(true);
    pushBalanceToState(balanceDigit);
  };

  const submitBalanceHandler = event => {
    event.preventDefault();
    /// ????
    setIsModalShown(true);
    /// ????

    // async () => {
    //   const result = await Confirm('Сonfirmation text',
    //     'Сonfirmation title');
    // }

    const balanceDigit = initBalance.slice(0, initBalance.length - 4).trim();
    if (Number(balanceDigit) /*  && isBalanceConfirmed */) {
      /* Send it to STATE */
      console.log('Output Balance :', balanceDigit);
      finalInitializing(balanceDigit);
      /********************/
    } else {
      console.log('Wrong balance!');
      setInitBalance('00.00 UAH');
    }
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
    if (isSystemStarted) {
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

  const responseHandling = resp => {
    setIsModalShown(false);
    setIsBalanceConfirmed(resp);
    console.log(resp);
    return resp;
  };

  return (
    <div className={s.wrapper}>
      <span className={s.title}>Баланс:</span>
      <form
        // onSubmit={async event => {
        //   event.preventDefault();
        //   setIsModalShown(true);
        //   const result = await responseHandling();
        //   if (result) {
        onSubmit={submitBalanceHandler}
      >
        <div>
          {balanceState === 'set' ? inputMarkup(false) : inputMarkup(true)}
          {balanceState === 'set' ? confirmBtnMarkup(false) : confirmBtnMarkup(true)}
        </div>
      </form>
      {isReminderShown === true && (
        <div className={s.reminding}>
          <p>Привет! Для начала работы внеси текущий баланс своего счета!</p>
          <p className={s.remindingSubMessage}>Ты не можешь тратить деньги пока их у тебя нет! </p>
        </div>
      )}
      {isModalShown && <UnifiedModal title={'Вы уверены?'} response={responseHandling} />}
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     balance: selectors.getBalance(state),
//     isSystemStarted: selectors.getIsSystemStarted(state),
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     pushBalanceToState: newBalance => dispatch(setBalance(newBalance)),
//     pushIsSystemStartedMarkerToState: isSystemStarted => dispatch(setIsSystemStarted(isSystemStarted)),
//   };
// };

// export default connect(mapStateToProps)(Balance);
export default Balance;
