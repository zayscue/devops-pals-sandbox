using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReleaseBuddy.Interfaces;
using ReleaseBuddy.Models;

namespace ReleaseBuddy.Controllers
{
    [Route("api/[controller]")]
    public class IntegrationTypesController : ControllerBase
    {
        private readonly IRepositoryBase<IntegrationType> _integrationTypes;

        public IntegrationTypesController(IRepositoryBase<IntegrationType> integrationTypes)
        {
            _integrationTypes = integrationTypes ?? throw new ArgumentNullException(nameof(integrationTypes));
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _integrationTypes.GetAll());
        }
    }
}