using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ProyectoFCT.Models
{
	public class Administradores
	{
		[Key]
		public int IdAdmin { get; set; }
		public string Nombre { get; set; }
		public string Contrasenya { get; set; }

		public Administradores(int idAdmin, string nombre, string contrasenya)
		{
			IdAdmin = idAdmin;
			Nombre = nombre;
			Contrasenya = contrasenya;
		}
	}

	public class AdministradoresDTO
	{
		public string Nombre { get; set; }
		public string Contrasenya { get; set; }
		public bool Encontrar { get; set; }


		public AdministradoresDTO(string nombre, string contrasenya)
		{
			Nombre = nombre;
			Contrasenya = contrasenya;
		}
	}
}