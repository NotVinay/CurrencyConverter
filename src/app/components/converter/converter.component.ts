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

  ngOnInit() {}

  selectsChanged() {
    this.exchangeRatesService
      .fetchExchangeRate(this.fromCurrency.code, this.toCurrency.code)
      .subscribe(data => {
        console.log("ExchangeRatesAPI response", data);
        this.fromCurrency.rate = data.rates[this.toCurrency.code];
        this.toCurrency.rate = 1 / data.rates[this.toCurrency.code];
      });
  }

  fromValueChanged(event: any) {
    this.toCurrency.value = event.target.value * this.fromCurrency.rate;
  }

  toValueChanged(event: any) {
    this.fromCurrency.value = event.target.value * this.toCurrency.rate;
  }
}
