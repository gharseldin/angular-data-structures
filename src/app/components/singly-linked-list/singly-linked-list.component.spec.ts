import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglyLinkedListComponent } from './singly-linked-list.component';

describe('SinglyLinkedListComponent', () => {
  let component: SinglyLinkedListComponent;
  let fixture: ComponentFixture<SinglyLinkedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglyLinkedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglyLinkedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
