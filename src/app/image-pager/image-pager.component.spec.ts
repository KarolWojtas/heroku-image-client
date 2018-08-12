import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePagerComponent } from './image-pager.component';

describe('ImagePagerComponent', () => {
  let component: ImagePagerComponent;
  let fixture: ComponentFixture<ImagePagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagePagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
