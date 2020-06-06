using Microsoft.EntityFrameworkCore;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace ProyectoFCT.Models
{
	public class AdministradoresRepository
	{

		internal List<Administradores> Retrieve()

		/*La funcion Retrieve devuelve una lista con todos los administradores que existen en la base de datos.
		 * Esta funcion sirve para mostrar al usuario los administradores hay en la base de datos.
		*/

		{
			List<Administradores> Ad = new List<Administradores>();
			using (PROYECTO context = new PROYECTO())
			{
				Ad = context.Administradores.ToList();
			
				//List<AdministradoresDTO> Admi = context.Administradores.Select(p => ToDTO(p)).ToList();
			}
			return Ad;
		}

		private AdministradoresDTO ToDTO(Administradores A)
		{
			return new AdministradoresDTO(A.Nombre, A.Contrasenya);
		}

		

		internal bool Encontrado(string Nom,string Contra)

		/* La funcion Encontrado busca el nombre y la contraseña del administrador que el usuario ha puesto, 
		 * comprueba que existe y si existe devuelve el booleano encontrar en true.
		 */

		{

			var Admi = new AdministradoresRepository();
			PROYECTO context = new PROYECTO();
			List<Administradores> Ad = new List<Administradores>();
			Ad = context.Administradores.ToList();
			bool Encontrar = false;
			foreach (Administradores i in Ad)
			{
				if (Nom == i.Nombre && Contra == i.Contrasenya)
				{
					Encontrar = true;
				}
			}

			return Encontrar;
		}

		internal void Update(int id, string nom, string cont)
		{
			using (PROYECTO context = new PROYECTO())

			{
				Administradores admin = context.Administradores.
					Where(s => s.IdAdmin == id)
					.FirstOrDefault();
				admin.Nombre = nom;
				admin.Contrasenya = cont;
				context.Update(admin);
				context.SaveChanges();
			}
		}

		internal void Delete (int id)
		{

			/* La funcion delete busca primero el administrador que coincide con el id que el usuario ha insertado.
			 * Una vez encontrado, eliminara ese administrador de la base de datos y guardará los cambios para que el borrado
			 * sea efectivo.
			 */

			using (PROYECTO context = new PROYECTO())

			{
				Administradores D = context.Administradores.
					Where(s => s.IdAdmin == id)
					.FirstOrDefault();
				context.Attach(D);
				context.Remove(D);
				context.SaveChanges();
			}
		}
	}
}