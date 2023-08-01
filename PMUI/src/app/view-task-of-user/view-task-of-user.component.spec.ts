import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskOfUserComponent } from './view-task-of-user.component';

describe('ViewTaskOfUserComponent', () => {
  let component: ViewTaskOfUserComponent;
  let fixture: ComponentFixture<ViewTaskOfUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTaskOfUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTaskOfUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
