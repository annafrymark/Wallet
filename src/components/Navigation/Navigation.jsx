import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

// TODO: check routes
// TODO: add styles & icons, check if activeLink/notActiveLink is working

const isActive = ({ isActive }) => {
  return isActive ? styles.activeLink : styles.notActiveLink;
};

const Navigation = () => {
  return (
    <>
      <div className="container">
        <nav className="navigation">
          <NavLink to="/home" className={isActive}>
            <p className="link_name">Homepage</p>
          </NavLink>
          <NavLink to="/statistics" className={isActive}>
            <p className="link_name">Statistics</p>
          </NavLink>
          <NavLink to="/currencies" className={isActive}>
            <p className="link_name">Currencies</p>
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
