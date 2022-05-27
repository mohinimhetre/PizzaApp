import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';
import { CartService } from '../cart.service';
import { Toppins } from '../Models/toppins.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent implements OnInit {
  pizza: Pizza;
  bases = [
    {value: 'Thin crust', viewValue: 'Thin crust'},
    {value: 'Regular base', viewValue: 'Regular base'},
    {value: 'Flat bread', viewValue: 'Flat bread'},
    {value: 'Multigrain', viewValue: 'Multigrain'}
  ];

  types = [
    {value: 'Cheese burst', viewValue: 'Cheese burst'},
    {value: 'Cheese Topping', viewValue: 'Cheese Topping'},
    {value: 'No Cheese', viewValue: 'No Cheese'}
  ];

  constructor(
    public pizzaService: PizzaService,
    public cartService: CartService,
    @Inject(MAT_DIALOG_DATA) public data: number) {
      var pizzaIn = data;
      this.pizza = this.cartService.cartPizzas[pizzaIn];
     }

  ngOnInit() {
  }

  removeToppin(toppin: Toppins) {
    var index = this.pizza.extraToppins.indexOf(toppin);
    this.pizza.extraToppins.splice(index, 1);
    this.cartService.substractCartValue(toppin.price);
  }

  addToppin(toppin: Toppins) {
    this.pizza.extraToppins.push(toppin);
    this.cartService.addCartValue(toppin.price);
  }

  getCommaSeparatedToppins(): string {
    var str = '';
    this.pizza.toppins.forEach(x => str += x.name + ',');
    return str;
  }
}
