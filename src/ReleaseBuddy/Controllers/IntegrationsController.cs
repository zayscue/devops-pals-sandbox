using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ReleaseBuddy.Interfaces;
using ReleaseBuddy.Models;

namespace ReleaseBuddy.Controllers
{
    [Route("api/[controller]")]
    public class IntegrationsController : ControllerBase
    {
        private readonly IRepositoryBase<Integration> _integrations;
        private readonly ILogger<IntegrationsController> _logger;

        public IntegrationsController(IRepositoryBase<Integration> integrations, ILogger<IntegrationsController> logger)
        {
            _integrations = integrations ?? throw new ArgumentNullException(nameof(integrations));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _integrations.GetAll());
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Integration integration)
        {
            if (integration == null)
            {
                return BadRequest("The integration can't be null.");
            }

            await _integrations.CreateAsync(integration);

            return Ok(integration);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] string id)
        {
            await _integrations.RemoveAsync(id);
            return NoContent();
        }
    }
}