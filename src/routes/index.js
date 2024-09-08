import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../layout/AppLayout';
import {
   LandingPage,
   NotesPage,
   ProfilePage,
   SignupPage,
   LoginPage,
   NotFoundPage,
} from '../pages/index';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';
import ForgotPassword from '../pages/auth/ForgotPassword';
import TestPage from '../pages/TestPage';
import ResetPassword from '../pages/auth/ResetPassword';

// isPrivate ===>  to make routes private or protected
// isHidden ===> to make routes hidden

export const ALL_ROUTES = [
   {
      id: 1,
      path: '/',
      title: 'Home',
      element: <LandingPage />,
      isPrivate: true,
   },
   {
      id: 2,
      path: '/signup',
      title: 'Signup',
      element: <SignupPage />,
      ishidden: false,
   },
   {
      id: 3,
      path: '/login',
      title: 'Login',
      element: <LoginPage />,
   },
   {
      id: 4,
      path: '/notes',
      title: 'notes',
      element: <NotesPage />,
      isPrivate: true,
   },
   {
      id: 5,
      path: '/profile',
      title: 'profile',
      element: <ProfilePage />,
      isPrivate: true,
   },
   {
      id: 6,
      path: '/forgot-password',
      element: <ForgotPassword />,
   },
   {
      id: 6,
      path: '/test-page',
      title: 'test',
      element: <TestPage />,
      isPrivate: true,
   },
   {
      id: 7,
      path: '/reset-password/:token',
      element: <ResetPassword />,
   },
];

const generateRoutes = (ALL_ROUTES, type = null) => {
   if (!type) return [];

   return (
      (ALL_ROUTES?.length > 0 && type === 'PUBIC'
         ? ALL_ROUTES.filter((menu) => !menu.isPrivate && !menu.isHidden)
         : ALL_ROUTES.filter((route) => route.isPrivate && !route.isHidden)
      ).map((route) => {
         return {
            ...route,
            element:
               type === 'PUBIC' ? (
                  <PublicRoutes>{route.element}</PublicRoutes>
               ) : (
                  <ProtectedRoutes>{route.element}</ProtectedRoutes>
               ),
         };
      }) || []
   );
};

export const PUBLIC_ROUTES = generateRoutes(ALL_ROUTES, 'PUBIC');
export const PRIVATE_ROUTES = generateRoutes(ALL_ROUTES, 'PRIVATE');

export const _router = createBrowserRouter([
   {
      element: <AppLayout />,
      children: [...PRIVATE_ROUTES, ...PUBLIC_ROUTES],
   },
   {
      path: '*',
      element: <NotFoundPage />,
   },
]);
