import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Toppins } from "./Models/toppins.model";
import { Pizza } from "./pizza";

@Injectable({providedIn: 'root'})
export class CommonService {
    pizzas$ = new BehaviorSubject<Pizza[]>([]);
    toppins$ = new BehaviorSubject<Toppins[]>([]);

    public updateToppins(toppins: Toppins[]) {
        this.toppins$.next(toppins);
    }
}