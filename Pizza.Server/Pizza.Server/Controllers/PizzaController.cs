using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Service;
using Application.Service.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Pizza.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PizzaController : ControllerBase
    {
        private readonly IPizzaApplicationService _service;
        public PizzaController(IPizzaApplicationService service)
        {
            _service = service;
        }
        // GET: api/<PizzaController>
        [HttpGet("Pizzas")]
        public IEnumerable<Application.Service.Models.Pizza> GetVegPizzas()
        {
            return _service.GetPizzas();
        }

        [HttpGet("Sides")]
        public IEnumerable<Side> GetSides()
        {
            return _service.GetSides();
        }

        [HttpGet("sauces")]
        public IEnumerable<Sauce> GetSauces()
        {
            return _service.GetSauces();
        }

        [HttpGet("Toppins")]
        public IEnumerable<Toppin> GetToppins()
        {
            return _service.GetToppins();
        }
    }
}
