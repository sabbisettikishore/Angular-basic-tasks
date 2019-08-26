import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { password1 } from './password';
import { ServiceExService } from '../service-ex.service';



@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  userform: FormGroup;
  branch: any[];
  data: any;
  selectedlang: any[] = [];
  data10: any;
  citysuggestion: any[];
  data1: any[] = [];
  // taddress:any;
  // paddress:any;
  click: boolean = false;
  constructor(private fb: FormBuilder, private service: ServiceExService) {

    this.branch = [
      { name: 'Civil' },
      { name: 'E.E.E' },
      { name: 'Mech' },
      { name: 'E.C.E' },
      { name: 'C.S.E' }
    ];
    

  }

  ngOnInit() {
    this.userform = this.fb.group({
      empid: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4), Validators.pattern("^[0-9]+$")]],
      fisrtname: ['', [Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z]+$")]],
      lastname: ['', [Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z]+$")]],                                                  
      emailid: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9]+@[a-zA-Z0-9]+.com")]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64), Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[''',!#$%&()*+-./:=?@\\[\\]^_`{}~\\\\]).{8,64}$")]],
      cpassword: ['', [Validators.required]],
      phoneno: [''],
      selectebranch: [''],
      experience: [''],
      gender: [''],
      dateofbirth: [''],
      selectedlang: [''],
      selectedcity: [''],
      taddress: [''],
      paddress: [''],
      check: [''],
    }, { validator: password1('password', 'cpassword') })
  

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

  add() {
    console.log(this.userform.value);
    this.data = true;
  }
  reset() {
    this.userform.reset();
  }
  table() {
    this.data1.push(this.userform.value);
    console.log(this.data1);
  }
  click1() {
    this.click = !this.click;
    this.userform.controls.paddress.setValue(this.userform.controls.taddress.value);
  }

  submitForm() {
    if (this.userform.valid) {

    } else {
      var invalidFields = [].slice.call(document.getElementsByClassName('ng-invalid'));
      invalidFields[1].focus();
    }
    console.log(invalidFields[1]);
    
  }

}

