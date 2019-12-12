import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

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
    "https://cors-anywhere.herokuapp.com/https://api.exchangeratesapi.io";
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
    let start_date = "2018-12-10";
    let end_date = "2019-12-10";
    let params = {
      base: fromCurrency,
      symbols: toCurrency,
      start_at: start_date,
      end_at: end_date
    };
    const queryString = Object.keys(params)
      .map(key => key + "=" + params[key])
      .join("&");
    const reqUrl: string = `${this.exchangeRatesUrl}/${this.latest}?${queryString}`;
    return this.http.get(reqUrl, httpOptions);
  }
}
