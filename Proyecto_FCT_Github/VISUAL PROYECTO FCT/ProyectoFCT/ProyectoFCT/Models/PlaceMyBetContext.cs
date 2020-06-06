using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProyectoFCT.Models
{
		public class PROYECTO : DbContext
		{
			public DbSet<Administradores> Administradores { get; set; }
			public DbSet<Usuario> Usuarios { get; set; }
			public DbSet<Nivel> Niveles { get; set; }
			public PROYECTO()
			{
			}

			public PROYECTO(DbContextOptions options)
			: base(options)
			{
			}

			//Mètode de configuració
			protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
			{
				if (!optionsBuilder.IsConfigured)
				{
					optionsBuilder.UseMySql("Server=localhost;Database=adminproyectofct;Uid=root;Pwd=''; SslMode = none");

				}
			}

			//Inserció inicial de dades
			protected override void OnModelCreating(ModelBuilder modelBuilder)
			{
			//modelBuilder.Entity<Administradores>().HasData(new Administradores(1, "Javier", "1234"));
			//modelBuilder.Entity<Usuario>().HasData(new Usuario("Pepe", "1234",12,1));
		}
	}
}