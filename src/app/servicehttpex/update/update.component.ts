import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServiceExService } from 'src/app/service-ex.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
update:FormGroup;
// userId: any = localStorage.getItem('userId');
  id: number;
  constructor(private fb:FormBuilder, private service:ServiceExService , private route:Router, private router:ActivatedRoute) { }

  ngOnInit() {
this.update=this.fb.group({
name:[''],
salary:[''],
age:['']
});
this.id=parseInt(this.router.snapshot.paramMap.get('id'));
this.service.get(this.id).subscribe((data) => {
  console.log(data, this.id);
  this.update.patchValue({ name: data.employee_name, salary: data.employee_salary, age: data.employee_age });
   });

  }

  updateUser() {
    this.service.update(this.update.value, this.id)
    .subscribe(data => {
    this.route.navigate(['servicehttpex']);
    console.log('updated Id',this.id);
    });

}
}