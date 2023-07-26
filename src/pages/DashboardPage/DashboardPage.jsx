// import Media from 'react-media';
import { HomeTab } from '../../components/HomeTab/HomeTab';
import css from './dashboardPage.module.css';
import { TransactionsList } from 'components/TransactionsTable/TransactionsTable';

export const DashboardPage = () => {
  return (
    <div className={css.DashboardPageBcg}>
      <div className={css.test}>
        <div className={css.DashboardPage}>
          <div className={css.HomeTabContainer}>
            <HomeTab />
          </div>
          <div className={css.DisplayedElemContainer}>
            <TransactionsList />
          </div>
        </div>
      </div>
    </div>
  );
};
