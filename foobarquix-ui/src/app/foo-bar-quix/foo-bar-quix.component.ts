import { Component, OnInit, OnDestroy } from '@angular/core';
import { first } from "rxjs/operators";
import { FooBarQuixService } from '../foo-bar-quix.service';
import { TestCase } from '../model/test-case';

@Component({
  selector: 'app-foo-bar-quix',
  templateUrl: './foo-bar-quix.component.html'
})
export class FooBarQuixComponent implements OnInit, OnDestroy {

  public numberConvertedList: TestCase[] = [];

  constructor(private fooBarQuixService: FooBarQuixService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  convertNumber(inputNumber: number): void {
    this.fooBarQuixService
      .convertNumber(inputNumber)
      .pipe(first())
      .subscribe(
        result => {
          var newTestCase: TestCase = new TestCase();
          newTestCase.input = inputNumber;
          newTestCase.output = result.result;
          this.numberConvertedList.push(newTestCase);
        },
        error => {
          console.log("error when get the result of convertNumber");
        }
      );
  }

}

interface NumberConverted {
  numberToConvert: number;
  result: string;
}
