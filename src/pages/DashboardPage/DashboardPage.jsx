import { HomeTab } from '../../components/HomeTab/HomeTab';
import css from './dashboardPage.module.css';
import { TransactionsList } from 'components/TransactionsTable/TransactionsTable';
import { getTransactions } from '../../redux/transactions/selectors';
import { fetchTransactions } from '../../redux/transactions/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Outlet } from 'react-router-dom';

export const DashboardPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const transactions = useSelector(getTransactions);
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className={css.DashboardPageBcg}>
      <div className={css.test}>
        <div className={css.DashboardPage}>
          <div className={css.HomeTabContainer}>
            <HomeTab />
          </div>
          <div className={css.DisplayedElemContainer}>
            {location.pathname === '/home' ? (
              <TransactionsList transactions={transactions} />
            ) : (
              <Outlet />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
