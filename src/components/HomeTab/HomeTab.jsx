import { Balance } from '../Balance/Balance';
import { CurrencyTable } from '../Currencies/Currencies';
import { DashboardMenu } from '..//DashboardMenu/DashboardMenu';

import css from './homeTab.module.css';

export const HomeTab = () => {
  return (
    <div className={css.HomeTab}>
      <div className={css.Container}>
        <div className={css.LeftSide}>
          <DashboardMenu />
          <Balance />
        </div>
        <div className={css.CurrencyContainer}>
          <CurrencyTable />
        </div>
      </div>
    </div>
  );
};
