import { Toppins } from "./Models/toppins.model";

export class Pizza {
  id: number;
  name: string;
  init: string;
  pizza: string;
  image: string;
  price: number;
  pizzaBase: string;
  pizzaType: string;
  toppins: Toppins[] = [];
  extraToppins: Toppins[] = [];
  sauce: string;
}