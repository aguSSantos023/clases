import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForWhomC } from './for-whom-c';

describe('ForWhomC', () => {
  let component: ForWhomC;
  let fixture: ComponentFixture<ForWhomC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForWhomC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForWhomC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
