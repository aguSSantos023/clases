import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactP } from './contact-p';

describe('ContactP', () => {
  let component: ContactP;
  let fixture: ComponentFixture<ContactP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
