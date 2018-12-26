import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SinglyLinkedList } from 'src/model/linkedlists/SinglyLinkedList';
import { Model } from 'src/model/Model';
import { template } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-singly-linked-list',
  templateUrl: './singly-linked-list.component.html',
  styleUrls: ['./singly-linked-list.component.css']
})
export class SinglyLinkedListComponent implements OnInit {

  linkedList: SinglyLinkedList<string>;
  elementToAddFirst:any = "";
  elementToAddLast:any = "";
  nodes: any[];
  links: any[];
  constructor() {
    this.linkedList = new SinglyLinkedList<string>();

    this.nodes = 
      [
        {
          id: 'start',
          label: 'start'
        }, {
          id: '1',
          label: 'Query ThreatConnect',
        }, {
          id: '2',
          label: 'Query XForce',
        }, {
          id: '3',
          label: 'Format Results'
        }, {
          id: '4',
          label: 'Search Splunk'
        }, {
          id: '5',
          label: 'Block LDAP'
        }, {
          id: '6',
          label: 'Email Results'
        }
      ];
    this.links= 
    [
        {
          source: 'start',
          target: '1',
          label: 'links to'
        },
        {
          source: '1',
          target: 'start',
          label: 'links to'
        },
        {
          source: 'start',
          target: '2'
        }, {
          source: '1',
          target: '3',
          label: 'related to'
        }, {
          source: '2',
          target: '4'
        }, {
          source: '2',
          target: '6'
        }, {
          source: '3',
          target: '5'
        }
      ];
  }

  ngOnInit() {
  }

  refreshModel():void {
    const tempList = new SinglyLinkedList<any>();

    if(!this.linkedList.isEmpty()){
      const e: any = this.linkedList.removeFirst();
      tempModel.addNode({
        id: this.linkedList.size(),
        label: e
      });
      tempList.addFirst(e);
    }
    if(!this.linkedList.isEmpty()){
      const e:any = this.linkedList.removeFirst();
      tempModel.addNode({
          id: this.linkedList.size(),
          label: e
      });
      tempModel.addLink({
        source: this.linkedList.size()-1,
        target : this.linkedList.size()
      })
      tempList.addLast(e);
    }
    this.linkedList = tempList;
    console.log(this.linkedList);
  }

  addFirst():void {
    this.linkedList.addFirst(this.elementToAddFirst);
    this.elementToAddFirst = "";
    this.nodes.push({
      id: '15',
      label: 'Testing'
    })
  }

  addLast():void {
    this.linkedList.addLast(this.elementToAddLast);
    this.elementToAddLast = "";
    this.refreshModel();
  }

  removeFirst():void{
    this.linkedList.removeFirst();
    this.refreshModel();
  }

  reset():void{
    this.nodes = [];
    this.nodes = [{
      id: 'start',
      label: 'hey'
    },
    {
      id:2,
      label: 'hey 2'
    }];
    this.links = [{
      source: '1',
      target: '2'
    }];
    this.elementToAddFirst = "";
    this.elementToAddLast = "";
  }
}
