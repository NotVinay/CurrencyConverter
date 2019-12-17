import {
  Component,
  OnInit,
  Input
} from "@angular/core";

import cytoscape from "cytoscape";

const MONTHS = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Aug",
  "09": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec"
};

@Component({
  selector: "app-graph",
  templateUrl: "./graph.component.html",
  styleUrls: ["./graph.component.css"]
})
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
      style: [
        // the stylesheet for the graph
        {
          selector: "node",
          style: {
            "background-color": "#ff6384",
            label: "data(label)",
            height: 20,
            width: 20
          }
        },

        {
          selector: "edge",
          style: {
            width: 3,
            "line-color": "#f96899",
            "opacity":0.5,
            "target-arrow-color": "#ccc",
            "target-arrow-shape": "triangle"
          }
        }
      ]
    });
  }
  
  /**
   * Getting the max value from rates
   */
  getRatesBounds() {
    let maxRate = 0;
    let minRate = Number.MAX_VALUE;
    for (const key in this._historicalRates) {
      if (this._historicalRates[key] > maxRate) {
        maxRate = this._historicalRates[key];
      }
      if (this._historicalRates[key] < minRate) {
        minRate = this._historicalRates[key];
      }
    };
    return {minRate, maxRate};
  }

  /**
   * Generates the nodes and edges from the exchange rates data recieved.
   */
  generateElements() {
    let elements = [];
    const YAxisLength = this.cy.height();
    const XAxisLength = this.cy.width();
    const { minRate, maxRate } = this.getRatesBounds();
    
    //adding nodes
    var i = 0;
    var keys = Object.keys(this._historicalRates);
    keys.map(key => {
      // calculating the position of the nodes relative to canvas
      const xCoordinate = (i / 11) * XAxisLength;
      const yCoordinate = YAxisLength - ((this._historicalRates[key] - minRate) / (maxRate - minRate)) * YAxisLength;
      elements.push({
        group: "nodes",
        data: {
          id: key,
          label: `${MONTHS[key.substr(5, 7)]} ${key.substr(0, 4)} - ${this._historicalRates[key].toFixed(2)}`
        },
        position: { x: xCoordinate, y: yCoordinate }
      });
      i += 1;
    });

    // adding edges
    for (i = 0; i < keys.length - 1; i++) {
      elements.push({
        group: "edges",
        data: {
          id: `e ${i}`,
          source: keys[i],
          target: keys[i + 1]
        }
      });
    }
    return elements;
  }

  /**
   * Updates the nodes and animates them to its new positions.
   */
  updateElements() {
    const YAxisLength = this.cy.height();
    const XAxisLength = this.cy.width();
    const { minRate, maxRate } = this.getRatesBounds();

    var i = 0;
    for (const key in this._historicalRates) {
      // calculating the position of the nodes relative to canvas
      const xCoordinate = (i / 11) * XAxisLength;
      const yCoordinate = YAxisLength - ((this._historicalRates[key] - minRate) / (maxRate - minRate)) * YAxisLength;
      
      this.cy.$(`node#${key}`).data({
        label: `${MONTHS[key.substr(5, 7)]} ${key.substr(0, 4)} - ${this._historicalRates[key].toFixed(2)}`
      });
      this.cy.elements(`node#${key}`).animate({
        position: { x: xCoordinate, y: yCoordinate }
      }, {
        duration: 1000
      });
      i += 1;
    };
  }
  

  /**
   * Render's graph using the elements received from the parent component
   */
  updateGraph() {
    if (this.elements) {
      //this.cy.remove(this.elements);
      this.cy.autolock(false); // unlocking the nodes
      this.cy.panningEnabled(true);
      this.updateElements();
    } else {
      this.elements = this.cy.add(this.generateElements());
    }
    this.cy.fit(this.elements, 2); // to fit the elements to canvas
    this.cy.zoomingEnabled(false); // to disable zooming

    // allowing the graph to animate and than locking it in place
    setTimeout(() => {
      this.cy.panningEnabled(false);
      this.cy.autolock(true); // to lock the nodes in place
    }, 1000);
  }
}
