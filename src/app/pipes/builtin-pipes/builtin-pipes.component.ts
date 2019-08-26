import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builtin-pipes',
  templateUrl: './builtin-pipes.component.html',
  styleUrls: ['./builtin-pipes.component.scss']
})
export class BuiltinPipesComponent implements OnInit {

  
title="Welcome to angular";
todate=new Date();
data={empid:'4503',name:'kishore', sal:'20000'};
numbers=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'];
  constructor() { }

  ngOnInit() {
  }

}
