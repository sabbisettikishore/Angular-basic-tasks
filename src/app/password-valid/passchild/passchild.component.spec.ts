import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasschildComponent } from './passchild.component';

describe('PasschildComponent', () => {
  let component: PasschildComponent;
  let fixture: ComponentFixture<PasschildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasschildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasschildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
