import React, { useContext, useReducer } from 'react';

export const AppContext = React.createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const [state, setState] = useReducer(
    (currentState, newState) => ({ ...currentState, ...newState }),
    {
      error: null,
      isAuthenticated: false,
      currentTable: null,
      isLoading: false,
      data: null,
      credentials: { user: '', password: '' },
    }
  );

  function setCredentials(newCreds) {
    setState({ credentials: { ...state.credentials, ...newCreds } });
  }

  return (
    <AppContext.Provider value={{ state, setState, setCredentials }}>
      {children}
    </AppContext.Provider>
  );
}
