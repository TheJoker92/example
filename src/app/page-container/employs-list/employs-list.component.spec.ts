import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploysListComponent } from './employs-list.component';

describe('EmploysListComponent', () => {
  let component: EmploysListComponent;
  let fixture: ComponentFixture<EmploysListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploysListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
