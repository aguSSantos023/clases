import { Component, computed, effect, HostListener, output, signal } from '@angular/core';
import { BtnPressC } from '../../../../../shared/components/btn-press-c/btn-press-c';
import { IconName } from '../../../../../shared/components/btn-press-c/icon-btn-interface';
import { Colors } from '../../../../../shared/interface/colors';

@Component({
  selector: 'app-ring-c',
  imports: [BtnPressC],
  templateUrl: './ring-c.html',
  styleUrl: './ring-c.css',
})
export class RingC {

  selectedColor = output<Colors>();

  screenWidth = signal<number>(typeof window !== 'undefined' ? window.innerWidth : 400);

  icons = signal<IconName[]>([
    'education', 'flash', 'cpu', 'game',
    'rocket', 'mobile', 'arrow', 'web'
  ]);

  @HostListener('window:resize')
  onResize() {
    this.screenWidth.set(window.innerWidth);
  }

  isLarge = computed(() => this.screenWidth() >= 1024);

  orbitRadius = computed(() => this.isLarge() ? 160 : 90);

  containerSize = computed(() => this.isLarge() ? 384 : 208);

  iconSizeVal = computed<4 | 7>(() => this.isLarge() ? 7 : 4);
  svgSizeVal = computed<3 | 6>(() => this.isLarge() ? 6 : 3);

  centerOffset = computed(() => this.isLarge() ? 42 : 24);


  getIconStyle(index: number): string {
    const totalItems = this.icons().length;
    const angle = (360 / totalItems) * index;
    const radians = angle * (Math.PI / 180);

    const x = this.orbitRadius() * Math.cos(radians);
    const y = this.orbitRadius() * Math.sin(radians);

    const center = this.containerSize() / 2;

    const finalX = center + x - this.centerOffset();
    const finalY = center + y - this.centerOffset();

    return `left: ${finalX}px; top: ${finalY}px;`;
  }

  getColorForIcon(icon: IconName): Colors {
    switch (icon) {
      case 'education': return 'blue';
      case 'flash': return 'yellow';
      case 'cpu': return 'green';
      case 'game': return 'pink';
      case 'rocket': return 'violet';
      case 'mobile': return 'red';
      case 'arrow': return 'turquoise';
      case 'web': return 'orange';
      default: return 'blue';
    }
  }

  handlePress(name: IconName) {
    const color = this.getColorForIcon(name);
    this.selectedColor.emit(color);
  }
}
