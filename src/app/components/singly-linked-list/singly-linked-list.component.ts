import { Component, OnInit } from '@angular/core';
import { SinglyLinkedList } from '../../../model/linkedlists/SinglyLinkedList';

@Component({
  selector: 'app-singly-linked-list',
  templateUrl: './singly-linked-list.component.html',
  styleUrls: ['./singly-linked-list.component.css']
})
export class SinglyLinkedListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  singlyLinkedList : SinglyLinkedList<string>;


}
