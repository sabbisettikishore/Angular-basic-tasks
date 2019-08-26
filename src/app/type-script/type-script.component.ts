import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-type-script',
  templateUrl: './type-script.component.html',
  styleUrls: ['./type-script.component.scss']
})
export class TypeScriptComponent implements OnInit {
  message = "Hello World";
  name: string = "kishore";
  empid: number = 4503;
user:FormGroup;
  data1: any[];
  data2: any;
  constructor(private http: HttpClient,private fb:FormBuilder) { }
  ngOnInit() {
    // this.user=this.fb.group({
    //   addressLineThree:[''],
    //   addressLineOne:[''],
    //   addressLineTwo:['']
    // })

    this.http.get("./assets/data/addressAndContacts.json").subscribe((data: any[]) => {
      this.data1 = data;
      this.data2 = this.data1[0].addressAndContacts;
      console.log(this.data2);
    })
    console.log(this.message);
    // this.get();

   }
  //  getdate(data) {
  //   console.log('update is called',data);
  //   this.user.patchValue(data);
  // }
  // update(user1) {
  //   console.log(user1);
  //   this.http.put("./assets/data/addressAndContacts.json", user1).subscribe(data => {
  //     // this.get()
  //   })
  //   this.user.reset();
  // }
   

  // add1(a: number, b: number) {
  //   console.log("Emp id is", this.empid);//Employee Id
  //   console.log("Emp Name is", this.name)/* Employee name*/
  //   return a + b;
  // }
  // add() {
  //   let addition = this.add1(12, 12);
  //   console.log('addition is', addition);
  //   return "Welcome to Miracle Software Systems";
  // }
  // get() {
  //   let message = this.add();
  //   console.log(message);
  // }
}
// 
// let name='Miracle';
// const empid=4503;
// var empname='kishore'
// console.log('----Examples of var ,Const and Let----');
// console.log(name);
// console.log(empid);
// console.log(empname);



// // Examples of class and Objects
// class Employee {
//   empid: number = 4503;
//   empname: string = "kishore";
//   email() {
//     if (this.empid == 4503)
//       return "ksabbisetty@miraclesoft.com";
//     else
//       return "Invalid Employee Id";
//   }

// }
// var e = new Employee();
// console.log('-------Class and Object Example-------')
// console.log("Employee Id is :", e.empid);
// console.log("Employee Name is :", e.empname);
// console.log("Employee Email Id is :", e.email());

// var details = {
//   comname: "Miracle Software Systems"
// };
// console.log("Company name is", details.comname);

// // Example on Inheritance
// class Company {
//   cname: string;
//   constructor(c: string) {
//     this.cname = c;
//   }
// }
// class Employee1 extends Company {
//   empid: number;
//   name: string;
//   constructor(c: string, e: number, name: string) {
//     super(c);
//     this.empid = e;
//     this.name = name;
//   }
// }
// console.log('---------Inheritance Examples------------')
// var e1 = new Employee1('Miracle Software Systems', 4503, 'kishore');
// console.log(e1.cname);
// console.log(e1.empid);
// console.log(e1.name);

// // Example of Interface
// interface student {
//   sid: number;
//   sname: string;
//   spercent: number;
//   fullDetails();
// }
// class Student1 implements student {
//   sid: number; sname: string;
//   spercent: number;
//   fullDetails() {
//     return "Student no is:" + this.sid + " Student name is: " + this.sname + " student Percentage Is:" + this.spercent;
//   }
// }
// var std = new Student1();
// console.log('------Interface Example-------')
// std.sid = 562;
// std.sname = "prasad";
// std.spercent = 66;
// console.log(std.fullDetails())

// // TypeCasting Example
// /*class Casting1 {
//   id: number;
//   name: string;
//   percent: number;
//   constructor(id: number, name: string, per: number) {
//     this.id = id;
//     this.name = name;
//     this.percent = per;
//   }
// }
// class Casting {
//   print(){
//  var id = Number((<HTMLInputElement>document.getElementById("id")).value);
//   var name = (<HTMLInputElement>document.getElementById("name")).value;
//   var per = Number((<HTMLInputElement>document.getElementById("per")).value);
//  var c1 = new Casting1(id, name, per);
// console.log(c1);
// //  document.getElementById("s1span1").innerHTML = String(c1.id);    
// //   document.getElementById("s1span2").innerHTML = c1.name;     
// //  document.getElementById("s1span3").innerHTML = String(c1.percent);    
// }}
// var c:Casting = new Casting();
// c.print();*/




// //Default Arguments , MultiLine String & String interpolation
// console.log('---Default arguments, Multiline String & String Interpolation---')
// function add(a: number, b: number = (a * 43) + 4) {
//   var name = `kishore 
//   Sabbisetti  
//   Welcome to 
//   Miracle`
//   let com = 'Software Systems'
//   console.log('Muiltiline String :', name);

//   console.log('String Interpolation :', name + `${com}`);
//   return a + b;
// }
// console.log('default Argument :', add(1));

// // Enams and NameSpace
// console.log('---Enum & NameSpace---');

//  enum Color {Red, Green, Blue};

// export class MyClass {
//     myColor: Color;

//     constructor() {
//         console.log(this.myColor);
//         this.myColor = Color.Blue;
//         console.log(this.myColor);
//         console.log(Color[this.myColor]);
//     }
// }
// let color=new MyClass();
// // namespace
// namespace StringUtility {

//   export function ToCapital(str: string): string {
//       return str.toUpperCase();
//   }
// }
// function student(){
//  var emdid=4503;
//   let name='kishore';
//   console.log('--NAME SPACE--');
// console.log(empid+"  "+StringUtility.ToCapital(name));
// }
// student();

// //ARRAYS

// console.log('---Examples on ARRAYS methods---');
// var arry:string[]=['kishore','sabbisetti'];
// var arr1:any[]=[true,false];
// let company='miracle';
// console.log('--Example on Concat--');
// var con=arry.concat(arr1);
// con=con.concat(company);
// console.log(con);

// console.log('--Example of Every--- ');
// function isBigEnough(element, index, array) { 
//   return (element >= 10); 
// }    
// var passed = [12, 130, 44].every(isBigEnough); 
// console.log("Test Value : " + passed );


// console.log('--Example of Filter--');

// var passed1 = [12, 130, 44].filter(isBigEnough); 
// console.log("Test Value : " + passed1 );

// var data:number[]=[1,2,3,4,5,6,7];
// console.log('--Example of forEach--');
// data.forEach(function (value){
//   console.log(value);
// });

// console.log('--Example of Indexof()--');
// console.log('index of 3 is:',data.indexOf(3));

// console.log('--Example of Join--');
// console.log('Join:',data.join('*'));

// console.log('--Example of lastindexof()--');
// console.log('last index of 3 is:',data.lastIndexOf(3));

// console.log('--Example of Push() & pop()--');
// console.log('push of 56 is:',data.push(56));
// console.log('pop:',data.pop());

// console.log('--Example of reduce()--');
// console.log(arry.reduce(function(a,b){return a+b;}));

// console.log('--Example of reduceRight()--');
// console.log(arry.reduceRight(function(a,b){return a+b;}));

// console.log('--Example of reverse()--');
// console.log(data.reverse());

// console.log('--Example of shift()--');
// console.log(data.shift());
// console.log(data);

// console.log('--Example of unshift()--');
// console.log(data.unshift(4));
// console.log(data);

// console.log('--Example of slice()--');
// console.log(data.slice(3,6));

// console.log('--Example of splice()--');
// console.log(data);
// console.log(data.splice(3,2,89));

// console.log('--Example of sort()--');
// console.log(data.sort());

// console.log('--Example of toString()--');
// console.log(data.toString());