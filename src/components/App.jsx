// import useAuth from "hooks/useAuth";
import React, { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/authOperations';
import { RestrictedRoute } from './Routes/RestrictedRoute';
import { Suspense } from 'react';
import { TransactionsList } from './TransactionsTable/TransactionsTable';
import { Balance } from './Balance/Balance';
import { CurrencyTable } from './Currencies/Currencies';
import { Loader } from './Loader/Loader';

const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
import { DashboardPage } from 'pages/DashboardPage/DashboardPage';

const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);


// import useAuth from "hooks/useAuth";

export const App = () => {
  const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/" element={<Header />} /> */}
          <Route
            path="/home"
            element={
              <Suspense fallback={<div> Lodaing...</div>}>
                <RestrictedRoute redirectTo="/" component={<CurrencyTable />} />
              </Suspense>
            }
          ></Route>
        </Routes>
      </Suspense>
    </div>
  );
};
