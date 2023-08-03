import css from './balance.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getBalance } from '../../redux/transactions/selectors';
export const Balance = () => {
  const balance = useSelector(getBalance);
  return (
    <div className={css.BalanceContainer}>
      <p className={css.BalanceTitle}>YOUR BALANCE</p>
      <p className={css.BalanceValue}>$ {balance.toFixed(2)}</p>
    </div>
  );
};
