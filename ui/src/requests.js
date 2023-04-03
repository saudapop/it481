import axios from 'axios';

const API_URL = 'http://localhost:3005';

export async function getCustomers() {
  const { data } = await axios.get(`${API_URL}/customers`);
  return data;
}
