import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FirstComponent } from '../first/first.component';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let component1 :FirstComponent;
  // let fixture: ComponentFixture<LoginComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ LoginComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(LoginComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  beforeEach(()=>{
 component1 = new FirstComponent()
 component = new LoginComponent(component1);

  });
  afterEach(()=>{
    localStorage.removeItem('a');
    component=null;
    component1=null;
  });

  it('should create', () => {
    expect(component.login()).toBeTruthy();
  });
  it(' login method with parameters',()=>{
    localStorage.setItem('a','Web');
    expect(component.login()).toBeFalsy();
  })
});
