import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingCompComponent } from './routing-comp.component';

describe('RoutingCompComponent', () => {
  let component: RoutingCompComponent;
  let fixture: ComponentFixture<RoutingCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
