import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-proxy-ex',
  templateUrl: './proxy-ex.component.html',
  styleUrls: ['./proxy-ex.component.scss']
})
export class ProxyExComponent implements OnInit {
  empdata: any;
  user: FormGroup;
  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
    this.user = this.fb.group({
      id: [''],
      name: [''],
      gender: ['']
    });
    // this.http.get('/get').subscribe(data=>{
    //   this.empdata=data;
    // })
    this.get();
  }


  get() {
    this.http.get('/get').subscribe(data => {
      this.empdata = data;
    })
  }


  delete2(id: number) {
    this.http.delete('/delete1' + '/' + id, { responseType: "text" }).subscribe(data => {
      console.log(id);
      //  this.http.get('/get').subscribe(data=>{
      //   this.empdata=data;
      // })
      this.get()
    })
  }


  getdate(data) {
    console.log('update is called');
    this.user.patchValue(data);
  }
  update(user1) {
    console.log(user1);
    this.http.put('/update' + '/' + user1.id, user1, { responseType: 'text' }).subscribe(data => {
      this.get()
    })
    this.user.reset();
  }


  add(user1) {
    this.http.post('/add', user1, { responseType: 'text' }).subscribe(data => {
      this.get();
    })
  }
}
