import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RChildComponent } from './rchild.component';

describe('RChildComponent', () => {
  let component: RChildComponent;
  let fixture: ComponentFixture<RChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
