import HomeIcon from '@mui/icons-material/Home';
import StatisticsIcon from '@mui/icons-material/Insights';
import CurrencyIcon from '@mui/icons-material/AttachMoney';
import Media from 'react-media';
import css from './dashboardMenu.module.css';

export const DashboardMenu = ({ activeTab, onTabChange }) => {
  return (
    <div className={css.MenuContainer}>
      <ul className={css.ButtonsList}>
        <li>
          <button
            data-label="Home"
            onClick={() => onTabChange('home')}
            className={activeTab === 'home' ? 'active' : ''}
          >
            <HomeIcon className={css.Icon} />
          </button>
        </li>
        <li>
          <button
            data-label="Statistics"
            onClick={() => onTabChange('statistics')}
            className={activeTab === 'statistics' ? 'active' : ''}
          >
            <StatisticsIcon
              // style={{ fill: 'white', fontSize: '40px' }}
              className={css.Icon}
            />
          </button>
        </li>
        <Media
          query="(max-width: 767px)"
          render={() => (
            <li>
              <button
                onClick={() => onTabChange('currencies')}
                className={activeTab === 'currencies' ? 'active' : ''}
              >
                <CurrencyIcon className={css.Icon} />
              </button>
            </li>
          )}
        />
      </ul>
    </div>
  );
};
