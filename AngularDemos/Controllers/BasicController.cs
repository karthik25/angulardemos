using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using AngularDemos.Scripts;

namespace AngularDemos.Controllers
{
    public class BasicController : ApiController
    {
        [HttpGet]
        public List<Client> Clients()
        {
            return Enumerable.Range(1, 20).Select(e => new Client { Id = e, Name = "Client " + e }).ToList();
        }

        [HttpGet]
        public List<Package> Packages()
        {
            return Enumerable.Range(21, 40).Select(e => new Package { Id = e, Name = "Package " + e }).ToList();
        }
    }
}