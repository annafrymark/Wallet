// import useAuth from "hooks/useAuth";
import React, { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/authOperations';
import { RestrictedRoute } from './Routes/RestrictedRoute';
import { Suspense } from 'react';
import { Loader } from './Loader/Loader';
import { DashboardPage } from '../pages/DashboardPage/DashboardPage';
import { CurrencyTable } from './Currencies/Currencies';
import { Balance } from './Balance/Balance';

const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
// const LoginForm = lazy(() => import('../components/LoginForm/LoginForm'));

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
          {/* <Route path="/login" element={<LoginForm />} /> */}
          {/* <Route path="/" element={<Header />} /> */}
          <Route path="/home" element={<DashboardPage />}>
            <Route path="diagram" element={<Balance />} />
            <Route path="currencies" element={<CurrencyTable />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
