using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFCT.Models
{
	public class UsuarioRepository
	{
		internal List<Usuario> RetrieveUsers()

		/*La funcion RetrieveUsers devuelve una lista con todos los usuarios que existen en la base de datos.
		 * Esta funcion sirve para mostrar al administrador los usuarios hay en la base de datos.
		*/

		{
			List<Usuario> Users = new List<Usuario>();
			using (PROYECTO context = new PROYECTO())
			{
				Users = context.Usuarios.ToList();
			}
			return Users;
		}

		internal void UpdateUsuario(int id,int idNiv,int puntos)
		{
			using (PROYECTO context = new PROYECTO())

			{
				Usuario us = context.Usuarios.
					Where(u => u.IdUsuario == id)
					.FirstOrDefault();
				us.IdNivel = idNiv;
				us.Puntuacion = puntos;
				context.Update(us);
				context.SaveChanges();
			}
		}

		internal Usuario RetrieveUsu(string nombre)
		{
			Usuario us;
			using (PROYECTO context = new PROYECTO())
			{
				us = context.Usuarios
						.Where(m => m.Nombre == nombre)
					.FirstOrDefault();
			}
			return us;
		}

		private UsuarioDTO ToDTO(Usuario usu)
		{
			return new UsuarioDTO(usu.Nombre, usu.Puntuacion, usu.IdNivel);
		}

		internal bool EncontradosUsuarios(string Nomb, string Contras)

		/* La funcion EncontradosUsuarios busca el nombre y la contraseña del usuario que el usuario ha puesto, 
		 * comprueba que existe y si existe devuelve el booleano EncontrarUsuario en true.
		 */

		{

			var Usuari = new UsuarioRepository();
			PROYECTO context = new PROYECTO();
			List<Usuario> Usu = new List<Usuario>();
			Usu = context.Usuarios.ToList();
			bool EncontrarUsuario = false;
			foreach (Usuario u in Usu)
			{
				if (Nomb == u.Nombre && Contras == u.Contra)
				{
					EncontrarUsuario = true;
				}
			}

			return EncontrarUsuario;
		}

		internal void DeleteUsu(int id)
		{
			using (PROYECTO context = new PROYECTO())

			{
				Usuario U = context.Usuarios.
					Where(s => s.IdUsuario == id)
					.FirstOrDefault();
				context.Attach(U);
				context.Remove(U);
				context.SaveChanges();
			}
		}

		internal void UsuarioNuevo( string nombre, string contra)
		{
			PROYECTO context = new PROYECTO();
			Usuario usu = new Usuario( nombre, contra, 0,1);
			
			context.Usuarios.Add(usu);
			context.SaveChanges();

		}
	}
}