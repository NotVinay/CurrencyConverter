import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from '../../environments/environment';

// headers for http rquest
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class ExchangeRatesService {
  constructor(private http: HttpClient) {}

  /**
   * Fetches exchange rate from api
   * @param fromCurrency base currency code
   * @param toCurrency currency code to convert to
   */
  fetchExchangeRate(fromCurrency: string, toCurrency: string): Observable<any> {
    const reqUrl: string = `${environment.exchangeRatesApi}/latest?base=${fromCurrency}&symbols=${toCurrency}`;
    return this.http.get(reqUrl, httpOptions);
  }

  /**
   * Fetches exchange rates over last 12 months
   * @param fromCurrency base currency code 
   * @param toCurrency currency code to convert to 
   */
  fetchHistoricalRates(
    fromCurrency: string,
    toCurrency: string
  ): Observable<any> {
    var endDate = new Date().toLocaleDateString("en-CA");
    const today = new Date();
    var startDate = new Date(today.setFullYear(today.getFullYear() - 1)).toLocaleDateString("en-CA");
    const reqUrl: string = `${environment.exchangeRatesApi}/history?base=${fromCurrency}&symbols=${toCurrency}&start_at=${startDate}&end_at=${endDate}`;
    return this.http.get(reqUrl, httpOptions).pipe(
      map((response: any) => {
        return this.process(response.rates, toCurrency);
      })
    );
  }

  /**
   * Processes historical rates to find average rate over each month.
   * @param historicalRates historical rates data to process
   * @param toCurrency 
   */
  process(historicalRates: any, toCurrency: string) {
    // grouping by month
    var grouped = {};
    Object.keys(historicalRates)
      .sort()
      .map(key => {
        if (key.substring(0, 7) in grouped) {
          grouped[key.substring(0, 7)].push(historicalRates[key][toCurrency]);
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
