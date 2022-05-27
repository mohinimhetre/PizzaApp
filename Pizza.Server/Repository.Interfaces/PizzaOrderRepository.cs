using System;
using System.IO;
using System.Threading.Tasks;

namespace Repository
{
    public class PizzaOrderRepository : IPizzaOrderRepository
    {
        static int orderId = 1;
        public async Task<int> SaveOrderAsync(Order order)
        {
            try
            {
                StreamWriter writer;
                string path = @"c:/temp/PizzaOrder.txt";
                if (!File.Exists(path))
                {
                    writer = File.CreateText(path);
                }
                else
                {
                    writer = new StreamWriter(path, true);
                }
                using (writer)
                {
                    await writer.WriteLineAsync($"{DateTime.Now} | {orderId} | {order.CustomerName} | {order.Address} | {order.Pizza} | {order.OrderValue}");
                    writer.Flush();
                    orderId++;
                    return 1;
                }
            }
            catch(Exception ex)
            {
                //log exception
                throw;
            }
        }
    }
}
