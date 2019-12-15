import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

// setting headers
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class ExchangeRatesService {
  exchangeRatesUrl: string =
    "https://cors-anywhere.herokuapp.com/https://api.exchangeratesapi.io"; // cors proxy is used to allow cross origin requests

  constructor(private http: HttpClient) {}

  // FetchExchangeRate
  fetchExchangeRate(fromCurrency: string, toCurrency: string): Observable<any> {
    const reqUrl: string = `${this.exchangeRatesUrl}/latest?base=${fromCurrency}&symbols=${toCurrency}`;
    return this.http.get(reqUrl, httpOptions);
  }

  // FetchHistoricalRates
  fetchHistoricalRates(
    fromCurrency: string,
    toCurrency: string
  ): Observable<any> {
    var endDate = new Date().toLocaleDateString("en-CA");
    const today = new Date();
    var startDate = new Date(
      today.setFullYear(today.getFullYear() - 1)
    ).toLocaleDateString("en-CA");
    const reqUrl: string = `${this.exchangeRatesUrl}/history?base=${fromCurrency}&symbols=${toCurrency}&start_at=${startDate}&end_at=${endDate}`;
    return this.http.get(reqUrl, httpOptions).pipe(
      map((response: any) => {
        console.log("Map data", response);
        return this.process(response.rates, toCurrency);
      })
    );
  }

  process(data: any, toCurrency: string) {
    // grouping by month
    var grouped = {};
    Object.keys(data)
      .sort()
      .map(key => {
        if (key.substring(0, 7) in grouped) {
          grouped[key.substring(0, 7)].push(data[key][toCurrency]);
        } else {
          grouped[key.substring(0, 7)] = [];
        }
      });
    delete grouped[Object.keys(grouped)[0]];

    // getting average rates over each month
    Object.keys(grouped)
      .sort()
      .map(key => {
        let count = grouped[key].length;
        grouped[key] = grouped[key].reduce(
          (previous, current) => (current += previous)
        );
        grouped[key] /= count;
      });
    return grouped;
  }
}
