import { Balance } from '../Balance/Balance';
import { CurrencyTable } from '../Currencies/Currencies';
import { Navigation } from '../Navigation/Navigation';

import css from './homeTab.module.css';

export const HomeTab = () => {
  return (
    <div className={css.HomeTab}>
      <div className={css.Container}>
        <div className={css.LeftSide}>
          <Navigation />
          <Balance />
        </div>
        <div className={css.CurrencyContainer}>
          <CurrencyTable />
        </div>
      </div>
    </div>
  );
};
