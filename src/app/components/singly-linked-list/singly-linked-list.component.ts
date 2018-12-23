import { Component, OnInit } from '@angular/core';
import { SinglyLinkedList } from 'src/model/linkedlists/SinglyLinkedList';
import { Model } from 'src/model/Model';

@Component({
  selector: 'app-singly-linked-list',
  templateUrl: './singly-linked-list.component.html',
  styleUrls: ['./singly-linked-list.component.css']
})
export class SinglyLinkedListComponent implements OnInit {

  linkedList: SinglyLinkedList<string>;
  singlyLinkedListModel: Model;
  test: string = "1234";

  constructor() {
    this.linkedList = new SinglyLinkedList<string>();

    this.singlyLinkedListModel = new Model(
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
      ],
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
      ]
    );
    this.singlyLinkedListModel.addNode({
      id: '7',
      label: 'Test'
    });
    this.singlyLinkedListModel.addLink({
      source: '7',
      target: '3'
    })
    console.log("model : " + this.singlyLinkedListModel);
  }

  ngOnInit() {
  }
  singlyLinkedList: SinglyLinkedList<string>;

  refreshModel():void {
    
  }
}
