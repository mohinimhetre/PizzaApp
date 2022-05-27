using Application.Service.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Service
{
    public interface IPizzaOrderApplicationService
    {
        Task<int> OrderPizzaAsync(Models.Order order);
    }
}
