using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.Service.Models
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
