import { Routes } from '@angular/router';
import { User } from './components/user/user';
import { Example } from './components/example/example';

export const routes: Routes = [
  {
    path: 'example',
    component: Example
  },
  {
    path: 'user',
    component: User
  },
];
