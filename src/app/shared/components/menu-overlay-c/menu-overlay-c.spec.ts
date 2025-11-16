import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOverlayC } from './menu-overlay-c';

describe('MenuOverlayC', () => {
  let component: MenuOverlayC;
  let fixture: ComponentFixture<MenuOverlayC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuOverlayC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuOverlayC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
