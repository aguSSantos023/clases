import { Component, output, signal } from '@angular/core';
import { BtnPressC } from "../../../../shared/components/btn-press-c/btn-press-c";
import { RingC } from "./ring-c/ring-c";
import { Colors } from '../../../../shared/interface/colors';

@Component({
  selector: 'app-hero-c',
  imports: [BtnPressC, RingC],
  templateUrl: './hero-c.html',
  styleUrl: './hero-c.css',
})
export class HeroC {

  sendColorPress = output<Colors>();
  colorPress = signal<Colors>('blue');


  onColorChange(color: Colors){

    this.colorPress.set(color)
    this.sendColorPress.emit(color)
  }


}
