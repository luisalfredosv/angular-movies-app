import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'details/:movieId',
    loadComponent: () =>
      import('./pages/details/details.component').then(
        (m) => m.DetailsComponent
      ),
  },
  {
    path: 'see-more/:sectionName',
    loadComponent: () =>
      import('./pages/see-more/see-more.component').then(
        (m) => m.SeeMoreComponent
      ),
  },
];
