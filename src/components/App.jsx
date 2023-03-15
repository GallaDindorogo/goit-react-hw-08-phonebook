import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const MyBooks = lazy(() => import('./MyBooks/MyBooks'));

const Layout = lazy(() => import('./Layout/Layout'));
const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('./Pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./Pages/LoginPage/LoginPage'));

const Loader = lazy(() => import('schare/Loader/Loader'));

function App() {
  return (
    <Suspense>
      <Routes fallback={<Loader />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<MyBooks />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
