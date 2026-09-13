import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherC } from './teacher-c';

describe('TeacherC', () => {
  let component: TeacherC;
  let fixture: ComponentFixture<TeacherC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
