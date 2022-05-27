import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartService } from '../cart.service';
import { pizzas, toppins } from '../Mock-data/Mock-data.test';
import { PizzaService } from '../pizza.service';

import { PizzaDetailComponent } from './pizza-detail.component';

describe('PizzaDetailComponent', () => {
  let component: PizzaDetailComponent;
  let fixture: ComponentFixture<PizzaDetailComponent>;
  let cartService: CartService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaDetailComponent ],
      imports: [HttpClientModule],
      providers: [CartService, PizzaService, {
        // I was expecting this will pass the desired value
        provide: MAT_DIALOG_DATA,
        useValue: 0
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaDetailComponent);
    component = fixture.componentInstance;
    cartService = fixture.debugElement.injector.get(CartService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update cart value on adding and removing toppins', () => {
    cartService.addPizzaToCart(pizzas[0]);
    fixture = TestBed.createComponent(PizzaDetailComponent);
    component = fixture.componentInstance;
    component.addToppin(toppins[0]);
    expect(cartService.cartValue).toEqual(component.pizza.price + toppins[0].price);

    component.removeToppin(component.pizza.extraToppins[0]);
    expect(cartService.cartValue).toEqual(component.pizza.price);
  });
});
