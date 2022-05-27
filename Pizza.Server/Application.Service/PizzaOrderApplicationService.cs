using Application.Service.Models;
using Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Service
{
    public class PizzaOrderApplicationService : IPizzaOrderApplicationService
    {
        private readonly IPizzaOrderRepository _repo;
        public PizzaOrderApplicationService(IPizzaOrderRepository repo)
        {
            _repo = repo;
        }

        public async Task<int> OrderPizzaAsync(Models.Order o)
        {
            return await _repo.SaveOrderAsync(new Repository.Order { CustomerName = o.CustomerName, Address = o.Address, Pizza= o.Pizza, OrderValue=o.OrderValue });
        }
    }
}
