import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
import { CartService } from '../cart.service';
import { Pizza }         from '../pizza';
import { PizzaService }  from '../pizza.service';

@Component({
  selector: 'app-pizza-main-layout',
  templateUrl: './pizza-main-layout.component.html',
  styleUrls: ['./pizza-main-layout.component.css']
})

export class PizzaMainLayoutComponent implements OnInit {
  pizzas: Pizza[];
  originalPizzas: Pizza[];
  addedPizzas: Pizza[]  = [];
  //pizzas$: Observable<Pizza[]>;
  total: number =0;
  private searchTerms = new Subject<any>();
  
  selectedBase: string = '';
  selectedType: string = '';
  price: number;
  pizzaToggle : string = '';

  bases = [
    {value: 'Thin crust', viewValue: 'Thin crust'},
    {value: 'Regular base', viewValue: 'Regular base'},
    {value: 'Flat bread', viewValue: 'Flat bread'},
    {value: 'Multigrain', viewValue: 'Multigrain'}
  ];

  types = [
    {value: 'Cheese burst', viewValue: 'Cheese burst'},
    {value: 'Cheese Topping', viewValue: 'Cheese Topping'},
    {value: 'No cheese', viewValue: 'No cheese'}
  ];


  constructor(private pizzaService: PizzaService, private cartService: CartService) { }

  ngOnInit() : void {
    this.pizzaService.searchPizza().subscribe(x => {
      this.pizzas = x;
      this.originalPizzas = x;
    });
    this.pizzaService.getToppins();
  }
   
  setToggleValue(term: any): void {

   this.pizzaToggle = term
   this.search();

  }
  
   search() : void{

      this.pizzas = this.originalPizzas.filter((x: Pizza) => {
        var pick = false;
        if(this.selectedBase)
          pick = x.pizzaBase == this.selectedBase;
         else
          pick = x.pizzaBase != '';
        
        if(this.selectedType)
          pick = pick && x.pizzaType == this.selectedType;
         else
          pick = pick && x.pizzaType != '';
        
          if(this.pizzaToggle)
          pick = pick && x.init == this.pizzaToggle;
         else
          pick = pick && x.init != '';
          return pick;
      });
  }
  
  addPizza(pizza:Pizza) {
    this.cartService.addPizzaToCart(pizza);
  }
}
