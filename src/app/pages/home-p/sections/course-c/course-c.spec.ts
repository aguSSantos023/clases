import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseC } from './course-c';

describe('CourseC', () => {
  let component: CourseC;
  let fixture: ComponentFixture<CourseC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
