import { Component, OnInit } from "@angular/core";
import SUPPORTED_CURRENCIES from "../../shared/currencies";
import { ExchangeRatesService } from "../../services/exchange-rates.service";
import { send } from 'q';

@Component({
  selector: "app-converter",
  templateUrl: "./converter.component.html",
  styleUrls: ["./converter.component.css"]
})
export class ConverterComponent implements OnInit {

  currencies: any; // to store supported currencies

  // TODO Add Model for from and to currency
  fromCurrency = {
    code: "GBP",
    value: 0,
    rate: 0,
    metaData: {}
  };

  toCurrency = {
    code: "USD",
    value: 0,
    rate: 0,
    metaData: {}
  };

  historicalRates: Object;

  constructor(private exchangeRatesService: ExchangeRatesService) {
    console.log(SUPPORTED_CURRENCIES);
    this.currencies = SUPPORTED_CURRENCIES;
    const fromCurrencyData = this.currencies.filter(currency => currency.currencyCode === this.fromCurrency.code)[0];
    this.fromCurrency.metaData = fromCurrencyData
    const toCurrencyData = this.currencies.filter(currency => currency.currencyCode === this.toCurrency.code)[0];
    this.toCurrency.metaData = toCurrencyData
    console.log(this.fromCurrency)
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
  selectsChanged(sender: string) {
    const target = (sender == "fromCurrency") ? "toCurrency" : "fromCurrency";
    const currencyData = this.currencies.filter(currency => currency.currencyCode === this[sender].code)[0];
    this[sender].metaData = currencyData
    this.fetchExchangeRates().then(()=>{
      this[target].value = Math.round(this[sender].value * this[sender].rate * 100) / 100;
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
