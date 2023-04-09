import { GenericTable } from './GenericTable';
import { useAppContext } from '../context';
import { getCustomers, getEmployees, getOrders } from '../requests';
import { TABLES } from '../constants';

export function DataScreen() {
  const { state, setState } = useAppContext();

  const { isLoading, error, data, credentials, currentTable } = state;

  async function getData(table) {
    try {
      setState({ isLoading: true, error: null, currentTable: table });
      let request;
      switch (table) {
        case TABLES.CUSTOMERS:
          request = getCustomers;
          break;
        case TABLES.EMPLOYEES:
          request = getEmployees;
          break;
        case TABLES.ORDERS:
          request = getOrders;
          break;
        default:
          break;
      }
      const data = await request(credentials);
      setState({ data, isLoading: false });
    } catch (e) {
      console.log(e);
      setState({
        data: null,
        isLoading: false,
        error: e.response.data.message,
      });
    }
  }

  return (
    <div className="card">
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <>
          <button onClick={() => getData(TABLES.CUSTOMERS)}>customers</button>
          <button onClick={() => getData(TABLES.EMPLOYEES)}>employees</button>
          <button onClick={() => getData(TABLES.ORDERS)}>orders</button>
        </>
      )}
      {error && <p>{error}</p>}
      {data && !isLoading && !error && (
        <GenericTable data={data} currentTable={currentTable} />
      )}
    </div>
  );
}
