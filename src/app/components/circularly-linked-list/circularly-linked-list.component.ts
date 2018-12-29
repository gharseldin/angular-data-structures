import { Component, OnInit } from '@angular/core';
import { CircularlyLinkedList } from '../../../model/linkedlists/CircularlyLinkedList';

@Component({
  selector: 'app-circularly-linked-list',
  templateUrl: './circularly-linked-list.component.html',
  styleUrls: ['./circularly-linked-list.component.css']
})
export class CircularlyLinkedListComponent implements OnInit {

  linkedList: CircularlyLinkedList<string>;
  elementToAddFirst: any = "";
  elementToAddLast: any = "";
  nodes: any[];
  links: any[];

  constructor() {
    this.linkedList = new CircularlyLinkedList<string>();
    this.nodes = [];
    this.links = [];
  }

  ngOnInit() {
  }

  refreshModel(): void {
    const tempList: CircularlyLinkedList<string> = new CircularlyLinkedList<string>();

    const newNodes: any[] = [];
    const newLinks: any[] = [];
    let id: number = 0;
    if (!this.linkedList.isEmpty()) {
      const e: any = this.linkedList.removeFirst();
      tempList.addFirst(e);
      newNodes.push({
        id: '' + id++,
        label: e
      });
    }
    while (!this.linkedList.isEmpty()) {
      const e: any = this.linkedList.removeFirst();
      tempList.addLast(e);
      newNodes.push({
        id: '' + id++,
        label: e
      });
      newLinks.push({
        source: '' + (id - 2),
        target: '' + (id - 1)
      });
    }
    newLinks.push({
      source: '' + (id - 1),
      target: '' + 0
    })
    this.linkedList = tempList;
    this.nodes = newNodes;
    this.links = newLinks;
  }

  addFirst(): void {
    this.linkedList.addFirst(this.elementToAddFirst);
    this.elementToAddFirst = "";
    this.links = [];
    this.refreshModel();
  }

  addLast(): void {
    this.linkedList.addLast(this.elementToAddLast);
    this.elementToAddLast = "";
    this.refreshModel();
  }

  removeFirst(): void {
    this.linkedList.removeFirst();
    this.refreshModel();
  }

  rotate(): void {
    this.linkedList.rotate();
    this.refreshModel();
  }
  reset(): void {
    this.linkedList = new CircularlyLinkedList<string>();
    this.nodes = [];
    this.links = [];
    this.elementToAddFirst = "";
    this.elementToAddLast = "";
  }

}
