using Microsoft.EntityFrameworkCore;
using RepositoryPattern.models;

namespace RepositoryPattern
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions<MyContext> options) : base(options1) {}
    }
}