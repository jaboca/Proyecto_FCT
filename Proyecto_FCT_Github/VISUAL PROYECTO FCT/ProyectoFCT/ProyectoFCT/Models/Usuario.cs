using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ProyectoFCT.Models
{
	public class Usuario
	{
		[Key]
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int IdUsuario { get; set; }
		public string Nombre { get; set; }
		public string Contra { get; set; }
		public int Puntuacion { get; set; }
		public int IdNivel { get; set; }

		public Usuario(string nombre, string contra, int puntuacion, int idNivel)
		{
			//IdUsuario = idUsuario;
			Nombre = nombre;
			Contra = contra;
			Puntuacion = puntuacion;
			IdNivel = idNivel;
		}
	}
	public class UsuarioDTO
	{
		public string Nombre { get; set; }
		public int Puntuacion { get; set; }
		public int IdNivel { get; set; }

		public UsuarioDTO(string nombre, int puntuacion, int Nivel)
		{
			Nombre = nombre;
			Puntuacion = puntuacion;
			IdNivel = Nivel;
		}
	}


}