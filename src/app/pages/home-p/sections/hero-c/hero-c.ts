import { Component, inject, output, signal } from '@angular/core';
import { BtnPressC } from "../../../../shared/components/btn-press-c/btn-press-c";
import { RingC } from "./ring-c/ring-c";
import { Colors } from '../../../../shared/interface/colors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-c',
  imports: [BtnPressC, RingC],
  templateUrl: './hero-c.html',
  styleUrl: './hero-c.css',
})
export class HeroC {

  sendColorPress = output<Colors>();
  colorPress = signal<Colors>('blue');
  private router = inject(Router);

  onColorChange(color: Colors){

    this.colorPress.set(color)
    this.sendColorPress.emit(color)
  }

  goToContact = () => {
    this.router.navigate(['/contact'], { fragment: 'hero' });
  }

}
