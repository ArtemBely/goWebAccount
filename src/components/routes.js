import Enter from './Enter';
import Registration from './Registration';
import Profile from './Profile';
import Settings from './Settings';

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
    path: '/profile',
    exact: true,
    component: Profile
  },
  {
    path: '/profile/settings',
    exact: true,
    component: Settings
  }
]

export default routes;
