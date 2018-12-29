import { Component, OnInit } from '@angular/core';
import * as shape from 'd3-shape';
import { Input } from '@angular/core';

@Component({
  selector: 'app-abstract-graph',
  templateUrl: './abstract-graph.component.html',
  styleUrls: ['./abstract-graph.component.css']
})
export class AbstractGraphComponent implements OnInit {

  @Input()
  nodes;
  @Input()
  links;

  constructor() {
    console.log("constructor of graph called");
   }

  ngOnInit() {
    console.log("ngOnInit of graph called");
  }

  curve: any = shape.curveLinear;
  view: any[];
  autoZoom: boolean = true;
  panOnZoom: boolean = true;
  enableZoom: boolean = true;
  autoCenter: boolean = false;
  showLegend: boolean = false;
  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
}
