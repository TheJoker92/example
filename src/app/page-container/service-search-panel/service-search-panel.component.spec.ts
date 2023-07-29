import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSearchPanelComponent } from './service-search-panel.component';

describe('ServiceSearchPanelComponent', () => {
  let component: ServiceSearchPanelComponent;
  let fixture: ComponentFixture<ServiceSearchPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceSearchPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceSearchPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
