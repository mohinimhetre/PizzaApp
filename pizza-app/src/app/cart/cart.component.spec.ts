import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { CartService } from '../cart.service';
import { pizzas } from '../Mock-data/Mock-data.test';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let cartService: CartService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports: [HttpClientModule, MatDialogModule],
      providers: [CartService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    cartService = fixture.debugElement.injector.get(CartService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should open dialog on clicking pizza item', () => {
    const dialogSpy = spyOn(TestBed.get(MatDialog), 'open');
    cartService.addPizzaToCart(pizzas[0]);
    fixture.detectChanges();
    const pizzaItemEle = fixture.debugElement.query(By.css('#pizzaItem0'));
    pizzaItemEle.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(dialogSpy).toHaveBeenCalled();
  });

  it('should remove pizza and recalculate total after removing pizza', () => {
    const dialogSpy = spyOn(TestBed.get(MatDialog), 'open');
    cartService.addPizzaToCart(pizzas[0]);
    fixture.detectChanges();
    expect(cartService.cartValue).toEqual(pizzas[0].price);
    const pizzaItemEle = fixture.debugElement.query(By.css('#removePizza0'));
    pizzaItemEle.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(cartService.cartPizzas.length).toEqual(0);
    expect(cartService.cartValue).toEqual(0);
  });
});
