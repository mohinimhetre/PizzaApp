using Application.Service.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Service
{
    public class PizzaApplicationService : IPizzaApplicationService
    {
        public IEnumerable<Pizza> GetPizzas()
        {
            return MockDataHelper.GetPizzas();
        }

        public IEnumerable<Side> GetSides()
        {
            return MockDataHelper.GetSides();
        }

        public IEnumerable<Sauce> GetSauces()
        {
            return MockDataHelper.GetSauces();
        }

        public IEnumerable<Toppin> GetToppins()
        {
            return MockDataHelper.GetToppins();
        }
    }
}
