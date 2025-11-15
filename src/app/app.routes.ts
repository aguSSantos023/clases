import { Routes } from '@angular/router';
import { HomeP } from './pages/home-p/home-p';
import { ContactP } from './pages/contact-p/contact-p';

export const routes: Routes = [
  {
    path: '',
    component: HomeP,
    title: 'Clases - Inicio'
  },
  {
    path: 'contact',
    component: ContactP,
    title: 'Clases - Contacto'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
