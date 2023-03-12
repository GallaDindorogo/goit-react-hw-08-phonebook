import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const signup = data => {
  const { data: result } = instance.post('/users/signup', data);
  setToken(result.token);
};

export const login = async data => {
  const { data: result } = await instance.post('/users/login', data);
  instance.defaults.headers.authorization = `Bearer ${result.token}  `;
  setToken(result.token);
  return result;
};

export default instance;
