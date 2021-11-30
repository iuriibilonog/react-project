import { Link } from 'react-router-dom';
import sprite from '../../img/sprite.svg';
import s from './GoHome.module.css';

const GoHome = () => {
  let width = window.innerWidth;

  return (
    <>
      {width > 768 ? (
        <button className={s.btn}>
          <Link to="/">
            <svg className={s.svgBtn} width="18" height="12">
              <use href={sprite + '#icon-toHome'}></use>
            </svg>
          </Link>
          <Link className={s.text} to="/">
            Вернуться на главную
          </Link>
        </button>
      ) : (
        <button>
          <Link to="/">
            <svg width="18" height="12">
              <use href={sprite + '#icon-toHome'}></use>
            </svg>
          </Link>
        </button>
      )}
    </>
  );
};

export default GoHome;
