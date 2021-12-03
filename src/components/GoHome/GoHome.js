import { NavLink } from 'react-router-dom';
import sprite from '../../img/sprite.svg';
import s from './GoHome.module.css';

const GoHome = () => {
  let width = window.innerWidth;

  return (
    <>
      {width > 768 ? (
        <button className={s.btn}>
          <NavLink exact to="/">
            <svg className={s.svgBtn} width="18" height="12">
              <use href={sprite + '#icon-toHome'}></use>
            </svg>
          </NavLink>
          <NavLink className={s.text} to="/">
            Вернуться на главную
          </NavLink>
        </button>
      ) : (
        <button>
          <NavLink exact to="/">
            <svg width="18" height="12">
              <use href={sprite + '#icon-toHome'}></use>
            </svg>
          </NavLink>
        </button>
      )}
    </>
  );
};

export default GoHome;
