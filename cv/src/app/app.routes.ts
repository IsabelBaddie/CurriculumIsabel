import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'web',
    loadComponent: () => import('./pages/web/web.page').then(m => m.WebPage)
  },
  {
    path: 'aplicaciones',
    loadComponent: () => import('./pages/aplicaciones/aplicaciones.page').then(m => m.AplicacionesPage)
  },
  {
    path: 'multiplataforma',
    loadComponent: () => import('./pages/multiplataforma/multiplataforma.page').then(m => m.MultiplataformaPage)
  },

];

