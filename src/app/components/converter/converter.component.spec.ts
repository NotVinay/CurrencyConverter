import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConverterComponent } from './converter.component';
import { GraphComponent } from '../graph/graph.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ExchangeRatesService } from 'src/app/services/exchange-rates.service';
import { of, throwError } from 'rxjs'
import { By } from '@angular/platform-browser';

describe('ConverterComponent', () => {
  let component: ConverterComponent;
  let fixture: ComponentFixture<ConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConverterComponent, 
        GraphComponent
      ],
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule, NoopAnimationsModule, MatInputModule, MatSelectModule, MatFormFieldModule],
    
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve the exchange rate', async() => {
    let exchangeRatesService = fixture.debugElement.injector.get(ExchangeRatesService)
    let dummyData = {
      rates: {
        USD: 1.23
      }
    }
    let spy = spyOn(exchangeRatesService, 'fetchExchangeRate').and.returnValue(of(dummyData));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.fromCurrency.rate).toEqual(1.23)
    })
  });

  it('should display an error when fetching exchange rate fails', async() => {
    let errorHeading = fixture.debugElement.query(By.css('#result h4')).nativeElement;
    let errorText = fixture.debugElement.query(By.css('#result p')).nativeElement;
    let exchangeRatesService = fixture.debugElement.injector.get(ExchangeRatesService)
    let spy = spyOn(exchangeRatesService, 'fetchExchangeRate').and.returnValue(throwError(new Error('Test error')));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(errorHeading.textContent).toContain("Error")
      expect(errorText.textContent).toContain("Test error")
    })
  });


  it('should retrieve the historial rates', async() => {
    let exchangeRatesService = fixture.debugElement.injector.get(ExchangeRatesService)
    let dummyData = {
      '2019-01': 1.2898958840190473,
      '2019-02': 1.3006588375894739,
      '2019-03': 1.3166293173699999,
      '2019-04': 1.3036761502421055,
      '2019-05': 1.2821680706666667,
      '2019-06': 1.2676715292105263,
      '2019-07': 1.2465593665909092,
      '2019-08': 1.2155185257523808,
      '2019-09': 1.23659020485,
      '2019-10': 1.2647610716954545,
      '2019-11': 1.288256926955,
      '2019-12': 1.3174588555454545
    }
    let spy = spyOn(exchangeRatesService, 'fetchHistoricalRates').and.returnValue(of(dummyData));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.historicalRates).toEqual(dummyData)
    })
  });

  it('should display an error when fetching historical rates fails', async() => {
    let errorHeading = fixture.debugElement.query(By.css('#result h4')).nativeElement;
    let errorText = fixture.debugElement.query(By.css('#result p')).nativeElement;
    let exchangeRatesService = fixture.debugElement.injector.get(ExchangeRatesService)
    let spy = spyOn(exchangeRatesService, 'fetchHistoricalRates').and.returnValue(throwError(new Error('Test error')));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(errorHeading.textContent).toContain("Error")
      expect(errorText.textContent).toContain("Test error")
    })
  });

  it('should update to amount when from amount changes', () => {
    let fromInput = fixture.debugElement.query(By.css('#fromCurrencyValue input')).nativeElement;
    let toInput = fixture.debugElement.query(By.css('#toCurrencyValue input')).nativeElement;
    fromInput.value = 2.21;
    component.fromCurrency.rate = 1.23;
    fixture.detectChanges();
    fromInput.dispatchEvent(new KeyboardEvent('keyup', {code: 'Enter'}));
    fixture.detectChanges();
    expect(toInput.value).toBe((2.21*1.23).toFixed(2));
  });

  it('should update from amount when to amount changes', () => {
    let fromInput = fixture.debugElement.query(By.css('#fromCurrencyValue input')).nativeElement;
    let toInput = fixture.debugElement.query(By.css('#toCurrencyValue input')).nativeElement;
    toInput.value = 2.21;
    component.toCurrency.rate = 1.23;
    fixture.detectChanges();
    toInput.dispatchEvent(new KeyboardEvent('keyup', {code: 'Enter'}));
    fixture.detectChanges();
    expect(fromInput.value).toBe((2.21*1.23).toFixed(2));
  });
});
