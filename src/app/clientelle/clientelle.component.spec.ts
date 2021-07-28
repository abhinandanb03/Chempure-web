import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientelleComponent } from './clientelle.component';

describe('ClientelleComponent', () => {
  let component: ClientelleComponent;
  let fixture: ComponentFixture<ClientelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
