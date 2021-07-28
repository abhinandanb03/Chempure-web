import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwasteComponent } from './swaste.component';

describe('SwasteComponent', () => {
  let component: SwasteComponent;
  let fixture: ComponentFixture<SwasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwasteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
