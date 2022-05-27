import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pizzas = [
      { id: 1, name: 'Neapolitan Pizza',init:'v', pizza: 'Veg', image: 'assets/1.png',price: 200, base: 'Thin crust', type: 'Cheese burst'},
      { id: 2, name: 'Chicago Pizza',init:'v', pizza: 'Veg', image: './assets/2.png',price: 300, base: 'Multigrain', type: 'Cheese burst' },
      { id: 3, name: 'New York-Style Pizza',init:'n', pizza: 'Non Veg', image: 'assets/3.png',price: 200, base: 'Regular base', type: 'Cheese burst' },
      { id: 4, name: 'Sicilian Pizza',init:'v', pizza: 'Veg', image: 'assets/4.png',price: 300, base: 'Flat bread', type: 'Cheese burst' },
      { id: 5, name: 'Greek Pizza',init: 'v', pizza: 'Veg', image: 'assets/5.png',price: 200, base: 'Thin crust', type: 'Cheese burst' },
      { id: 6, name: 'California Pizza',init:'n', pizza: 'Non Veg', image: 'assets/6.png',price: 350, base: 'Flat bread', type: 'Cheese burst'},
      { id: 7, name: 'Detroit Pizza',init:'v', pizza: 'Veg', image: 'assets/7.png',price: 150, base: 'Thin crust', type: 'No Cheese' },
      { id: 8, name: 'St. Louis Pizza',init:'n', pizza: 'Non Veg', image: 'assets/8.png',price: 400, base: 'Multigrain', type: 'Cheese burst' },
      { id: 9, name: 'Olive Garden',init:'v', pizza: 'Veg', image: 'assets/1.png',price: 250, base: 'Thin crust', type: 'Cheese burst' },
      { id: 10, name: 'Little Italy',init:'v', pizza: 'Veg', image: 'assets/2.png',price: 200, base: 'Flat bread', type: 'Cheese Topping' },
      { id: 11, name: 'Neapolitan Pizza',init:'v', pizza: 'Veg', image: 'assets/1.png',price: 200, base: 'Thin crust', type: 'Cheese burst'},
      { id: 12, name: 'Chicago Pizza',init:'v', pizza: 'Veg', image: './assets/2.png',price: 300, base: 'Multigrain', type: 'Cheese burst' },
      { id: 13, name: 'New York-Style Pizza',init:'n', pizza: 'Non Veg', image: 'assets/3.png',price: 400, base: 'Regular base', type: 'Cheese burst' },
      { id: 14, name: 'Sicilian Pizza',init:'v', pizza: 'Veg', image: 'assets/4.png',price: 300, base: 'Flat bread', type: 'Cheese burst' },
      { id: 15, name: 'Greek Pizza',init: 'n', pizza: 'Non Veg', image: 'assets/5.png',price: 500, base: 'Thin crust', type: 'Cheese burst' },
      { id: 16, name: 'California Pizza',init:'v', pizza: 'Veg', image: 'assets/6.png',price: 350, base: 'Flat bread', type: 'Cheese burst'},
      { id: 17, name: 'Detroit Pizza',init:'v', pizza: 'Veg', image: 'assets/7.png',price: 250, base: 'Regular base', type: 'Cheese burst' },
      { id: 18, name: 'St. Louis Pizza',init:'n', pizza: 'Veg', image: 'assets/8.png',price: 400, base: 'Multigrain', type: 'Cheese burst' },
      { id: 19, name: 'Olive Garden',init:'v', pizza: 'Veg', image: 'assets/1.png',price: 250, base: 'Thin crust', type: 'Cheese burst' },
      { id: 20, name: 'Little Italy',init:'v', pizza: 'Veg', image: 'assets/2.png',price: 600, base: 'Multigrain', type: 'Cheese Topping' }

    ];
    return {pizzas};
  }
}