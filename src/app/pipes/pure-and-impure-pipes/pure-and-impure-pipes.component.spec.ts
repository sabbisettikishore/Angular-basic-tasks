import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PureAndImpurePipesComponent } from './pure-and-impure-pipes.component';

describe('PureAndImpurePipesComponent', () => {
  let component: PureAndImpurePipesComponent;
  let fixture: ComponentFixture<PureAndImpurePipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PureAndImpurePipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureAndImpurePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
