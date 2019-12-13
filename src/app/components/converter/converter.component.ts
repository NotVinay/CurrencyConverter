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

  constructor(private exchangeRatesService: ExchangeRatesService) {
    console.log(SUPPORTED_CURRENCIES);
    this.currencies = SUPPORTED_CURRENCIES;
  }

  ngOnInit() {
    this.fetchExchnangeRates();
  }

  fetchExchnangeRates() {
    this.exchangeRatesService
      .fetchExchangeRate(this.fromCurrency.code, this.toCurrency.code)
      .subscribe(data => {
        console.log("ExchangeRatesAPI response", data);
        this.fromCurrency.rate = data.rates[this.toCurrency.code];
        this.toCurrency.rate = 1 / data.rates[this.toCurrency.code];
      });
  }

  selectsChanged() {
    this.fetchExchnangeRates();
  }

  fromValueChanged(event: any) {
    this.toCurrency.value = Number(
      (event.target.value * this.fromCurrency.rate).toFixed(2)
    );
  }

  toValueChanged(event: any) {
    this.fromCurrency.value = Number(
      (event.target.value * this.toCurrency.rate).toFixed(2)
    );
  }
}
