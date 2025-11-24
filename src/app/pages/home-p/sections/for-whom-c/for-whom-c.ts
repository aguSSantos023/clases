import { Component, computed, inject, input, signal } from '@angular/core';
import { ForWhomCardC } from "./for-whom-card-c/for-whom-card-c";
import { ItemForCard } from './for-whom-card-c/item-for-card-interface';
import forWhomCardsJson from '../../../../data/for-whom-cards-d.json'
import { BtnPressC } from "../../../../shared/components/btn-press-c/btn-press-c";
import { Colors } from '../../../../shared/interface/colors';
import { getColorShades } from '../../../../shared/utils/colors-map';
import { Router } from '@angular/router';


@Component({
  selector: 'app-for-whom-c',
  imports: [ForWhomCardC, BtnPressC],
  templateUrl: './for-whom-c.html',
  styleUrl: './for-whom-c.css',
})
export class ForWhomC {

  colorPress = input<Colors>('blue');
  private router = inject(Router);


  itemsForCards = signal<ItemForCard[]>(forWhomCardsJson as ItemForCard[])

  colorClass = computed(() => getColorShades(this.colorPress()))


  goToContact = () => {
    this.router.navigate(['/contact'], { fragment: 'hero' });
  }


}
