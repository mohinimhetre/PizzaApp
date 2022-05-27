import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Order } from "./Models/order.model";
import { Pizza } from "./pizza";

@Injectable({providedIn: 'root'})
export class CartService {
    cartPizzas$ = new BehaviorSubject<Pizza[]>([]);
    cartValue$ = new BehaviorSubject<number>(0);
    cartPizzas: Pizza[] = [];
    cartValue: number = 0;

    constructor(private http: HttpClient) {

    }
    addPizzaToCart(pizza: Pizza) {
        this.cartPizzas.push(pizza);
        this.cartValue += pizza.price;
        this.cartValue$.next(this.cartValue); 
        this.cartPizzas$.next(this.cartPizzas);
      }

    removePizzaFromCart(pizza: Pizza) {
        var index = this.cartPizzas.indexOf(pizza);
        this.cartPizzas.splice(index, 1);

        this.cartValue -= pizza.price;
        this.cartValue$.next(this.cartValue);
        this.cartPizzas$.next(this.cartPizzas);
    }

    addCartValue(value: number) {    
        this.cartValue += value; 
        this.cartValue$.next(this.cartValue);   
    }
    
    substractCartValue(value: number) {    
        this.cartValue -= value; 
        this.cartValue$.next(this.cartValue);   
    } 

    saveOrder(order: Order): void {
        this.http.post('http://localhost:60046/api/order', order)
        .subscribe(x => {
            console.log('saved');
        },
          catchError((this.handleError<Pizza[]>('searchPizzas', [])))
          );
      }

      private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
           console.error(`${operation} failed: ${error.message}`);
          return of(result as T);
        };
      }
      private log(message: string) {
        console.error('PizzaService: ' + message);
      }
}