import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  
  display=true;
  data=false;
  branch: any[];
  years: any[];
  empdata:[];
  prod = [];
  topics=[];
products = [
{ id: 1, name: 'Watch', price: '5000' },
{ id: 2, name: 'T-Shirt', price: '2000' },
{ id: 3, name: 'Bag', price: '1000' },
{ id: 4, name: 'Laptop', price: '40000' },
{ id: 5, name: 'LED TV', price: '25000' }
];
  color: boolean;
angular=[
  {topic:'forms'},
  {topic:'component'},
  {topic:'module'},
  {topic:'pipes'},
  {topic:'component communication'},
  {topic:'directives'},
  {topic:'routing'},
  {topic:'services'},
];
  constructor() {
    this.branch = [
      {id:1, name: 'Civil'},
      {id:2, name: 'E.E.E'},
      {id:3, name: 'Mech'},
      {id:4, name: 'E.C.E'},
      {id:5, name: 'C.S.E'}
    
  ];
  console.log(this.empdata);

  
this.years=[
  {year:'First year'},
  {year:'Second year'},
  {year:'Third year'},
  {year:'Fourth year'}

];
   }
   onClick(){
         this.display=!this.display;

    if(this.display){
      this.color=true;
    }
    else{
     this.color=false;
    }
  }
  ngOnInit() {
   
  }
}


