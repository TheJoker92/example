import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalNavigationComponent } from './portal-navigation.component';

describe('PortalNavigationComponent', () => {
  let component: PortalNavigationComponent;
  let fixture: ComponentFixture<PortalNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
