import React, { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/authOperations';
import { RestrictedRoute } from './Routes/RestrictedRoute';
import { PrivateRoute } from './Routes/PrivateRoute';
import { Suspense } from 'react';
import { Loader } from './Loader/Loader';

import { CurrencyTable } from './Currencies/Currencies';
// import { Balance } from './Balance/Balance';
import { Diagram } from './DashBoard/Statistics/Diagram';

import Modal from './ModallAddTransaction/ModalAddTransaction';
import { useAuth } from 'hooks/useAuth';

const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const Header = lazy(() => import('./shared/Header'));
const DashboardPage = lazy(() =>
  import('../pages/DashboardPage/DashboardPage')
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
            element={<RestrictedRoute component={<LoginPage />} />}
          />
          <Route
            path="/register"
            element={<RegistrationPage />} 
          />
          <Route
            path="/home"
            element={
              <PrivateRoute
                // redirectTo="/login"
                component={<DashboardPage />}
              >
                <Route path="diagram" element={<Diagram />} />
                <Route path="currencies" element={<CurrencyTable />} />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
};
