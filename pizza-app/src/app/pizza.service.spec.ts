import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { PizzaService } from './pizza.service';

describe('PizzaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PizzaService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([PizzaService], (service: PizzaService) => {
    expect(service).toBeTruthy();
  }));
});
