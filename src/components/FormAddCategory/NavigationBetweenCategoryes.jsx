import { NavLink, useLocation } from 'react-router-dom';

const NavigationBetweenCategoryes = () => {
  const location = useLocation();
  return (
    <ul>
      <NavLink
        // className={s.Button}
        // activeClassName={s.ButtonActive}
        to={{
          pathname: `/income`,
          // state: { ...location.state }, //{from: {…}}
          state: { from: location.state?.from }, //{from: {…}}
        }}
      >
        Доход
      </NavLink>
      <NavLink
        // className={s.Button}
        // activeClassName={s.ButtonActive}
        to={{
          pathname: `/spend`,
          state: { ...location.state },
        }}
      >
        <li>Расход </li>
      </NavLink>
    </ul>
  );
};

export default NavigationBetweenCategoryes;
