import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicehttpexComponent } from './servicehttpex.component';

describe('ServicehttpexComponent', () => {
  let component: ServicehttpexComponent;
  let fixture: ComponentFixture<ServicehttpexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicehttpexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicehttpexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
