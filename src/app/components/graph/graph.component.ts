import { Component, OnInit, Input } from "@angular/core";

import cytoscape from "cytoscape";

@Component({
  selector: "app-graph",
  templateUrl: "./graph.component.html",
  styleUrls: ["./graph.component.css"]
})
export class GraphComponent implements OnInit {
  cy: any;
  elements: any;

  private _historicalRates = {};
  @Input() set historicalRates(historicalRates: Object) {
    this._historicalRates = historicalRates;
    this.updateGraph();
  }

  constructor() {}

  ngOnInit() {
    this.cy = cytoscape({
      container: document.getElementById("historical-rates-graph"), // container to render in

      elements: [],

      style: [
        // the stylesheet for the graph
        {
          selector: "node",
          style: {
            "background-color": "#666",
            label: "data(label)",
            height: 25,
            width: 25
          }
        },

        {
          selector: "edge",
          style: {
            width: 3,
            "line-color": "#ccc",
            "target-arrow-color": "#ccc",
            "target-arrow-shape": "triangle"
          }
        }
      ],

      layout: {
        name: "grid",
        rows: 1
      }
    });

    // this.elements = this.cy.add([
    //   { group: "nodes", data: { id: "n0" }, position: { x: 40, y: 500 } },
    //   { group: "nodes", data: { id: "n1" }, position: { x: 500, y: 40 } },
    //   { group: "edges", data: { id: "e0", source: "n0", target: "n1" } }
    // ]);
    this.elements = this.cy.add(this.getElements());
    this.cy.fit(this.elements, 10); // to fit the elements to canvas
    this.cy.autolock(true); // to lock the nodes in place
    this.cy.zoomingEnabled(false); // to disable zooming
    this.cy.panningEnabled(false);
  }

  getMaxRate() {
    let max = 0;
    Object.keys(this._historicalRates).map(key => {
      if (this._historicalRates[key] > max) {
        max = this._historicalRates[key];
      }
    });
    return max;
  }

  getMinRate() {
    let min = Number.MAX_VALUE;
    Object.keys(this._historicalRates).map(key => {
      if (this._historicalRates[key] < min) {
        min = this._historicalRates[key];
      }
    });
    return min;
  }

  getElements() {
    let elements = [];
    const YAxisLength = this.cy.height();
    const XAxisLength = this.cy.width();
    console.log("X Length", XAxisLength, "Y Length: ", YAxisLength);
    const minRate = this.getMinRate();
    const maxRate = this.getMaxRate();

    //adding nodes
    var i = 1;
    var keys = Object.keys(this._historicalRates);
    keys.map(key => {
      const xCoordinate = (i / 12) * XAxisLength;
      const yCoordinate =
        YAxisLength -
        ((this._historicalRates[key] - minRate) / (maxRate - minRate)) *
          YAxisLength;
      elements.push({
        group: "nodes",
        data: { id: key, label: key + " - " + this._historicalRates[key] },
        position: { x: xCoordinate, y: yCoordinate }
      });
      i += 1;
    });

    // adding edges
    for (i = 0; i < keys.length - 1; i++) {
      elements.push({
        group: "edges",
        data: { id: "e" + i, source: keys[i], target: keys[i + 1] }
      });
    }
    return elements;
  }

  updateGraph() {
    this.elements = this.cy.add(this.getElements());
    this.cy.fit(this.elements, 10); // to fit the elements to canvas
    this.cy.autolock(true); // to lock the nodes in place
    this.cy.zoomingEnabled(false); // to disable zooming
    this.cy.panningEnabled(false);
  }
}
