using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.Service.Models
{
    public class Pizza
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Init { get; set; }
        public string Image { get; set; }
        public int Price { get; set; }
        public string PizzaBase { get; set; }
        public string PizzaType { get; set; }
        public int SauceId { get; set; }
        public IEnumerable<Toppin> Toppins { get; set; }

        public IEnumerable<Toppin> ExtraToppins { get; set; } = new List<Toppin>();
    }
}
