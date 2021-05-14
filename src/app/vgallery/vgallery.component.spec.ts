import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgalleryComponent } from './vgallery.component';

describe('VgalleryComponent', () => {
  let component: VgalleryComponent;
  let fixture: ComponentFixture<VgalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
