import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Navbar from './shared/Navbar/Navbar';
import AppRouter, { routes } from './core/routing/app.routing';
import store from './core/store/app.store';
import { lightTheme as theme } from './core/theme/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
      primaryVariant: string,
      secondary: string,
      secondaryVariant: string,
      background: string,
      surface: string,
      error: string,
      onPrimary: string,
      onSecondary: string,
      onBackground: string,
      onSurface: string,
      onError: string,
    };
  }
}

function App() {
  const navbarRoutes = routes
    .filter((r) => r.showOnNavbar)
    .sort((a, b) => a.order - b.order)
    .map((r) => ({ path: r.path, title: r.title, exact: r.exact }));

  return (
    <ThemeProvider theme={theme}>
      <StoreProvider store={store}>
        <AppRouter>
          <Navbar routes={navbarRoutes} />
        </AppRouter>
      </StoreProvider>
    </ThemeProvider>
  );
}

export default App;
