import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionMenuComponent } from './function-menu.component';

describe('FunctionMenuComponent', () => {
  let component: FunctionMenuComponent;
  let fixture: ComponentFixture<FunctionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
