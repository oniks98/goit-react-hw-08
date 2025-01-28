import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  const getNavLinkClass = ({ isActive }) =>
    isActive ? `${css.link} ${css.active}` : css.link;

  return (
    <div>
      <NavLink to="/register" className={getNavLinkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={getNavLinkClass}>
        Log In
      </NavLink>
    </div>
  );
};
