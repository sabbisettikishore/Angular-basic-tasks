import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent implements OnInit {
  reg: FormGroup;
  data1: boolean;
  click: boolean;
  formdata: Object;
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.reg = this.fb.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      phno: [''],
      gender: [''],
      birth: [''],
      taddress: [''],
      address: [''],
      check: ['']
    })
    this.getdata();
  }
  add() {
    console.log(this.reg.value);
    this.data1 = true;
  }
  click1() {
    this.click = !this.click;
    this.reg.controls.address.setValue(this.reg.controls.taddress.value);
  }


  getdata() {
    this.http.get('/getalldata').subscribe(data => {
      this.formdata = data;
    })
  }
  create(reg) {
    this.http.post('/adddata', reg, { responseType: 'text' }).subscribe(data => {
      this.getdata();
    })
  }

  delete(reg) {
    this.http.delete('/deletedata' + '/' + reg.id, { responseType: 'text' }).subscribe(data => {
      this.getdata();
    })
  }

  update(data) {
    this.reg.patchValue(data);
  }

  updateData(reg) {
     this.http.put('/updatedata' +'/'+reg.id ,reg, { responseType: 'text' }).subscribe(data=>{
       this.getdata();
     })
  }
}
