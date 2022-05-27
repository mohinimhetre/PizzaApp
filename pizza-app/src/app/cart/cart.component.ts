import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Pizza } from '../pizza';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PizzaDetailComponent } from '../pizza-detail/pizza-detail.component';
import { Order } from '../Models/order.model';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  get pizzas () { 
    return this.cartService.cartPizzas$; 
  }

  constructor(private cartService: CartService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  removePizza(pizza: Pizza) {
    this.cartService.removePizzaFromCart(pizza);
  }

  customizePizza(pizza: Pizza) {
    const dialogRef = this.dialog.open(PizzaDetailComponent, {
      width: '500px',
      data: this.cartService.cartPizzas.indexOf(pizza),
    });

  }

  orderNow() {
    var order = new Order();
    order.address = "Pune";
    order.customerName = "Mohini";
    order.pizza = JSON.stringify(this.cartService.cartPizzas);
    order.orderValue = this.cartService.cartValue;
    this.cartService.saveOrder(order);
  }
}
