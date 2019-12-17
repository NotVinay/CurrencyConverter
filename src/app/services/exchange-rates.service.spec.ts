import { TestBed } from '@angular/core/testing';

import { ExchangeRatesService } from './exchange-rates.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ExchangeRatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [ExchangeRatesService]
  }));

  it('should be created', () => {
    const service: ExchangeRatesService = TestBed.get(ExchangeRatesService);
    expect(service).toBeTruthy();
  });
});
