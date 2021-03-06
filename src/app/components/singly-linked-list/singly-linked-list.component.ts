import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SinglyLinkedList } from 'src/model/linkedlists/SinglyLinkedList';

@Component({
  selector: 'app-singly-linked-list',
  templateUrl: './singly-linked-list.component.html',
  styleUrls: ['./singly-linked-list.component.css']
})
export class SinglyLinkedListComponent implements OnInit {

  linkedList: SinglyLinkedList<string>;
  elementToAddFirst: any = "";
  elementToAddLast: any = "";
  nodes: any[];
  links: any[];
  constructor() {
    this.linkedList = new SinglyLinkedList<string>();

    this.nodes = [];
    // [
    //   {
    //     id: 'start',
    //     label: 'start'
    //   }
    // , {
    //   id: '1',
    //   label: 'Query ThreatConnect',
    // }, {
    //   id: '2',
    //   label: 'Query XForce',
    // }, {
    //   id: '3',
    //   label: 'Format Results'
    // }, {
    //   id: '4',
    //   label: 'Search Splunk'
    // }, {
    //   id: '5',
    //   label: 'Block LDAP'
    // }, {
    //   id: '6',
    //   label: 'Email Results'
    // }
    // ];
    this.links = [];
    // [
    //     {
    //       source: 'start',
    //       target: '1',
    //       label: 'links to'
    // },
    // {
    //   source: '1',
    //   target: 'start',
    //   label: 'links to'
    // },
    // {
    //   source: 'start',
    //   target: '2'
    // }, {
    //   source: '1',
    //   target: '3',
    //   label: 'related to'
    // }, {
    //   source: '2',
    //   target: '4'
    // }, {
    //   source: '2',
    //   target: '6'
    // }, {
    //   source: '3',
    //   target: '5'
    //   }
    // ];
  }

  ngOnInit() {
  }

  refreshModel(): void {
    const tempList: SinglyLinkedList<any> = new SinglyLinkedList<any>();

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

  reset(): void {
    this.linkedList = new SinglyLinkedList<any>();
    this.nodes = [];
    this.links = [];
    this.elementToAddFirst = "";
    this.elementToAddLast = "";
  }
}
