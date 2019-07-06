using System;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReleaseBuddy.Models;

namespace ReleaseBuddy.Controllers
{
    [Route("api/bitbucket-server")]
    public class BitbucketServerProxyController : ControllerBase
    {
        private const string API_KEY = "Nzc2MDY1MjQ1MjEwOr9+o4QcvVUn8B5PZzvtizIqdsap";
        private readonly IHttpClientFactory _clientFactory;

        public BitbucketServerProxyController(IHttpClientFactory clientFactory)
        {
            _clientFactory = clientFactory ?? throw new ArgumentNullException(nameof(clientFactory));
        }

        [HttpGet("projects/{project}/repos/{repo}/branches")]
        public async Task<IActionResult> Branches([FromRoute] string project, [FromRoute] string repo)
        {
            var request = new HttpRequestMessage(HttpMethod.Get,
                $"http://stash.corp.web:7990/rest/api/1.0/projects/{project}/repos/{repo}/branches");
            request.Headers.Add("Authorization", $"Bearer {API_KEY}");

            var client = _clientFactory.CreateClient();

            var response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                return Ok(await response.Content.ReadAsAsync<PagedList<BitbucketServerBranch>>());
            }
            else
            {
                return BadRequest();
            }
        }

    }
}