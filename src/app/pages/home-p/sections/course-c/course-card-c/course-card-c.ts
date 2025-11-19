import { Component, computed, input } from '@angular/core';
import { ItemCourseCard } from './item-course-card-interface';
import { getColorShades } from '../../../../../shared/utils/colors-map';

@Component({
  selector: 'app-course-card-c',
  imports: [],
  templateUrl: './course-card-c.html',
  styleUrl: './course-card-c.css',
})
export class CourseCardC {

  itemCourseCard = input.required<ItemCourseCard>()

  colorClass = computed(() => getColorShades(this.itemCourseCard().color))

}
