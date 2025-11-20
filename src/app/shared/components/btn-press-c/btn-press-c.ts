import { Component, computed, input, signal } from '@angular/core';
import { Colors } from '../../interface/colors';
import { IconName } from './icon-btn-interface';
import { getColorShades } from '../../utils/colors-map';

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
  href = input<string | null>(null);
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

    return getColorShades(colorBtn);
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
