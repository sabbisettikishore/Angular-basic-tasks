import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceExService } from 'src/app/service-ex.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  create: FormGroup;
  constructor(private fb: FormBuilder, private service: ServiceExService, private route: Router) { }

  ngOnInit() {
    this.create = this.fb.group({
      name: [''],
      salary: [''],
      age: ['']
    });
  }
  store() {
    this.service.create1(this.create.value).subscribe((data) => {
      console.log(this.create.value);
      this.route.navigate(['servicehttpex']);
      console.log('created',this.create.value);
      
    });
  }
}