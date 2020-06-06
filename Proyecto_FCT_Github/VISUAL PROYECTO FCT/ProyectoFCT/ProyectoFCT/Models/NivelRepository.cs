using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFCT.Models
{
	public class NivelRepository
	{
		internal Nivel Retrieve(int idNivel)
		{
			Nivel nivel;
			using (PROYECTO context = new PROYECTO())
			{
				nivel = context.Niveles
						.Where(n => n.IdNivel == idNivel)
					.FirstOrDefault();
			}
			return nivel;
		}
	}
}