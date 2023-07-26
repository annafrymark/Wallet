import HomeIcon from '@mui/icons-material/Home';
import StatisticsIcon from '@mui/icons-material/Insights';
import CurrencyIcon from '@mui/icons-material/AttachMoney';
import Media from 'react-media';
import css from './dashboardMenu.module.css';
import { Link } from 'react-router-dom';

export const DashboardMenu = ({ activeTab, onTabChange }) => {
  return (
    <div className={css.MenuContainer}>
      <ul className={css.ButtonsList}>
        <li>
          <Link
            to="/home"
            data-label="Home"
            // onClick={() => onTabChange('home')}
            className={activeTab === 'home' ? 'active' : ''}
          >
            <HomeIcon className={css.Icon} />
          </Link>
        </li>
        <li>
          <Link
            to="/diagram"
            data-label="Statistics"
            // onClick={() => onTabChange('statistics')}
            className={activeTab === 'statistics' ? 'active' : ''}
          >
            <StatisticsIcon
              // style={{ fill: 'white', fontSize: '40px' }}
              className={css.Icon}
            />
          </Link>
        </li>
        <Media
          query="(max-width: 767px)"
          render={() => (
            <li>
              <Link
                to="currencies"
                // onClick={() => onTabChange('currencies')}
                className={activeTab === 'currencies' ? 'active' : ''}
              >
                <CurrencyIcon className={css.Icon} />
              </Link>
            </li>
          )}
        />
      </ul>
    </div>
  );
};

// powiedzieć, że mnie nie będzie wieczorem
