import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardC } from './course-card-c';

describe('CourseCardC', () => {
  let component: CourseCardC;
  let fixture: ComponentFixture<CourseCardC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCardC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
