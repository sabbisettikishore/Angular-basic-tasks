import { Component, OnInit } from '@angular/core';
import { FirstComponent } from '../first/first.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private first:FirstComponent) { }

  ngOnInit() {
  }
login(){
  return !this.first.helloword();
}
}
