import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponent } from './first.component';

describe('FirstComponent', () => {
  let component: FirstComponent;
 // let fixture: ComponentFixture<FirstComponent>;
//let name='';
  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ FirstComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(FirstComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });
 
  beforeEach(()=>{
   
    component=new FirstComponent();
  })
 afterEach(()=>{
 component=null;
   localStorage.removeItem('a');
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
 xit('Helloword spec',()=>{
    expect(component.helloword()).toEqual(name);
    console.log(name);
  });
 
it('localStorage ',()=>{
  localStorage.setItem('a','s');
  expect(component.helloword()).toBeTruthy();
});
it('localStorage no parameter ',()=>{
  expect(component.helloword()).toBeFalsy();
});
});



