using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MakeItShorterServer.Data;


namespace MakeItShorterServer.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class LinkController : ControllerBase
    {
        private readonly ApiDbContext _context;

        public LinkController(ApiDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Link>>> GetLinks()
        {
            return Ok(await _context.Links.ToListAsync());
        }
    }
}