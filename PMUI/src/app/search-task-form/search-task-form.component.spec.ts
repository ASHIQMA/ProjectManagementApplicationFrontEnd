import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTaskFormComponent } from './search-task-form.component';

describe('SearchTaskFormComponent', () => {
  let component: SearchTaskFormComponent;
  let fixture: ComponentFixture<SearchTaskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTaskFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
