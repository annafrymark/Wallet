// import useAuth from "hooks/useAuth";
import React, { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/authOperations';
import { RestrictedRoute } from './Routes/RestrictedRoute';
import { Suspense } from 'react';
import { fetchTransactions } from './connectionTest/connectionTest';

const RegistrationPage = lazy(() =>
  import('../pages/Registration/RegistrationPage')
);

export const App = () => {
  const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  //check connection to backend
  useEffect(() => {
    fetchTransactions();
  }, []);

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
    </Routes>

    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101',
    //   }}
    // >
    //   Project Wallet Group 6
    // </div>
  );
};
