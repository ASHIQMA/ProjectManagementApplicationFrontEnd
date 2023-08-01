import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtuComponent } from './viewtu.component';

describe('ViewtuComponent', () => {
  let component: ViewtuComponent;
  let fixture: ComponentFixture<ViewtuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewtuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
