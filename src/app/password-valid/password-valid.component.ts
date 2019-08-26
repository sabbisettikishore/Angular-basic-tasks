import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-password-valid',
  templateUrl: './password-valid.component.html',
  styleUrls: ['./password-valid.component.scss']
})
export class PasswordValidComponent implements OnInit {
  data: boolean;

  constructor() { }

  ngOnInit() {
  }
  
  add(){
    this.data =true;
}


}
