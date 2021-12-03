// import { NavLink, useLocation } from 'react-router-dom';
// import s from './NavigationBetweenCategories.module.css';

// const NavigationBetweenCategories = () => {
//   const location = useLocation();
//   return (
//     <ul className={s.navList}>
//       <NavLink
//         className={s.navListItem}
//         activeClassName={s.navListItemActive}
//         to={{
//           pathname: `/income`,
//           // state: { ...location.state }, //{from: {…}}
//           state: { from: location.state?.from }, //{from: {…}}
//         }}
//       >
//         <li> Доход</li>
//       </NavLink>
//       <NavLink
//         className={s.navListItem}
//         activeClassName={s.navListItemActive}
//         to={{
//           pathname: `/spend`,
//           state: { ...location.state },
//         }}
//       >
//         <li>Расход </li>
//       </NavLink>
//     </ul>
//   );
// };


// export default NavigationBetweenCategories;
