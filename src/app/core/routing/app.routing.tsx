import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { About, Home, Users } from 'Pages';

interface RouteConfig {
  path: string;
  component: React.ReactNode;
  exact: boolean;
  title: string;
  showOnNavbar: boolean;
  order: number;
}

export const routes: RouteConfig[] = [
  {
    path: '/about',
    component: <About />,
    exact: false,
    title: 'About',
    showOnNavbar: true,
    order: 3,
  },
  {
    path: '/users',
    component: <Users />,
    exact: false,
    title: 'Users',
    showOnNavbar: true,
    order: 2,
  },
  {
    path: '/',
    component: <Home />,
    exact: true,
    title: 'Home',
    showOnNavbar: true,
    order: 1,
  },
];

const AppRouter: React.FC = ({ children }) => (
  <Router>
    {children}
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} exact={route.exact} path={route.path}>
          {route.component}
        </Route>
      ))}
    </Switch>
  </Router>
);

export default AppRouter;
