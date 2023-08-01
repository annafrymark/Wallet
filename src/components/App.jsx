
// import useAuth from "hooks/useAuth";
import React, { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/authOperations';
import { RestrictedRoute } from './Routes/RestrictedRoute';
import { PrivateRoute } from './Routes/PrivateRoute';
import { Suspense } from 'react';
import { Loader } from './Loader/Loader';
import { DashboardPage } from '../pages/DashboardPage/DashboardPage';
import { CurrencyTable } from './Currencies/Currencies';
// import { Balance } from './Balance/Balance';
import { Diagram } from './DashBoard/Statistics/Diagram';
import Header from './shared/Header';
import Modal from './ModallAddTransaction/ModalAddTransaction';
import { useAuth } from "hooks/useAuth";

const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div>
      <Suspense fallback={<Loader />}>
        {/* <Modal /> */}
        <Routes>
          <Route
            path="/"
            element={
              <RestrictedRoute redirectTo="/home" component={<LoginPage />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/home"
            element={
              <PrivateRoute component={<DashboardPage />}>
                <Route path="diagram" element={<Diagram />} />
                <Route path="currencies" element={<CurrencyTable />} />
              </PrivateRoute>
            }
          />

          {/* <Route path="/" element={<Header />} /> */}
          
        </Routes>
      </Suspense>
    </div>
  );
};
