using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using AngularDemos.Models;

namespace AngularDemos.Controllers
{
    public class BasicController : ApiController
    {
        [HttpGet]
        public List<CheckBoxEntry> List1()
        {
            return Enumerable.Range(1, 20).Select(e => new CheckBoxEntry { Id = e, Name = "Citem " + e }).ToList();
        }

        [HttpGet]
        public List<CheckBoxEntry> List2()
        {
            return Enumerable.Range(21, 40).Select(e => new CheckBoxEntry { Id = e, Name = "Pitem " + e }).ToList();
        }
    }
}