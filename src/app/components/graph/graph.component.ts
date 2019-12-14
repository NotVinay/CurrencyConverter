import { Component, OnInit, Input } from "@angular/core";

import cytoscape from "cytoscape";
import { timeout } from "q";

@Component({
  selector: "app-graph",
  templateUrl: "./graph.component.html",
  styleUrls: ["./graph.component.css"]
})
//const MONTHS = {};
export class GraphComponent implements OnInit {
  cy: any;
  elements: any;

  private _historicalRates;
  @Input() set historicalRates(historicalRates: Object) {
    this._historicalRates = historicalRates;
    if (this._historicalRates != undefined) {
      this.updateGraph();
    }
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

  generateElements() {
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
        data: {
          id: key,
          label: key + " - " + this._historicalRates[key].toFixed(2)
        },
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

  updateElements() {
    const YAxisLength = this.cy.height();
    const XAxisLength = this.cy.width();
    console.log("X Length", XAxisLength, "Y Length: ", YAxisLength);
    const minRate = this.getMinRate();
    const maxRate = this.getMaxRate(); //adding nodes
    var i = 1;
    var keys = Object.keys(this._historicalRates);
    keys.map(key => {
      const xCoordinate = (i / 12) * XAxisLength;
      const yCoordinate =
        YAxisLength -
        ((this._historicalRates[key] - minRate) / (maxRate - minRate)) *
          YAxisLength;
      this.cy.$("#" + key).data({
        label: key + " - " + this._historicalRates[key].toFixed(2)
      });
      this.cy.elements("node#" + key).animate(
        {
          position: { x: xCoordinate, y: yCoordinate }
        },
        {
          duration: 1000
        }
      );
      //.position({ x: xCoordinate, y: yCoordinate });
      i += 1;
    });
  }

  updateGraph() {
    if (this.elements) {
      //this.cy.remove(this.elements);
      this.cy.autolock(false); // to lock the nodes in place
      this.updateElements();
    } else {
      this.elements = this.cy.add(this.generateElements());
    }
    this.cy.fit(this.elements, 2); // to fit the elements to canvas
    this.cy.zoomingEnabled(false); // to disable zooming
    this.cy.panningEnabled(false);
    setTimeout(() => {
      this.cy.autolock(true); // to lock the nodes in place
    }, 1000);
  }
}
