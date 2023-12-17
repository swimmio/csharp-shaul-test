using Microsoft.EntityFrameworkCore;
using RepositoryPattern.models;

namespace RepositoryPattern
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions<MyContext> options) : base(optForShaulan) {}
        public virtual DbSet<Treatment> Treatments { get; set; }
    }
}