import { Component, output, signal } from '@angular/core';
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

  selectedColor = output<Colors>()

  icons = signal<IconName[]>([
    'education',
    'flash',
    'cpu',
    'game',
    'rocket',
    'mobile',
    'arrow',
    'web'
  ])

  private readonly ORBIT_RADIUS = 90;
  private readonly ICON_SIZE = 45;
  private readonly CENTER_OFFSET = this.ICON_SIZE / 2;


  getIconStyle(index: number): string {
    const totalItems = this.icons().length;
    const angle = (360 / totalItems) * index;
    const radians = angle * (Math.PI / 180);

    const x = this.ORBIT_RADIUS * Math.cos(radians);
    const y = this.ORBIT_RADIUS * Math.sin(radians);

    const center = 208 / 2;

    const finalX = center + x - this.CENTER_OFFSET;
    const finalY = center + y - this.CENTER_OFFSET;

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
