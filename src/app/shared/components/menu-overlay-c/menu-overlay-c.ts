import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import menuItemsJson from '../../../data/menu-items-d.json'
import { ItemsNav } from './items-nav-interface';




@Component({
  selector: 'app-menu-overlay-c',
  imports: [],
  templateUrl: './menu-overlay-c.html',
  styleUrl: './menu-overlay-c.css',
})
export class MenuOverlayC {

  router = inject(Router);


  isOpen = signal(false);
  isClosing = signal(false);

  showMenu = signal(false);

  circleX = signal(0);
  circleY = signal(0);

  menuItems = signal<ItemsNav[]>(menuItemsJson as ItemsNav[]);



  goTo(page: 'home' | 'contact', sectionId?: string) {
    this.close();

    const route = page === 'home' ? '/' : '/contact';
    const fragment = sectionId ?? undefined;

    setTimeout(() => {
      this.router.navigate([route], { fragment });
    }, 400);
  }


  open(x: number, y: number) {
    this.circleX.set(x);
    this.circleY.set(y);
    this.isOpen.set(true);

    setTimeout(() => this.showMenu.set(true), 400);
  }

  close() {
    if (!this.isOpen()) return;

    this.showMenu.set(false);

    this.isClosing.set(true);

    setTimeout(() => {
      this.isClosing.set(false);
      this.isOpen.set(false);
    }, 400);

  }
}
