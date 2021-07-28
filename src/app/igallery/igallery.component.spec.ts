import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgalleryComponent } from './igallery.component';

describe('IgalleryComponent', () => {
  let component: IgalleryComponent;
  let fixture: ComponentFixture<IgalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
