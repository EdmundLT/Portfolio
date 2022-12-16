using Microsoft.EntityFrameworkCore;

namespace MakeItShorterServer.Data;

public class ApiDbContext : DbContext
{
    public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options) {}

    public DbSet<Link> Links => Set<Link>();
}