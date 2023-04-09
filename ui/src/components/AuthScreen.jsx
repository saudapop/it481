import { authenticateUser } from '../requests';
import { useAppContext } from '../context';

export function AuthScreen() {
  const { state, setState, setCredentials } = useAppContext();

  const { credentials, error } = state;

  async function authenticate() {
    try {
      setState({ error: null, isLoading: true });
      const data = await authenticateUser(credentials);

      setState({ isAuthenticated: true, isLoading: false, role: data.role });
    } catch ({ response }) {
      setState({
        error: response.data.message,
        isLoading: false,
        role: null,
      });
    }
  }
  return (
    <div className="login">
      {error && <p>{error}</p>}
      <div className="inputs">
        <div className="input">
          <label>user</label>
          <input
            value={credentials.user}
            onChange={(e) => setCredentials({ user: e.target.value })}
          ></input>
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            value={credentials.password}
            onChange={(e) => setCredentials({ password: e.target.value })}
          ></input>
        </div>
      </div>
      <button onClick={authenticate}> login</button>
    </div>
  );
}
