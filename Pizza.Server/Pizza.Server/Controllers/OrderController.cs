using Application.Service;
using Application.Service.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Pizza.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IPizzaOrderApplicationService _service;
        public OrderController(IPizzaOrderApplicationService service)
        {
            _service = service;
        }

        // POST api/<ValuesController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Order order)
        {
            await _service.OrderPizzaAsync(order).ConfigureAwait(false);
            return Ok();
        }
    }
}
