import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceExService } from 'src/app/service-ex.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  userform:FormGroup;
  data1:any;
  constructor(private fb:FormBuilder, private service:ServiceExService) { 
    this.data1=this.service.userData;
  }

  ngOnInit() {
    this.userform=this.fb.group({
      empid:[''],
      name:[''],
      emailid:[''],
      phno:['']
    })

}
}