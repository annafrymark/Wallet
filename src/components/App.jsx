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
// import { Balance } from './Balance/Balance';
import { Diagram } from './DashBoard/Statistics/Diagram';
import Header from './shared/Header';
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);

// import useAuth from "hooks/useAuth";
import Modal from './ModallAddTransaction/ModalAddTransaction';
export const App = () => {
  const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <Suspense fallback={<Loader />}>
      <Modal />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          {/* <Route path="/" element={<Header />} /> */}
          <Route path="/home" element={<DashboardPage />}>
            <Route path="diagram" element={<Diagram />} />
            <Route path="currencies" element={<CurrencyTable />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
