import { Component, OnInit } from '@angular/core';
import { ServiceExService } from '../service-ex.service';
import { Data, create } from 'src/Model/User';
import { Router } from '@angular/router';
@Component({
  selector: 'app-servicehttpex',
  templateUrl: './servicehttpex.component.html',
  styleUrls: ['./servicehttpex.component.scss']
})
export class ServicehttpexComponent implements OnInit {
  //   property;
  // data1:any[];
  empdata: Data[];
  users: any;
  constructor(public service: ServiceExService, private route: Router) {
    //  console.log(this.s.property,'Before change');
    //   this.property=this.s.property;
    //   console.log(this.property,'Component data');
    //   this.s.property="welcome to component";
    //   console.log(this.s.property,'After change');
    //   this.property=this.s.property;
    //   console.log(this.property,'After change component Data');
    // this.data1=this.s.userData;
    // console.log(this.data1);
  }

  ngOnInit() {
    this.service.getdata().subscribe((data: any) => {
      this.empdata = data;
    });


  }
  deleteUser(id) {
    let index;
    index = this.empdata.findIndex(x => x.id === id);
    this.empdata = this.empdata.filter((val, i) => i !== index);
    this.service.deleteData(id).subscribe((data) => {
      console.log('delete Id', id);

    });
  }
  editUser(id: any) {
    // localStorage.removeItem('userId');
    // localStorage.setItem('userId', id);
    this.route.navigate(['update',id]);
  }

}

