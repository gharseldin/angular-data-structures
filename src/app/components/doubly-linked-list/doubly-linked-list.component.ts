import { Component, OnInit } from '@angular/core';
import { DoublyLinkedList } from '../../../model/linkedlists/DoublyLinkedList';
@Component({
  selector: 'app-doubly-linked-list',
  templateUrl: './doubly-linked-list.component.html',
  styleUrls: ['./doubly-linked-list.component.css']
})
export class DoublyLinkedListComponent implements OnInit {

  linkedList: DoublyLinkedList<string>;
  elementToAddFirst: any = "";
  elementToAddLast: any = "";
  nodes: any[];
  links: any[];

  constructor() {
    this.linkedList = new DoublyLinkedList<string>();
    this.nodes = [{
      id: 'head',
      label: 'Head Sentinal'
    },
    {
      id: 'trailer',
      label: 'Trailer Sentinal'
    }];
    this.links = [{
      source: 'head',
      target: 'trailer'
    }, {
      source: 'trailer',
      target: 'head'
    }];
  }

  ngOnInit() {
  }

  refreshModel(): void {
    const tempList: DoublyLinkedList<string> = new DoublyLinkedList<string>();

    const newNodes: any[] = [{
      id: 'head',
      label: 'Head Sentinal'
    },
    {
      id: 'trailer',
      label: 'Trailer Sentinal'
    }];
    const newLinks: any[] = [];

    let id: number = 0;
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
      if(id>1){
        newLinks.push({
          source: '' + (id - 1),
          target: '' + (id - 2)
        });
      }
    }
    newLinks.push({
      source: '0',
      target: 'head'
    },
      {
        source: 'head',
        target: '0'
      },
      {
        source: '' + (id - 1),
        target: 'trailer'
      }, {
        source: 'trailer',
        target: '' + (id - 1)
      });
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

  removeLast(): void {
    this.linkedList.removeLast();
    this.refreshModel();
  }
  reset(): void {
    this.linkedList = new DoublyLinkedList<string>();
    this.nodes = [{
      id: 'head',
      label: 'Head Sentinal'
    },
    {
      id: 'trailer',
      label: 'Trailer Sentinal'
    }];
    this.links = [{
      source: 'head',
      target: 'trailer'
    }, {
      source: 'trailer',
      target: 'head'
    }];
    this.elementToAddFirst = "";
    this.elementToAddLast = "";
  }

}
