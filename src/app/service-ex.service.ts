import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { create } from 'src/Model/User';
import { Data } from '@angular/router';
import { Configurl } from './servicehttpex/configurl';

@Injectable({
  providedIn: 'root'
})

export class ServiceExService {

  constructor(private http: HttpClient, private urldata: Configurl) { }
  url = this.urldata.urlData;
  // url = "http://dummy.restapiexample.com/api/v1/";



  getdata() {
    // console.log('url from config', this.url1);
    return this.http.get(this.url + "employees");


  }
  deleteData(id: number) {
    return this.http.delete(this.url + "delete" + "/" + id);
  }

  create1(user: create) {
    return this.http.post<create[]>(this.url + 'create', user);
  }
  get(id: number) {
    return this.http.get<Data>(this.url + 'employee' + '/' + id);
  }
  update(user1: Data, id: number) {

    return this.http.put(this.url + 'update' + '/' + id, user1);
  }
  userData: any = [
    { name: "kishore", desig: "developer", id: "10" },
    { name: "pavan", desig: "supporter", id: "20" },
    { name: "sandeep", desig: "developer", id: "30" },
    { name: "prasad", desig: "tester", id: "60" }
  ];



  // SERVICE FILE FOR SERVICE COMMUNICATION WITH COMPONENT

  private messageSource = new Subject<string>();
  message$ = this.messageSource.asObservable();

  send(message: string) {
    this.messageSource.next(message);
  }

}
