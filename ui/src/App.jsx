import { useAppContext } from './context';

import { AuthScreen } from './components/AuthScreen';
import { DataScreen } from './components/DataScreen';

import './App.css';
function App() {
  const { state, setState } = useAppContext();

  const { isAuthenticated, credentials, role } = state;

  function logOut() {
    setState({
      data: null,
      isAuthenticated: false,
      credentials: { user: '', password: '' },
      role: null,
    });
  }

  return (
    <div className="App">
      {!isAuthenticated && (
        <>
          <h1>IT481 Application</h1>
          <p>Saud Ahmed</p>
        </>
      )}
      {isAuthenticated && (
        <div>
          <p>
            Logged in as user <b>{credentials.user}</b>
            with role <b>{role}</b>
          </p>
          <button onClick={logOut}>log out</button>
        </div>
      )}
      {!isAuthenticated && <AuthScreen />}
      {isAuthenticated && <DataScreen />}
    </div>
  );
}

export default App;
