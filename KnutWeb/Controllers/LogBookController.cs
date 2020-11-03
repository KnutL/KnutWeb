using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using KnutWeb.Models;
using Microsoft.AspNetCore.Mvc;

namespace KnutWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LogBookController : ControllerBase
    {
        LogBookDAL obj = new LogBookDAL();

        [HttpGet]
        [Route("Index")]
        public IEnumerable<LogBook> Index()
        {
            return obj.GetAllLogBooks();
        }

        [HttpPost]
        [Route("Create")]
        public int Create(LogBook log)
        {
            return obj.CreateLogBook(log);
        }

        [HttpGet]
        [Route("Details/{id}")]
        public LogBook Details(int id)
        {
            return obj.GetLogBookData(id);
        }

        [HttpPut]
        [Route("Edit")]
        public int Edit(LogBook log)
        {
            return obj.UpdateLogBook(log);
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public int Delete(int id)
        {
            return obj.DeleteLogBook(id);
        }
    }
}
