import { FC, ReactNode, ReactElement, PropsWithChildren } from 'react';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit'
import type { RenderOptions } from '@testing-library/react'

import Theme from './src/Theme';
import { rootReducer, TRootState } from './src/redux/products.reducer';
import { IProductsState } from './src/redux/products/products.slice';

export const routerConfig = {
  isRouter: true,
  location: {
    path: '/'
  }
}

export const generateMockedState = (
  search = '',
  cart = {
    price: 0,
    amount: 0,
    products: [{
      id: 1,
      title: '',
      price: 0,
      count: 0
    }],
  },
  pagination = {
    currentPage: 1,
  }
): IProductsState => ({
  search,
  cart,
  pagination,
})

interface IRouterLocation {
  path: string,
}

export const withRouter = (children: ReactNode | ReactNode[], location: IRouterLocation): JSX.Element => {
 const path = location.path;

 return (
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/" element={children} />
        <Route path="/product/:id" element={children} />
      </Routes>
    </MemoryRouter>
  )
}

export const setupStore = (preloadedState?: PreloadedState<TRootState>): any => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}

interface IExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<Partial<TRootState>>,
  store?: ReturnType<typeof setupStore>,
}

const renderWithProvider = (
  ui: ReactElement,
  {
    isRouter = false,
    location = { path: '/' },
  } = {},
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: IExtendedRenderOptions = {}
): any => {

  const Wrapper: FC<{ children: PropsWithChildren<any>}> = ({ children }) => (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        {isRouter ? withRouter(children as ReactNode[], location) : children}
      </ThemeProvider>
    </Provider>
  );

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
};

export default renderWithProvider;
