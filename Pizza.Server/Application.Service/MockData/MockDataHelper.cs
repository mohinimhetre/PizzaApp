using Application.Service.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.Service
{
    internal class MockDataHelper
    {
        internal static IEnumerable<Models.Pizza> GetPizzas()
        {
            return new Models.Pizza[] {
                new Models.Pizza { Id = 1, Name="Neapolitan Pizza", Init="v", Image="assets/1.png", Price=100, PizzaBase="Thin crust", PizzaType="Cheese burst",
                Toppins= ((List<Toppin>)GetToppins()).Take(2) },
                new Models.Pizza { Id = 2, Name = "Chicago Pizza", Init = "v", Image = "assets/2.png", Price = 100, PizzaBase = "Multigrain", PizzaType = "Cheese burst",
                Toppins= ((List<Toppin>)GetToppins()).Skip(2).Take(2)},
                new Models.Pizza { Id = 3, Name="Sicilian Pizza", Init="v", Image="assets/3.png", Price=100, PizzaBase="Flat bread", PizzaType="No Cheese",
                Toppins= ((List<Toppin>)GetToppins()).Skip(2).Take(2)},
                new Models.Pizza { Id = 4, Name = "Greek Pizza", Init = "v", Image = "assets/4.png", Price = 100, PizzaBase = "Thin crust", PizzaType = "No Cheese",
                Toppins= ((List<Toppin>)GetToppins()).Skip(2).Take(2)},
                new Models.Pizza { Id = 5, Name="Detroit Pizza", Init="v", Image="assets/5.png", Price=100, PizzaBase="Regular base", PizzaType="Cheese Topping",
                Toppins= ((List<Toppin>)GetToppins()).Skip(2).Take(2)},
                new Models.Pizza { Id = 6, Name = "Olive Garden", Init = "v", Image = "assets/6.png", Price = 100, PizzaBase = "Multigrain", PizzaType = "Cheese Topping",
                Toppins= ((List<Toppin>)GetToppins()).Skip(2).Take(2)},
                new Models.Pizza { Id = 7, Name="Little Italy", Init="v", Image="assets/7.png", Price=100, PizzaBase="Thin crust", PizzaType="Cheese Topping",
                Toppins= ((List<Toppin>)GetToppins()).Skip(2).Take(2)},
                new Models.Pizza { Id = 8, Name="New York-Style Pizza", Init="n", Image="assets/8.png", Price=100, PizzaBase="Thin crust", PizzaType="Cheese burst",
                Toppins= ((List<Toppin>)GetToppins()).Skip(4).Take(2)},
                new Models.Pizza { Id = 9, Name = "California Pizza", Init = "n", Image = "assets/1.png", Price = 100, PizzaBase = "Multigrain", PizzaType = "No Cheese",
                Toppins= ((List<Toppin>)GetToppins()).Skip(4).Take(2)},
                new Models.Pizza { Id = 10, Name="St. Louis Pizza", Init="n", Image="assets/2.png", Price=100, PizzaBase="", PizzaType="Cheese Topping",
                Toppins= ((List<Toppin>)GetToppins()).Skip(4).Take(2)}
            };
        }

        internal static IEnumerable<Side> GetSides()
        {
            return new List<Side> {
                new Side { Id = 1, Name="Garlic bread", Init="v", Image="assets/garlicbread.png", Price=129 },
                new Side { Id = 1, Name = "Spicy Backed Chicken Wings", Init = "n", Image = "assets/chickenwing.png", Price = 139 }
            };
        }

        internal static IEnumerable<Sauce> GetSauces()
        {
            return new List<Sauce> {
                new Sauce { Id = 1, Name="Schezwan", Price=50 },
                new Sauce { Id = 2, Name = "marinara", Price = 50 },
                new Sauce { Id = 3, Name = "ranch", Price = 60 }
            };
        }

        internal static IEnumerable<Toppin> GetToppins()
        {
            return new List<Toppin> {
                new Toppin { Id = 1, Name="Onion", Init="v", Image="assets/onion.png", Price=50 },
                new Toppin { Id = 2, Name = "Sweet corn", Init = "v", Image = "assets/sweetcorn.png", Price = 60 },
                new Toppin { Id = 3, Name = "Olives", Init = "v", Image = "assets/olive.png", Price = 60 },
                new Toppin { Id = 4, Name = "Baby corn", Init = "v", Image = "assets/babycorn.png", Price = 60 },
                new Toppin { Id = 1, Name="Chicken tikka", Init="n", Image="assets/nonveg.png", Price=80 },
                new Toppin { Id = 2, Name = "Herbed chicken", Init = "n", Image = "assets/nonveg.png", Price = 80 }
            };
        }
    }
}
