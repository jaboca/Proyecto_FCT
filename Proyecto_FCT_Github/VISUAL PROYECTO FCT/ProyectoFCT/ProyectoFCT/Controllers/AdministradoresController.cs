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
	public class administrador
	{
		
		public string nombre { get; set; }
		public string contrasenya { get; set; }

	}


	public class AdministradoresController : ApiController
    {
		// GET: api/Administradores
		[HttpGet]
		[Route("api/Administradores")]
		[EnableCors("*", "headers", "GET")]
		public List<Administradores> Get1()
        {
			var repo = new AdministradoresRepository();
			List<Administradores> admin = repo.Retrieve();
			return admin;
        }

		// GET: api/Administradores/login/{nombre}/{contra}
		[HttpGet]
		[Route("api/Administradores/login/{nombre}/{contra}")]
		[EnableCors("*", "headers", "GET")]
		public  bool  Login(string nombre, string contra)
        {

			/*La funcion Login llama a la funcion encontrado inicializando primero la variable repo  como un AdministradorRepository
			 *  y luego inicializa el bool encuentra llamando a la funcion encontrado dentro de repo, pasandole los parametros nombre y contra 
			 *  que son los que el usuario debera poner en la ruta para que el encuentra pueda devolver un true en el caso de que sean correctos.
			 *  El HttpGet fija la ruta.
			*/

			var repo = new AdministradoresRepository();
			bool encuentra =  repo.Encontrado(nombre, contra);
			return encuentra;
		}

        // POST: api/Administradores
        public void Post([FromBody]string value)
        {
        }

		[HttpPut]
		[Route("api/Administradores/Modificar/{id}/{nombre}/{contra}")] 
		[EnableCors("*", "headers", "PUT")]
		// PUT: api/Administradores/5
		public bool Modificar(int id,string nombre,string contra)
        {
			var repo = new AdministradoresRepository();
			repo.Update(id,nombre, contra);
			return true;
		}

		[HttpDelete]
		[Route("api/Administradores/Delete/{id}")]
		[EnableCors("*", "headers", "DELETE")]
		public void Delete(int id)
        {
			var repo = new AdministradoresRepository();
			repo.Delete(id);
		}
    }
}
