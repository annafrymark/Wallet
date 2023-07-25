import css from './balance.module.css';
export const Balance = ({ balance }) => {
  return (
    <div className={css.BalanceContainer}>
      <p className={css.BalanceTitle}>YOUR BALANCE</p>
      <p className={css.BalanceValue}>$ 2000.00 {balance}</p>
    </div>
  );
};
