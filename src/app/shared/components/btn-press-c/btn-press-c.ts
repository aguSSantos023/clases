import { Component, computed, input, signal } from '@angular/core';
import { Colors } from '../../interface/colors';
import { IconName } from './icon-btn-interface';

interface ColorMap {
  top: string;
  bottom: string;
}

const SHADES: Record<Colors, ColorMap> = {
  red: { top: 'bg-red-one-c', bottom: 'bg-red-two-c' },
  blue: { top: 'bg-blue-one-c', bottom: 'bg-blue-two-c' },
  green: { top: 'bg-green-one-c', bottom: 'bg-green-two-c' },
  pink: { top: 'bg-pink-one-c', bottom: 'bg-pink-two-c' },
  violet: { top: 'bg-violet-one-c', bottom: 'bg-violet-two-c' },
  yellow: { top: 'bg-yellow-one-c', bottom: 'bg-yellow-two-c' },
  turquoise: { top: 'bg-turquoise-one-c', bottom: 'bg-turquoise-two-c' },
  orange: { top: 'bg-orange-one-c', bottom: 'bg-orange-two-c' },
  grey: { top: 'bg-grey-one-c', bottom: 'bg-grey-two-c' },
};

@Component({
  selector: 'app-btn-press-c',
  templateUrl: './btn-press-c.html',
  styleUrl: './btn-press-c.css',
})
export class BtnPressC {

  // ---- Inputs ----
  typeValue = input<'icon' | 'text'>('text');
  iconName = input<IconName>();
  text = input<string>('');
  paddingText = input<number[]>([16, 8])
  color = input<Colors>('blue');
  sizeValueIcon = input<1 | 2 | 3 | 4 | 5>(4);
  sizeValueSVG = input<1 | 2 | 3 | 4 | 5>(3);

  canPress = input<boolean>(true);
  onPressFn = input<() => void>();


  // ---- Signals ----
  isPressed = signal<boolean>(false);

  // ---- Constantes internas ----
  private sizeMap = {
    1: 24,
    2: 28,
    3: 32,
    4: 36,
    5: 42,
  };

  // ---- Computed ----
  svgSize = computed(() => {
    return this.sizeMap[this.sizeValueSVG()] ?? 32;
  });

  colorClass = computed(() => {
    const colorBtn = this.typeValue() === 'text' ? this.color() : this.setIconColor();

    return SHADES[colorBtn];
  });

  dimensions = computed(() => {
    if (this.typeValue() === 'text') return null;

    const s = this.sizeMap[this.sizeValueIcon()] ?? 32;

    return {
      outerW: s + 12,
      outerH: s + 14,
      topW: s + 12,
      topH: s + 12,
      bottomW: s + 12,
      bottomH: s + 12,
    };
  });

  // ---- Métodos ----
  onPress(): void {
    if (!this.canPress()) return;

    this.isPressed.set(true);
    setTimeout(() => this.isPressed.set(false), 150);
    setTimeout(() => this.onPressAction(), 250);
  }

  setIconColor(): Colors {
    switch (this.iconName()) {
      case 'education': return 'blue';
      case 'flash': return 'yellow';
      case 'cpu': return 'green';
      case 'game': return 'pink';
      case 'rocket': return 'violet';
      case 'mobile': return 'red';
      case 'arrow': return 'turquoise';
      case 'web': return 'orange';
      case 'menu': return 'grey';
      default: return 'blue';
    }
  }

  onPressAction(): void {

    const fn = this.onPressFn()
    if(fn) fn()

  }
}
