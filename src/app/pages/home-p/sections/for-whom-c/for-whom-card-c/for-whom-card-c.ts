import { Component, computed, input, signal } from '@angular/core';
import { ItemForCard } from './item-for-card-interface';
import { Colors } from '../../../../../shared/interface/colors';
import { getColorShades } from '../../../../../shared/utils/colors-map';

@Component({
  selector: 'app-for-whom-card-c',
  imports: [],
  templateUrl: './for-whom-card-c.html',
  styleUrl: './for-whom-card-c.css',
})
export class ForWhomCardC {

  itemForCard = input.required<ItemForCard>()


  colorClass = computed(() => getColorShades(this.itemForCard().color))


}
