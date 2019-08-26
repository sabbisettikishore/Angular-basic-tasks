import { Component, OnInit } from '@angular/core';
import { Observable, from, fromEvent, interval, range, concat, zip, of } from 'rxjs';
import { switchMap, take, merge, map, max, min, every, concatMap, buffer } from 'rxjs/operators';
@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  constructor() { }
  //  observable = new Observable(function subscribe(subscriber) {
  //   const id = setInterval(() => {
  //     subscriber.next('hi');
  //     subscriber.complete();
  //   }, 1000);
  // });
  ngOnInit() {
    // this.observable.subscribe(x => console.log(x));
    
  }

}
// console.log('============= Operators===========');

// const array = [10, 20, 30];
// const result = from(array);
// console.log('--from--');
// result.subscribe(x => console.log(x));

// const numbers = interval(1000);
// const takeFourNumbers = numbers.pipe(take(4));
// takeFourNumbers.subscribe(x => console.log('Interval & pipe', x));

// const number = range(10);
// number.subscribe(x => console.log('Range', x));

// const result1 = concat(takeFourNumbers, number);
// result1.subscribe(x => console.log('Concat',x));

// // const merged = merge(takeFourNumbers, number);
// // merged.subscribe(a => console.log('merge',a));

// let age = of<number>(23, 24, 22);
// let name = of<string>('kishore', 'prasad', 'pavan');
// let isDev = of<boolean>(true, true, false);
// zip(age, name, isDev).pipe(
//   map(([age, name, isDev]) => ({ age, name, isDev })),
// ).subscribe(x => console.log('ZIP',x));


// of(51,54,23,5,23,3).pipe(
//   max(),
// ).subscribe(x => console.log('max',x));

// of(51,54,23,5,23,3).pipe(
//   min(),
// ).subscribe(x => console.log('min',x));

// of(1,5,2,4).pipe(every(a =>a<=5),).subscribe(x=>console.log('every',x));
// // let numbers44 = [1,2,3,4,5,6];
// const result2 = age.pipe(
//   concatMap(ev => interval(1000).pipe(take(4)))
// );
// result2.subscribe(x => console.log('concatMap',x));

// const clicks = fromEvent(document, 'click');
// const intervalEvents = interval(1000);
// const buffered = intervalEvents.pipe(buffer(clicks));
// buffered.subscribe(x => console.log('BUFFER',x));
