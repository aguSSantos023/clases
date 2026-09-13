import { Routes } from '@angular/router';
import { HomeP } from './pages/home-p/home-p';
import { ContactP } from './pages/contact-p/contact-p';

export const routes: Routes = [
  {
    path: '',
    component: HomeP,
    title: 'Clases Particulares de Informática - Inicio'
  },
  {
    path: 'contact',
    component: ContactP,
    title: 'Clases Particulares de Informática - Contacto'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
