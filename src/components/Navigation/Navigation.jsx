import { NavLink } from 'react-router-dom';

// TODO: function to select if active
// TODO: check routes
// TODO: add styles & icons

const Navigation = () => {
  return (
    <>
      <div className="container">
        <nav className="navigation">
          <NavLink to="/homepage" className={active}>
            <p className="link_name">homepage</p>
          </NavLink>
          <NavLink to="/statistics" className={notActive}>
            <p className="link_name">Statistics</p>
          </NavLink>
          <NavLink to="/currencies" className={notActive}>
            <p className="link_name">Currencies</p>
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
