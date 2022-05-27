using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using Repository;
using System.IO;
using System.Threading.Tasks;

namespace Pizza.Server.Test
{
    [TestClass]
    public class RepositoryTest
    {
        private readonly IPizzaOrderRepository _repo;
        public RepositoryTest()
        {
            _repo = new PizzaOrderRepository();
        }

        [TestMethod]
        public async Task Should_Write_Order_In_File()
        {
            var order = new Order { Address = "addr", CustomerName = "mohini", Id = 1, OrderValue = 100, Pizza = "{ name: Neapolitan Pizza}" };
            
            var saved = await _repo.SaveOrderAsync(order);
            Assert.AreEqual(1, saved);
        }
    }
}
