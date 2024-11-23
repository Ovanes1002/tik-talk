import { Routes } from '@angular/router';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { LayoutComponent } from './common-ui/layout/layout.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { canActivateAuth } from './auth/access.guard';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: SearchPageComponent },
<<<<<<< HEAD
      { path: 'profile/:id', component: ProfilePageComponent },
=======
      { path: 'profile', component: ProfilePageComponent },
>>>>>>> 5a72e20ec046e84dfcee654900344be1b5643110
    ],
    canActivate: [canActivateAuth],
  },

  { path: 'login', component: LoginPageComponent },
];
