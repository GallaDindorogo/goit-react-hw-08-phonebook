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

export const signup = async userData => {
  const { data } = await instance.post('/users/signup', userData);
  setToken(data.token);
  return data;
};

export const login = async data => {
  const { data: result } = await instance.post('/users/login', data);
  instance.defaults.headers.authorization = `Bearer ${result.token}  `;
  setToken(result.token);
  return result;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('/users/current');
    console.log(data);
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logout = async () => {
  const { data } = await instance.post('users/logout');
  setToken();
  return data;
};

export default instance;
