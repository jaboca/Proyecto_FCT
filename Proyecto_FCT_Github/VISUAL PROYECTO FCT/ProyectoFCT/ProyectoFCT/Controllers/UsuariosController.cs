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
    public class UsuariosController : ApiController
    {
		// GET: api/Usuarios
		[HttpGet]
		[Route("api/Usuarios/propiedades/{nombre}")]
		[EnableCors("*", "headers", "GET")]
		public Usuario Propiedades(string nombre)
		{
			var repo = new UsuarioRepository();
			Usuario usu = repo.RetrieveUsu(nombre);
			return usu;
		}


		[HttpGet]
		[Route("api/Usuarios")]
		[EnableCors("*", "headers", "GET")]
		public List<Usuario> GET()
		{
			var repo = new UsuarioRepository();
			List<Usuario> usu = repo.RetrieveUsers();
			return usu;
		}

		// GET: api/Usuarios/LoginUsuario/{nombre}/{contra}
		[HttpGet]
		[Route("api/Usuarios/LoginUsuario/{nombre}/{contra}")]
		[EnableCors("*", "headers", "GET")]
		public bool LoginUsuario(string nombre, string contra)
        {

			/*La funcion LoginUsuario llama a la funcion EncontradosUsuarios inicializando primero la variable RepoUsu como un UsuarioRepository
			 *  y luego inicializa el bool EncuentraUsu llamando a la funcion EncontradosUsuarios dentro de RepoUsu, pasandole los parametros nombre y contra 
			 *  que son los que el usuario debera poner en la ruta para que el EncuentraUsu pueda devolver un true en el caso de que sean correctos.
			 *  El HttpGet fija la ruta.
			*/

			var RepoUsu = new UsuarioRepository();
			bool EncuentraUsu = RepoUsu.EncontradosUsuarios(nombre, contra);
			return EncuentraUsu;
		}

		// POST: api/Usuarios  http://localhost:59298/api/Usuarios/nuevo/2/marc/34/0/1
		[HttpGet]
		[Route("api/Usuarios/nuevo/{nombre}/{contra}")]
		[EnableCors("*", "headers", "GET")]
		public bool Nuevo(string nombre, string contra)
        {
			var repo = new UsuarioRepository();
			repo.UsuarioNuevo(nombre, contra);
			return true;
        }

		[HttpPut]
		[Route("api/Usuarios/ModificarUsu/{id}/{idniv}/{puntos}")]
		[EnableCors("*", "headers", "PUT")]
		// PUT: api/Usuarios/5
		public bool ModificarUsu(int id, int idniv, int puntos)
		{
			var repo = new UsuarioRepository();
			repo.UpdateUsuario(id, idniv, puntos);
			return true;
		}

		[HttpDelete]
		[Route("api/Usuarios/Delete/{id}")]
		[EnableCors("*", "headers", "DELETE")]
		public void Delete(int id)
        {
			var repo = new UsuarioRepository();
			repo.DeleteUsu(id);
		}
    }
}
