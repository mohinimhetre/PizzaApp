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
    public class PizzaOrderApplicationServiceTest
    {
        private readonly IPizzaOrderApplicationService _service;
        private Mock<IPizzaOrderRepository> repoMoq = new Mock<IPizzaOrderRepository>();
        public PizzaOrderApplicationServiceTest()
        {
            _service = new PizzaOrderApplicationService(repoMoq.Object);
        }

        [TestMethod]
        public async Task Should_Save_Order()
        {
            var order = new Application.Service.Models.Order { Address = "addr", CustomerName = "mohini", Id = 1, OrderValue = 100, Pizza = "{ name: Neapolitan Pizza}" };

            repoMoq.Setup(x => x.SaveOrderAsync(It.IsAny<Order>())).Returns(Task.FromResult(1));
            var a = await _service.OrderPizzaAsync(order);
            Assert.AreEqual(1, a);
        }
    }
}
