import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Pizza } from './pizza';
import { Toppins } from './Models/toppins.model';
import { CommonService } from './common.service';


@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private pizzaURL = 'api/pizzas';
  private pizzaServerUrl = 'http://localhost:60046/api/Pizza/';
  toppins$ = new BehaviorSubject<Toppins[]>([]);
  
  constructor(private http: HttpClient, private commonService: CommonService) { }

  searchPizza(): Observable<Pizza[]> {
    //const options = term ?
    //  { params: new HttpParams().set('init', term[0]).set('base', term[1]).set('type', term[2]) } : {};
    return this.http.get<Pizza[]>(this.pizzaServerUrl + 'Pizzas')
      .pipe(
      catchError((this.handleError<Pizza[]>('searchPizzas', [])))
      );
  }

  public updateToppins(toppins: Toppins[]) {
    this.toppins$.next(toppins);
  }

  getToppins(): void {
    this.http.get<Toppins[]>(this.pizzaServerUrl + 'Toppins')
      .subscribe(x => {
        this.updateToppins(x);
      },
      catchError((this.handleError<Pizza[]>('searchPizzas', [])))
      );
  }

  getPizza(id: number): Observable<Pizza> {
    const url = `${this.pizzaURL}/${id}`;
    return this.http.get<Pizza>(url).pipe(
      tap(_ => this.log(`fetched pizza id=${id}`)),
      catchError(this.handleError<Pizza>(`getPizza id=${id}`))
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