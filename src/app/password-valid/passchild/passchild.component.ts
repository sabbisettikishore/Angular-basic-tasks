import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-passchild',
  templateUrl: './passchild.component.html',
  styleUrls: ['./passchild.component.scss']
})
export class PasschildComponent implements OnInit {
@Input() myform1:NgForm;
// @Input() name:string;
  constructor() { }

  ngOnInit() {
  }
//   data:any;
//   password;
//   onKeyUp(event: any) {
//     // this.password = event.target.value;
//     // console.log(this.password);
//     this.data="password";
// };
// onKeydown(event: any) {
//   // this.password = event.target.value;
//   // console.log(this.password);
//   this.data="text";
// };


}
