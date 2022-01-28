using System;
using System.Collections.Generic;

namespace KnutWeb.Models
{
    public class Ticket
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public string Status { get; set; }
        public string Title { get; set; }
        public string Customer { get; set; }
        public string Assigned { get; set; }
        public string Priority { get; set; }
        public string Service { get; set; }
        public DateTime Created { get; set; }
    }
}
