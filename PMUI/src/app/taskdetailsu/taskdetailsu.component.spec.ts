import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskdetailsuComponent } from './taskdetailsu.component';

describe('TaskdetailsuComponent', () => {
  let component: TaskdetailsuComponent;
  let fixture: ComponentFixture<TaskdetailsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskdetailsuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskdetailsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
