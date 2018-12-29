import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularlyLinkedListComponent } from './circularly-linked-list.component';

describe('CircularlyLinkedListComponent', () => {
  let component: CircularlyLinkedListComponent;
  let fixture: ComponentFixture<CircularlyLinkedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircularlyLinkedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircularlyLinkedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
