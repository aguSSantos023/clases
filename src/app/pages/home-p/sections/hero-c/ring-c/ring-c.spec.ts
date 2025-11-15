import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RingC } from './ring-c';

describe('RingC', () => {
  let component: RingC;
  let fixture: ComponentFixture<RingC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RingC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RingC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
