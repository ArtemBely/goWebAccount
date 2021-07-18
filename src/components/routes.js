import Enter from './Enter';
import Registration from './Registration';
import Profile from './Profile';
import { getUsers } from './fetchData';

const routes = [
  {
    path: ['/', '/enter'],
    exact: true,
    component: Enter
  },
  {
    path: ['/registration', '/signup'],
    exact: true,
    component: Registration
  },
  {
    path: ['/profile', '/profile/canceled'],
    exact: true,
    component: Profile,
    fetchInitialData: () => getUsers()
  }
]

export default routes;
