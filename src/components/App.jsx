import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

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
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<MyBooks />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
