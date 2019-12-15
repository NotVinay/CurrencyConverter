import { Component, OnInit } from "@angular/core";
import SUPPORTED_CURRENCIES from "../../shared/currencies";
import { ExchangeRatesService } from "../../services/exchange-rates.service";

@Component({
  selector: "app-converter",
  templateUrl: "./converter.component.html",
  styleUrls: ["./converter.component.css"]
})
export class ConverterComponent implements OnInit {

  currencies: Object; // to store supported currencies

  // TODO Add Model for from and to currency
  fromCurrency = {
    code: "GBP",
    value: 0,
    rate: 0
  };

  toCurrency = {
    code: "USD",
    value: 0,
    rate: 0
  };

  historicalRates: Object;

  constructor(private exchangeRatesService: ExchangeRatesService) {
    console.log(SUPPORTED_CURRENCIES);
    this.currencies = SUPPORTED_CURRENCIES;
  }

  ngOnInit() {
    this.fetchExchangeRates();
    this.fetchHistoricalRates();
  }

  /**
   * Fetches the latest exchange rates.
   * @returns boolean, true if fetching is successfull, false otherwise
   */
  fetchExchangeRates(): Promise<any> {
    let _this = this;
    var promise = new Promise(function(resolve, reject) {
      _this.exchangeRatesService
      .fetchExchangeRate(_this.fromCurrency.code, _this.toCurrency.code)
      .subscribe(data => {
        console.log("ExchangeRatesAPI response", data);
        _this.fromCurrency.rate = data.rates[_this.toCurrency.code];
        _this.toCurrency.rate = 1 / data.rates[_this.toCurrency.code];
        resolve(true)
      }, error=> {
        console.log("Error in fetching exchange rates")
        reject(true)
      });
    });
    return promise;
  }

  /**
   * Fetches the historical rates.
   */
  fetchHistoricalRates() {
    this.exchangeRatesService
      .fetchHistoricalRates(this.fromCurrency.code, this.toCurrency.code)
      .subscribe(data => {
        console.log("Historical Rates response", data);
        this.historicalRates = data;
      }, error=> {
        console.log("Error in fetching exchange rates")
      });
  }

  /**
   * This function is called when currency selects are changed.
   */
  selectsChanged() {
    this.fetchExchangeRates().then(()=>{
      this.toCurrency.value = Math.round(this.fromCurrency.value * this.fromCurrency.rate * 100) / 100;
      console.log(this.fromCurrency);
    })
    this.fetchHistoricalRates();
  }

  /**
   * This function is called when from currency value is changed.
   */
  fromValueChanged(event: any) {
    this.toCurrency.value = Math.round(event.target.value * this.fromCurrency.rate * 100) / 100;
  }

  /**
   * This function is called when to currency value is changed.
   */
  toValueChanged(event: any) {
    this.fromCurrency.value = Math.round(event.target.value * this.toCurrency.rate * 100) / 100;
  }
}
