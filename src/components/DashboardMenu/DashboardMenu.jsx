import HomeIcon from '@mui/icons-material/Home';
import StatisticsIcon from '@mui/icons-material/Insights';
import CurrencyIcon from '@mui/icons-material/AttachMoney';
import Media from 'react-media';
import css from './dashboardMenu.module.css';
import { NavLink } from 'react-router-dom';

export const DashboardMenu = () => {
  return (
    <div className={css.MenuContainer}>
      <ul className={css.ButtonsList}>
        <li>
          {/* Set the "exact" prop to make sure it's active only on /home */}
          <NavLink to="" data-label="Home">
            <HomeIcon className={css.Icon} />
          </NavLink>
        </li>
        <li>
          <NavLink to="diagram" data-label="Statistics">
            <StatisticsIcon className={css.Icon} />
          </NavLink>
        </li>
        <Media
          query="(max-width: 767px)"
          render={() => (
            <li>
              <NavLink to="currencies">
                <CurrencyIcon className={css.Icon} />
              </NavLink>
            </li>
          )}
        />
      </ul>
    </div>
  );
};
