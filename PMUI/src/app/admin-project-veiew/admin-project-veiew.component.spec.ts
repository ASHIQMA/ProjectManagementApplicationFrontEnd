import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectVeiewComponent } from './admin-project-veiew.component';

describe('AdminProjectVeiewComponent', () => {
  let component: AdminProjectVeiewComponent;
  let fixture: ComponentFixture<AdminProjectVeiewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProjectVeiewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProjectVeiewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
