import axios from 'axios';

const API_URL = 'http://localhost:3005';

export async function authenticateUser(credentials) {
  const { data } = await axios.post(`${API_URL}/login`, credentials);
  return data;
}
export async function getCustomers(credentials) {
  const { data } = await axios.post(`${API_URL}/customers`, credentials);
  return data;
}
export async function getEmployees(credentials) {
  const { data } = await axios.post(`${API_URL}/employees`, credentials);
  return data;
}
export async function getOrders(credentials) {
  const { data } = await axios.post(`${API_URL}/orders`, credentials);
  return data;
}
