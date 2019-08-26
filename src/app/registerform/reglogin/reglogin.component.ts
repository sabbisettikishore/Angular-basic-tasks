import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reglogin',
  templateUrl: './reglogin.component.html',
  styleUrls: ['./reglogin.component.scss']
})
export class RegloginComponent implements OnInit {
  login: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.login = this.fb.group({
      uname: [''],
      pass: ['']
    })
  }

}
