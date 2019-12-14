import { Component, OnInit } from "@angular/core";
import SUPPORTED_CURRENCIES from "../../shared/currencies";
import { ExchangeRatesService } from "../../services/exchange-rates.service";

@Component({
  selector: "app-converter",
  templateUrl: "./converter.component.html",
  styleUrls: ["./converter.component.css"]
})
export class ConverterComponent implements OnInit {
  value: Number = 1;

  currencies: Object;

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

  fetchExchangeRates() {
    this.exchangeRatesService
      .fetchExchangeRate(this.fromCurrency.code, this.toCurrency.code)
      .subscribe(data => {
        console.log("ExchangeRatesAPI response", data);
        this.fromCurrency.rate = data.rates[this.toCurrency.code];
        this.toCurrency.rate = 1 / data.rates[this.toCurrency.code];
      });
  }

  fetchHistoricalRates() {
    this.exchangeRatesService
      .fetchHistoricalRates(this.fromCurrency.code, this.toCurrency.code)
      .subscribe(data => {
        console.log("Historical Rates response", data);
        this.historicalRates = data;
      });
  }

  selectsChanged() {
    this.fetchExchangeRates();
    this.toCurrency.value =
      Math.round(this.fromCurrency.value * this.fromCurrency.rate * 100) / 100;
    console.log(this.fromCurrency);
    this.fetchHistoricalRates();
  }

  fromValueChanged(event: any) {
    this.toCurrency.value =
      Math.round(event.target.value * this.fromCurrency.rate * 100) / 100;
  }

  toValueChanged(event: any) {
    this.fromCurrency.value =
      Math.round(event.target.value * this.toCurrency.rate * 100) / 100;
  }
}
