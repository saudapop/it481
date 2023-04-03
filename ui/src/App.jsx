import { useState } from 'react';
import { getCustomers } from './requests';
import './App.css';
import { CustomersTable } from './CustomersTable';

function App() {
  const [data, setData] = useState();

  async function getData() {
    const result = await getCustomers();
    setData(result);
  }
  return (
    <div className="App">
      <h1>IT481 Unit 2 Assignment Application</h1>
      <p>Saud Ahmed</p>
      <div className="card">
        <button onClick={getData}>get customer data</button>
        {data && <CustomersTable data={data} />}
      </div>
    </div>
  );
}

export default App;
