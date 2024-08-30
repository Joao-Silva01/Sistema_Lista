using ListApi.models;
using Microsoft.EntityFrameworkCore;

namespace ListApi.context
{
    public class DBaseContext : DbContext
    {
        public DBaseContext(DbContextOptions<DBaseContext> options) : base(options) 
        { 
            
        }

        public DbSet<Task_m> Tasks_Db { get; set; }

        
    }
}
