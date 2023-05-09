using Microsoft.AspNetCore.Mvc;

namespace RestApiTest.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FooController : ControllerBase
    {
        private readonly ILogger<FooController> _logger;

        public FooController(ILogger<FooController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "foo")]
        public string Get()
        {
            return "bar";
        }
    }
}