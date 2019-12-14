import { Component, OnInit } from "@angular/core";

import cytoscape from "cytoscape";

@Component({
  selector: "app-graph",
  templateUrl: "./graph.component.html",
  styleUrls: ["./graph.component.css"]
})
export class GraphComponent implements OnInit {
  cy: any;
  elements: any;

  data = {
    "2019-1-1": 89.3,
    "2019-2-1": 87.3,
    "2019-3-1": 88.6,
    "2019-4-1": 89.9,
    "2019-5-1": 90.5,
    "2019-6-1": 86.94,
    "2019-7-1": 93.54,
    "2019-8-1": 92.34,
    "2019-9-1": 89.45,
    "2019-10-1": 88.87,
    "2019-11-1": 87.86,
    "2019-12-1": 86.24
  };
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
    Object.keys(this.data).map(key => {
      if (this.data[key] > max) {
        max = this.data[key];
      }
    });
    return max;
  }

  getMinRate() {
    let min = Number.MAX_VALUE;
    Object.keys(this.data).map(key => {
      if (this.data[key] < min) {
        min = this.data[key];
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
    var keys = Object.keys(this.data);
    keys.map(key => {
      const xCoordinate = (i / 12) * XAxisLength;
      const yCoordinate =
        YAxisLength -
        ((this.data[key] - minRate) / (maxRate - minRate)) * YAxisLength;
      elements.push({
        group: "nodes",
        data: { id: key, label: key + " - " + this.data[key] },
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
}
