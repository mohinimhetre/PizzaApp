import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartService } from '../cart.service';
import { pizzas } from '../Mock-data/Mock-data.test';
import { PizzaService } from '../pizza.service';

import { PizzaMainLayoutComponent } from './pizza-main-layout.component';

describe('PizzaMainLayoutComponent', () => {
  let component: PizzaMainLayoutComponent;
  let fixture: ComponentFixture<PizzaMainLayoutComponent>;
  let cartService: CartService;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaMainLayoutComponent ],
      imports: [HttpClientModule, MatButtonToggleModule, MatSelectModule, BrowserAnimationsModule],
      providers: [PizzaService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaMainLayoutComponent);
    component = fixture.componentInstance;
    cartService = fixture.debugElement.injector.get(CartService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add pizza to the cart after clicking Add button', () => {
    component.pizzas = pizzas;
    fixture.detectChanges();
    const pizzaItemEle = fixture.debugElement.query(By.css('#addPizza1'));
    pizzaItemEle.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(cartService.cartPizzas.length).toEqual(1);
    expect(cartService.cartPizzas[0].id).toEqual(1);
    expect(cartService.cartValue).toEqual(pizzas[0].price);
  });

  it('should add pizza to the cart after clicking Add button', () => {
    component.pizzas = pizzas;
    component.originalPizzas = pizzas;
    component.selectedBase = 'Multigrain';
    component.selectedType = 'Cheese burst';
    component.pizzaToggle = 'v';
    component.search();
    fixture.detectChanges();
    const isFiltered = component.pizzas.every(x => x.pizzaBase === 'Multigrain' && x.pizzaType === 'Cheese burst'&& x.init === 'v');
    expect(isFiltered).toBeTruthy();
  });
});
