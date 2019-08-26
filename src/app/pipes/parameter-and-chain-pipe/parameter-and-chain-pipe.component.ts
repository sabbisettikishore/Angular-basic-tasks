import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parameter-and-chain-pipe',
  templateUrl: './parameter-and-chain-pipe.component.html',
  styleUrls: ['./parameter-and-chain-pipe.component.scss']
})
export class ParameterAndChainPipeComponent implements OnInit {


  todaydate=new Date();
  data=true;
  slice=true;
  
  data1={empid:'4503',name:'kishore', sal:'20000'};
  
    constructor() { }
  
    ngOnInit() {
    }
  get format(){
   return this.data ? 'fullDate':'shortDate';
  }
  click(){
     this.data = !this.data;
  }
  
  get format1(){
    return this.slice ? 'INR':'USD';
  }
  
  click1(){
    this.slice = !this.slice;
  }

}
