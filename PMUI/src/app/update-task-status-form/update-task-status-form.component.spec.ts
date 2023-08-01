import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTaskStatusFormComponent } from './update-task-status-form.component';

describe('UpdateTaskStatusFormComponent', () => {
  let component: UpdateTaskStatusFormComponent;
  let fixture: ComponentFixture<UpdateTaskStatusFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTaskStatusFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTaskStatusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
