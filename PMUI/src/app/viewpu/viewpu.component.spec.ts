import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpuComponent } from './viewpu.component';

describe('ViewpuComponent', () => {
  let component: ViewpuComponent;
  let fixture: ComponentFixture<ViewpuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
