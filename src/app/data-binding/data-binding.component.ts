import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
 
  company='Miracle Software Systems';
  empid=4503;
  empsal=12000;
  empname='kishore';
  data=true;
  fullname=`sabbisetti ${this.empname}`;
  constructor() { }

  ngOnInit() {
  }
    onClick()
    {
      this.data=false;
      this.empname='Hai'+' '+this.empname +' '+'Welcome to Miracle Software Systems';
    }
}
