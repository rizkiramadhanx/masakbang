import React, { createContext, useReducer, Dispatch, useEffect } from 'react';
import AppReducer from './AppReducer';

const initialValue: TinitialValue = {
  theme: true,
  username: 'oji',
  isLogin: false,
};

export const GlobalContext = createContext<{
  state: TinitialValue;
  dispatch: Dispatch<TactionContext>;
}>({
  state: initialValue,
  dispatch: () => null,
});

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(AppReducer, initialValue);

  useEffect(() => {
    if (localStorage.getItem('key')) {
      dispatch({
        type: 'INIT_STORE',
        payload: JSON.parse(localStorage.getItem('key') as unknown as string),
      });
    }
  }, []);

  useEffect(() => {
    if (state !== initialValue) {
      localStorage.setItem('key', JSON.stringify(state));
    }
  }, [state]);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
