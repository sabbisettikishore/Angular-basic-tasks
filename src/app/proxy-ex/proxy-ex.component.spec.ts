import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxyExComponent } from './proxy-ex.component';

describe('ProxyExComponent', () => {
  let component: ProxyExComponent;
  let fixture: ComponentFixture<ProxyExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProxyExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProxyExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
