using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProyectoFCT.Models
{
	public class Nivel
	{
		[Key]
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int IdNivel { get; set; }
		public string Titulo { get; set; }
		public string Pregunta { get; set; }
		public int Respuesta { get; set; }
		public int Puntosacierto { get; set; }
		public int Puntosfallo { get; set; }
		public int Ultimo { get; set; }

		public Nivel(int idNivel, string titulo, string pregunta, int respuesta, int puntosacierto, int puntosfallo,int ultimo)
		{
			IdNivel = idNivel;
			Titulo = titulo;
			Pregunta = pregunta;
			Respuesta = respuesta;
			Puntosacierto = puntosacierto;
			Puntosfallo = puntosfallo;
			Ultimo = ultimo;
		}
	}
}