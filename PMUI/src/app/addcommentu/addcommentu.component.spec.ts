import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcommentuComponent } from './addcommentu.component';

describe('AddcommentuComponent', () => {
  let component: AddcommentuComponent;
  let fixture: ComponentFixture<AddcommentuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcommentuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcommentuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
