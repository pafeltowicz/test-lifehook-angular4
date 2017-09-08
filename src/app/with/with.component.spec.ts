import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithServiceComponent } from './with.component';

describe('WithServiceComponent', () => {
  let component: WithServiceComponent;
  let fixture: ComponentFixture<WithServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
