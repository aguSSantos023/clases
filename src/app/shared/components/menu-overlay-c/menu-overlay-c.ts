import { Component, computed, DOCUMENT, inject, input, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import menuItemsJson from '../../../data/menu-items-d.json'
import { ItemsNav } from './items-nav-interface';
import { Colors } from '../../interface/colors';

interface Bubble {
  colorVar: string;
  shadowVar: string;
  size: number;
  left: number;
  duration: number;
  delay: number;
}


@Component({
  selector: 'app-menu-overlay-c',
  imports: [],
  templateUrl: './menu-overlay-c.html',
  styleUrl: './menu-overlay-c.css',
})
export class MenuOverlayC implements OnInit{

  router = inject(Router);
  private _document = inject(DOCUMENT);

  colorPress = input<Colors>('blue')

  isOpen = signal(false);
  isClosing = signal(false);

  showMenu = signal(false);

  circleX = signal(0);
  circleY = signal(0);

  menuItems = signal<ItemsNav[]>(menuItemsJson as ItemsNav[]);

  bubbles = signal<Bubble[]>([]);

  ngOnInit() {
    this.generateBubbles();
  }


  generateBubbles() {
    const width = window.innerWidth;
    let multiplier = 1;
    let forbiddenCenterPercentage = 60; // Móvil: Hueco grande

    if (width >= 1920) {
      multiplier = 6;
      forbiddenCenterPercentage = 15;
    } else if (width >= 1024) {
      multiplier = 3;
      forbiddenCenterPercentage = 20;
    }

    const baseColors = [
      { main: '--color-blue-one-c', shadow: '--color-blue-two-c' },
      { main: '--color-green-one-c', shadow: '--color-green-two-c' },
      { main: '--color-yellow-one-c', shadow: '--color-yellow-two-c' },
      { main: '--color-pink-one-c', shadow: '--color-pink-two-c' },
      { main: '--color-violet-one-c', shadow: '--color-violet-two-c' },
      { main: '--color-red-one-c', shadow: '--color-red-two-c' },
      { main: '--color-turquoise-one-c', shadow: '--color-turquoise-two-c' },
      { main: '--color-orange-one-c', shadow: '--color-orange-two-c' },
    ];

    const activeColors = Array(multiplier).fill(baseColors).flat();

    const halfGap = forbiddenCenterPercentage / 2;
    const limitLeft = 50 - halfGap;
    const limitRight = 50 + halfGap;

    const newBubbles: Bubble[] = activeColors.map((c) => {
      const isLeft = Math.random() > 0.5;
      const positionLeft = isLeft
        ? Math.floor(Math.random() * limitLeft)
        : Math.floor(Math.random() * (100 - limitRight)) + limitRight;

      const duration = Math.floor(Math.random() * 10) + 15;

      const delay = -(Math.random() * duration);

      return {
        colorVar: c.main,
        shadowVar: c.shadow,
        size: Math.floor(Math.random() * 30) + 30,
        left: positionLeft,
        duration: duration,
        delay: delay,
      };
    });

    this.bubbles.set(newBubbles);
  }

  open(x: number, y: number) {
    this.circleX.set(x);
    this.circleY.set(y);
    this.isOpen.set(true);

    this._document.body.style.overflow = 'hidden';

    setTimeout(() => this.showMenu.set(true), 400);
  }

  close() {
    if (!this.isOpen()) return;
    this.showMenu.set(false);
    this.isClosing.set(true);

    setTimeout(() => {
      this.isClosing.set(false);
      this.isOpen.set(false);

      this._document.body.style.overflow = '';
    }, 400);
  }

  goTo(page: 'home' | 'contact', sectionId?: string) {
    this.close();

    const route = page === 'home' ? '/' : '/contact';
    const fragment = sectionId ?? undefined;

    setTimeout(() => {
      this.router.navigate([route], { fragment });
    }, 400);
  }


  glowColors = computed(() => {
    const color = this.colorPress();
    return {
      main: `var(--color-${color}-one-c)`,
      secondary: `var(--color-${color}-two-c)`
    };
  });

}
