using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository
{
    public class Order
    {
        public int Id { get; set; }
        public string Address { get; set; }
        public string CustomerName { get; set; }
        public string Pizza { get; set; }
        public int OrderValue { get; set; }
    }
}
