import { Component, OnDestroy, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-with',
  templateUrl: './with.component.html',
  styleUrls: ['./with.component.css'],
  providers: [TestService]
})
export class WithServiceComponent implements OnInit, OnDestroy {

  constructor(private _test: TestService) { }

  ngOnInit() {
    console.log('------component with service init------');
  }

  ngOnDestroy() {
    console.log('------component with service destroy------');
  }

}
