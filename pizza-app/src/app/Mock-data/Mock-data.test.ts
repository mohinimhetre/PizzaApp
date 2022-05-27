import { Toppins } from "../Models/toppins.model";
import { Pizza } from "../pizza";

export const pizzas: Pizza[] = [
    { id: 1, name: 'Neapolitan Pizza',init:'v', pizza: 'Veg', image: 'assets/1.png',price: 200, pizzaBase: 'Thin crust', pizzaType: 'Cheese burst', toppins: [], extraToppins: [], sauce: ''},
    { id: 2, name: 'Chicago Pizza',init:'v', pizza: 'Veg', image: './assets/2.png',price: 300, pizzaBase: 'Multigrain', pizzaType: 'Cheese burst', toppins: [], extraToppins: [], sauce: '' },
    { id: 3, name: 'New York-Style Pizza',init:'n', pizza: 'Non Veg', image: 'assets/3.png',price: 200, pizzaBase: 'Regular base', pizzaType: 'Cheese burst', toppins: [], extraToppins: [], sauce: '' },
    { id: 4, name: 'Sicilian Pizza',init:'v', pizza: 'Veg', image: 'assets/4.png',price: 300, pizzaBase: 'Flat bread', pizzaType: 'Cheese burst', toppins: [], extraToppins: [], sauce: '' },
    { id: 5, name: 'Greek Pizza',init: 'v', pizza: 'Veg', image: 'assets/5.png',price: 200, pizzaBase: 'Thin crust', pizzaType: 'Cheese burst', toppins: [], extraToppins: [], sauce: '' },
    { id: 6, name: 'California Pizza',init:'n', pizza: 'Non Veg', image: 'assets/6.png',price: 350, pizzaBase: 'Flat bread', pizzaType: 'Cheese burst', toppins: [], extraToppins: [], sauce: ''},
    { id: 7, name: 'Detroit Pizza',init:'v', pizza: 'Veg', image: 'assets/7.png',price: 150, pizzaBase: 'Thin crust', pizzaType: 'No Cheese', toppins: [], extraToppins: [], sauce: '' },
    { id: 8, name: 'St. Louis Pizza',init:'n', pizza: 'Non Veg', image: 'assets/8.png',price: 400, pizzaBase: 'Multigrain', pizzaType: 'Cheese burst', toppins: [], extraToppins: [], sauce: '' },
    { id: 9, name: 'Olive Garden',init:'v', pizza: 'Veg', image: 'assets/1.png',price: 250, pizzaBase: 'Thin crust', pizzaType: 'Cheese burst', toppins: [], extraToppins: [], sauce: '' },
    { id: 10, name: 'Little Italy',init:'v', pizza: 'Veg', image: 'assets/2.png',price: 200, pizzaBase: 'Flat bread', pizzaType: 'Cheese Topping', toppins: [], extraToppins: [], sauce: '' },
    { id: 11, name: 'Neapolitan Pizza',init:'v', pizza: 'Veg', image: 'assets/1.png',price: 200, pizzaBase: 'Thin crust', pizzaType: 'Cheese burst', toppins: [], extraToppins: [], sauce: ''},
    { id: 12, name: 'Chicago Pizza',init:'v', pizza: 'Veg', image: './assets/2.png',price: 300, pizzaBase: 'Multigrain', pizzaType: 'Cheese burst', toppins: [], extraToppins: [], sauce: '' },
    { id: 13, name: 'New York-Style Pizza',init:'n', pizza: 'Non Veg', image: 'assets/3.png',price: 400, pizzaBase: 'Regular base', pizzaType: 'Cheese burst', toppins: [], extraToppins: [], sauce: '' },
    { id: 14, name: 'Sicilian Pizza',init:'v', pizza: 'Veg', image: 'assets/4.png',price: 300, pizzaBase: 'Flat bread', pizzaType: 'Cheese burst' , toppins: [], extraToppins: [], sauce: ''},
    { id: 15, name: 'Greek Pizza',init: 'n', pizza: 'Non Veg', image: 'assets/5.png',price: 500, pizzaBase: 'Thin crust', pizzaType: 'Cheese burst', toppins: [], extraToppins: [], sauce: '' },
    { id: 16, name: 'California Pizza',init:'v', pizza: 'Veg', image: 'assets/6.png',price: 350, pizzaBase: 'Flat bread', pizzaType: 'Cheese burst', toppins: [], extraToppins: [], sauce: ''},
    { id: 17, name: 'Detroit Pizza',init:'v', pizza: 'Veg', image: 'assets/7.png',price: 250, pizzaBase: 'Regular base', pizzaType: 'Cheese burst', toppins: [], extraToppins: [], sauce: '' },
    { id: 18, name: 'St. Louis Pizza',init:'n', pizza: 'Veg', image: 'assets/8.png',price: 400, pizzaBase: 'Multigrain', pizzaType: 'Cheese burst', toppins: [], extraToppins: [], sauce: '' },
    { id: 19, name: 'Olive Garden',init:'v', pizza: 'Veg', image: 'assets/1.png',price: 250, pizzaBase: 'Thin crust', pizzaType: 'Cheese burst', toppins: [], extraToppins: [], sauce: '' },
    { id: 20, name: 'Little Italy',init:'v', pizza: 'Veg', image: 'assets/2.png',price: 600, pizzaBase: 'Multigrain', pizzaType: 'Cheese Topping', toppins: [], extraToppins: [], sauce: '' }
];

export const toppins: Toppins[] = [
    { id : 1, name :"Onion", init:"v", img:"assets/onion.png", price:50, isRemoved: false },
    { id : 2, name : "Sweet corn", init: "v", img: "assets/sweetcorn.png", price: 60, isRemoved: false },
    { id : 3, name : "Olives", init: "v", img: "assets/olive.png", price: 60, isRemoved: false },
    { id : 4, name : "Baby corn", init: "v", img: "assets/babycorn.png", price:60, isRemoved: false },
    { id : 1, name :"Chicken tikka", init:"n", img:"assets/nonveg.png", price:80, isRemoved: false },
    { id : 2, name : "Herbed chicken", init: "n", img: "assets/nonveg.png", price: 80, isRemoved: false }
]