import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WildRedirectComponent } from './wild-redirect.component';

describe('WildRedirectComponent', () => {
  let component: WildRedirectComponent;
  let fixture: ComponentFixture<WildRedirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildRedirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
