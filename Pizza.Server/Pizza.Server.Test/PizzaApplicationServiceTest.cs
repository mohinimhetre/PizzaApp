using Application.Service;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pizza.Server.Test
{
    [TestClass]
    public class PizzaApplicationServiceTest
    {
        private readonly IPizzaApplicationService _service;
        public PizzaApplicationServiceTest()
        {
            _service = new PizzaApplicationService();
        }
        [TestMethod]
        public void Should_Get_Pizzas()
        {
            var pizzas = _service.GetPizzas();
            Assert.AreEqual(10, pizzas.Count()); // 10 is taken from mock data
        }

        // similarly write unit test to get rest of the categories
    }
}
