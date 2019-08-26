import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterAndChainPipeComponent } from './parameter-and-chain-pipe.component';

describe('ParameterAndChainPipeComponent', () => {
  let component: ParameterAndChainPipeComponent;
  let fixture: ComponentFixture<ParameterAndChainPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParameterAndChainPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterAndChainPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
