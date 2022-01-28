using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using KnutWeb.Models;

namespace KnutWeb.Models
{
    public class TicketContext : DbContext
    {
        public TicketContext(DbContextOptions<TicketContext> options)
            : base(options)
        {
        }

        public DbSet<Ticket> Tickets { get; set; }
    }
}
