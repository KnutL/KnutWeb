using System;
using System.Collections.Generic;

namespace KnutWeb.Models
{
    public partial class LogBook
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Message { get; set; }
    }
}
