import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroC } from './hero-c';

describe('HeroC', () => {
  let component: HeroC;
  let fixture: ComponentFixture<HeroC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
