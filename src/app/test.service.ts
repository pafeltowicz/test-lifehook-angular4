import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class TestService implements OnDestroy{

  constructor() {
    console.log('------service init------');
  }

  ngOnDestroy() {
    console.log('------service destroy------');
  }
}
