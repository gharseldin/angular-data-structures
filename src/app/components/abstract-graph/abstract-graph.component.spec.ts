import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractGraphComponent } from './abstract-graph.component';

describe('AbstractGraphComponent', () => {
  let component: AbstractGraphComponent;
  let fixture: ComponentFixture<AbstractGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbstractGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
