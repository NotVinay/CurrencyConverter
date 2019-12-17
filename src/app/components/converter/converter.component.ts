import { Component, OnInit } from "@angular/core";
import SUPPORTED_CURRENCIES from "../../shared/currencies";
import { ExchangeRatesService } from "../../services/exchange-rates.service";
import { FormControl, Validators } from '@angular/forms';
import { MatErrorStateMatcher } from "../../shared/errorStateMatcher"

@Component({
  selector: "app-converter",
  templateUrl: "./converter.component.html",
  styleUrls: ["./converter.component.css"]
})
export class ConverterComponent implements OnInit {

  currencies: any; // to store supported currencies

  error = null;

  loading = false

  // TODO Add Model for from and to currency
  fromCurrency = {
    code: "GBP",
    value: new FormControl(0, [
      Validators.required]),
    rate: 0,
    metaData: {}
  };

  toCurrency = {
    code: "USD",
    value: new FormControl(0, [
      Validators.required]),
    rate: 0,
    metaData: {}
  };

  matcher = new MatErrorStateMatcher();

  historicalRates: Object;

  constructor(private exchangeRatesService: ExchangeRatesService) {
    this.currencies = SUPPORTED_CURRENCIES;
    const fromCurrencyData = this.currencies.filter(currency => currency.currencyCode === this.fromCurrency.code)[0];
    this.fromCurrency.metaData = fromCurrencyData
    const toCurrencyData = this.currencies.filter(currency => currency.currencyCode === this.toCurrency.code)[0];
    this.toCurrency.metaData = toCurrencyData
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
    this.loading = true
    this.error = null
    var promise = new Promise(function(resolve, reject) {
      _this.exchangeRatesService
      .fetchExchangeRate(_this.fromCurrency.code, _this.toCurrency.code)
      .subscribe(data => {
        _this.fromCurrency.rate = data.rates[_this.toCurrency.code];
        _this.toCurrency.rate = 1 / data.rates[_this.toCurrency.code];
        resolve(true)
        _this.loading = false
      }, error=> {
        reject(true)
        _this.loading = false
        _this.error = "Error in fetching Exchange Rates"
      });
    });
    return promise;
  }

  /**
   * Fetches the historical rates.
   */
  fetchHistoricalRates() {
    this.loading = true
    this.error = null
    this.exchangeRatesService
      .fetchHistoricalRates(this.fromCurrency.code, this.toCurrency.code)
      .subscribe(data => {
        console.log("Historical Rates response", data);
        this.historicalRates = data;
        this.loading = false
      }, error=> {
        console.log("error", error)
        this.loading = false
        this.error = "Error in fetching historial rates"
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
      if(this[sender].value.valid) {
        this[target].value.setValue(Math.round(this[sender].value.value * this[sender].rate * 100) / 100);
      }
    })
    this.fetchHistoricalRates();
  }

  /**
   * This function is called when from currency value is changed.
   */
  fromValueChanged(event: any) {
    if(this.fromCurrency.value.valid) {
      this.toCurrency.value.setValue(Math.round(event.target.value * this.fromCurrency.rate * 100) / 100);
    }
  }

  /**
   * This function is called when to currency value is changed.
   */
  toValueChanged(event: any) {
    if(this.toCurrency.value.valid) {
      this.fromCurrency.value.setValue(Math.round(event.target.value * this.toCurrency.rate * 100) / 100);
    }
  }
}
