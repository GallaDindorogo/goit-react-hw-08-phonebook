import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    text: 'Home page',
    link: '/',
    private: false,
  },
  {
    id: nanoid(),
    text: 'MyContacts page',
    link: '/contacts',
    private: true,
  },
  {
    id: nanoid(),
    text: 'Authorization page',
    link: '/register',
    private: false,
  },
  {
    id: nanoid(),
    text: 'Login page',
    link: '/login',
    private: false,
  },
];
