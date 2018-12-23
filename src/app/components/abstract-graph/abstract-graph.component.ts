import { Component, OnInit } from '@angular/core';
import * as shape from 'd3-shape';
import { Input } from '@angular/core';
import { Model } from '../../../model/Model'

@Component({
  selector: 'app-abstract-graph',
  templateUrl: './abstract-graph.component.html',
  styleUrls: ['./abstract-graph.component.css']
})
export class AbstractGraphComponent implements OnInit {

  @Input()
  testModel: Model;

  constructor() {

   }

  ngOnInit() {
    this.nodes = this.testModel.getNodes();
    this.links = this.testModel.getLinks();
  }

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

  nodes: any[];
  links: any[];

  select(event) {
    console.log('selected');
  }
}
