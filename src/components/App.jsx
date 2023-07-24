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

const RegistrationPage = lazy(() =>
  import('../pages/Registration/RegistrationPage')
);

export const App = () => {
  const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path="/register"
        element={
          <Suspense fallback={<div> Lodaing...</div>}>
            <RestrictedRoute redirectTo="/" component={<RegistrationPage />} />
          </Suspense>
        }
      ></Route>
      <Route
        path="/home"
        element={
          <Suspense fallback={<div> Lodaing...</div>}>
            <RestrictedRoute redirectTo="/" component={<CurrencyTable />} />
          </Suspense>
        }
      ></Route>
    </Routes>
  );
};
