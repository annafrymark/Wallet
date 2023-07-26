import { HomeTab } from '../../components/HomeTab/HomeTab';
import css from './dashboardPage.module.css';
import { TransactionsList } from 'components/TransactionsTable/TransactionsTable';
import { getTransactions } from '../../redux/transactions/selectors';
import { fetchTransactions } from '../../redux/transactions/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
export const DashboardPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);
  const transactions = useSelector(getTransactions);

  return (
    <div className={css.DashboardPageBcg}>
      <div className={css.test}>
        <div className={css.DashboardPage}>
          <div className={css.HomeTabContainer}>
            <HomeTab />
          </div>
          <div className={css.DisplayedElemContainer}>
            <TransactionsList transactions={transactions} />
          </div>
        </div>
      </div>
    </div>
  );
};
