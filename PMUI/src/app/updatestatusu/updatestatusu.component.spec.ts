import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatestatusuComponent } from './updatestatusu.component';

describe('UpdatestatusuComponent', () => {
  let component: UpdatestatusuComponent;
  let fixture: ComponentFixture<UpdatestatusuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatestatusuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatestatusuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
