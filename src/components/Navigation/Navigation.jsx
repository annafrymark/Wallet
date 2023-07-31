import HomeIcon from '@mui/icons-material/Home';
import StatisticsIcon from '@mui/icons-material/Insights';
import CurrencyIcon from '@mui/icons-material/AttachMoney';
import Media from 'react-media';
import css from './navigation.module.css';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div className={css.MenuContainer}>
      <ul className={css.NavList}>
        <li>
          <NavLink
            to=""
            data-label="Home"
            end
            className={({ isActive }) =>
              isActive ? `${css.Active} ${css.Link}` : css.Link
            }
          >
            <HomeIcon className={css.Icon} />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="diagram"
            data-label="Statistics"
            className={({ isActive }) =>
              isActive ? `${css.Active} ${css.Link}` : css.Link
            }
          >
            <StatisticsIcon className={css.Icon} />
            <span> Statistics</span>
          </NavLink>
        </li>
        <Media
          query="(max-width: 767px)"
          render={() => (
            <li>
              <NavLink
                to="currencies"
                className={({ isActive }) =>
                  isActive ? `${css.Active} ${css.Link}` : css.Link
                }
              >
                <CurrencyIcon className={css.Icon} />
              </NavLink>
            </li>
          )}
        />
      </ul>
    </div>
  );
};
