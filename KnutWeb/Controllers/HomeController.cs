using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace KnutWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public HomeController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var httpClient = HttpClientFactory.Create();
            var url = "https://jsonplaceholder.typicode.com/posts";
            HttpResponseMessage httpResponseMessage = await httpClient.GetAsync(url);


            var content = httpResponseMessage.Content;
            var data = await content.ReadAsStringAsync();
            return Ok(data);

            /*
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://jsonplaceholder.typicode.com/posts");
            string result = await client.GetStringAsync("/");

            return Ok(result);
            */
        }

        // GET api/<HomeController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<HomeController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<HomeController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<HomeController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
