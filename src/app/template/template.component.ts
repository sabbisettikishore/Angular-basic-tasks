import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  
click:boolean=false;
  branch: any[];
  citysuggestion:any[];
  data: boolean=false;
  data1:any[]=[];
  empid:string="";
  firstname:string="";
  lastname:string="";
  emailid:string="";
  password:string="";
  cpassword:string="";
  phoneno:any="";
  selectedbranch:any="";
  experiance:number;
  gender:string="";
  dateofbirth:any="";
  selectedlang:any[];
  selectedcity:any="";
  taddress:any="";
  paddress:any="";
  check:any="";
  data3;
  user1: any[];
  constructor() {
    this.branch = [
      {name: 'Civil'},
      {name: 'E.E.E'},
      {name: 'Mech'},
      {name: 'E.C.E'},
      {name: 'C.S.E'}
  ];
}


   searchcity($event) {
    this.citysuggestion = [
    { name: 'Hyd' },
    { name: 'Araku' },
    { name: 'Kerala' },
    { name: 'Chennai' },
    { name: 'vizag' },
    ];
    }
  ngOnInit() {
  }
  add(){
      this.data =true;
  }
  click1(myform)
  {
    console.log(this.taddress);
this.click=!this.click;
myform.controls.paddress.setValue(myform.controls.taddress.value);
    console.log('p',this.paddress);

  }
reset(myform){
  myform.reset();
}

table(myform){
  this.data1.push(myform.value);
console.log(this.data1);
}

}
