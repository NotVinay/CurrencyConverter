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
  latest: string = "latest";
  history: string = "history";

  constructor(private http: HttpClient) {}

  // FetchExchangeRate
  fetchExchangeRate(fromCurrency: string, toCurrency: string): Observable<any> {
    let params = {
      base: fromCurrency,
      symbols: toCurrency
    };
    const queryString = Object.keys(params)
      .map(key => key + "=" + params[key])
      .join("&");
    const reqUrl: string = `${this.exchangeRatesUrl}/${this.latest}?${queryString}`;
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
    let params = {
      base: fromCurrency,
      symbols: toCurrency,
      start_at: startDate,
      end_at: endDate
    };
    const queryString = Object.keys(params)
      .map(key => key + "=" + params[key])
      .join("&");
    const reqUrl: string = `${this.exchangeRatesUrl}/${this.history}?${queryString}`;
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
