import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForWhomCardC } from './for-whom-card-c';

describe('ForWhomCardC', () => {
  let component: ForWhomCardC;
  let fixture: ComponentFixture<ForWhomCardC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForWhomCardC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForWhomCardC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
