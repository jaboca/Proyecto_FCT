using ProyectoFCT.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ProyectoFCT.Controllers
{
    public class NivelController : ApiController
    {
		[HttpGet]
		[Route("api/Nivel/Niveles/{id}")]
		[EnableCors("*", "headers", "GET")]
		public Nivel  Niveles(int id)
        {
			var repo = new NivelRepository();
			Nivel niv = repo.Retrieve(id);
			return niv;
		}

        // GET: api/Nivel/5
        /*public string Get(int id)
        {
            return "value";
        }*/

        // POST: api/Nivel
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Nivel/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Nivel/5
        public void Delete(int id)
        {
        }
    }
}
