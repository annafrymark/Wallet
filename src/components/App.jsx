// import useAuth from "hooks/useAuth";
import React, { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/authOperations';
//import { RestrictedRoute } from './Routes/RestrictedRoute';
import { Suspense } from 'react';

const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

export const App = () => {
  const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <Suspense fallback={<div> Lodaing...</div>}>
        <Routes>
          {/* <Route
        path="/register"
        element={
          <Suspense fallback={<div> Lodaing...</div>}>
            <RestrictedRoute redirectTo="/" component={<RegistrationPage />} />
          </Suspense>
        }
      ></Route>
      <Route
        path="/login"
        element={
          <Suspense fallback={<div> Lodaing...</div>}>
            <RestrictedRoute redirectTo="/" component={<LoginPage />} />
          </Suspense>
        }
      ></Route> */}
          {/* <Route path="/" element={<Header />} /> */}
          <Route path="/" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
