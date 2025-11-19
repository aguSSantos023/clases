import { Component, computed, input, signal } from '@angular/core';
import { Colors } from '../../../../shared/interface/colors';
import { getColorShades } from '../../../../shared/utils/colors-map';
import { BtnPressC } from "../../../../shared/components/btn-press-c/btn-press-c";
import { CourseCardC } from "./course-card-c/course-card-c";
import { ItemCourseCard } from './course-card-c/item-course-card-interface';

import courseCardsJson from '../../../../data/course-cards-d.json'


@Component({
  selector: 'app-course-c',
  imports: [BtnPressC, CourseCardC],
  templateUrl: './course-c.html',
  styleUrl: './course-c.css',
})
export class CourseC {


  colorPress = input<Colors>('blue');

  itemsCoursesCards = signal<ItemCourseCard[]>(courseCardsJson as ItemCourseCard[])

  colorClass = computed(() => getColorShades(this.colorPress()))

}
