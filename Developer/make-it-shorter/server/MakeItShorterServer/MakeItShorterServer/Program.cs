using MakeItShorterServer.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddEntityFrameworkNpgsql().AddDbContext<ApiDbContext>(
    opt => opt.UseNpgsql(builder.Configuration.GetConnectionString("SampleDbConnection"))
);
// builder.Services.AddCors(options => options.AddPolicy(name: "MakeItShorterOrigins", policy =>
// {
//     policy.WithOrigins("http://localhost:3000").AllowAnyMethod().AllowAnyHeader();
// }));
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// app.UseCors("MakeItShorterOrigins");
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();