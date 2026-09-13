import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BtnPressC } from './btn-press-c';


describe('IconTextBtnC', () => {
  let component: BtnPressC;
  let fixture: ComponentFixture<BtnPressC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnPressC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnPressC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
