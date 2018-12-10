import { Component } from '@angular/core';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-data-structures';
  curve: any = shape.curveLinear;
  view: any[];
  autoZoom: boolean = false;
  panOnZoom: boolean = true;
  enableZoom: boolean = true;
  autoCenter: boolean = false;
  showLegend: boolean = false;
  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  nodes: any[] = [
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

  links: any[] = [
    {
      source: 'start',
      target: '1',
      label: 'links to'
    }, {
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

  select(event){
    console.log('selected');
  }

}
