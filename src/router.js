import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import App from './components/App/App';
import Movies from './components/Movies/Movies';
import SavedMovies from './components/SavedMovies/SavedMovies';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotFound from './components/404/404';
import {
  ROUTE_HOME,
  ROUTE_MOVIES,
  ROUTE_SAVED_MOVIES,
  ROUTE_PROFILE,
  ROUTE_LOGIN,
  ROUTE_REGISTER,
  ROUTE_NOT_FOUND,
} from './constants';

export const router = createBrowserRouter([
  {
    path: ROUTE_HOME,
    element: <Layout />,
    children: [
      {
        path: ROUTE_HOME,
        element: <App />,
      },
      {
        path: ROUTE_MOVIES,
        element: <Movies />,
      },
      {
        path: ROUTE_SAVED_MOVIES,
        element: <SavedMovies />,
      },
      {
        path: ROUTE_PROFILE,
        element: <Profile />,
      },
    ]
  },
  {
    path: ROUTE_LOGIN,
    element: <Login />,
  },
  {
    path: ROUTE_REGISTER,
    element: <Register />,
  },
  {
    path: ROUTE_NOT_FOUND,
    element: <NotFound />,
  },
]);
