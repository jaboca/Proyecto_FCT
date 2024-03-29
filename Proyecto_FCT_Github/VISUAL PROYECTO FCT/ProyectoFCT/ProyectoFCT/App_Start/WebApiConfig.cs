﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace ProyectoFCT
{
	public static class WebApiConfig
	{
		public static void Register(HttpConfiguration config)
		{
			// Configuración y servicios de API web

			// Rutas de API web
			config.MapHttpAttributeRoutes();
			config.EnableCors();
			config.Routes.MapHttpRoute(
				name: "DefaultApi",
				routeTemplate: "api/{controller}/{id}",
				defaults: new { id = RouteParameter.Optional }
			);

			config.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Serialize;
			config.Formatters.JsonFormatter.SerializerSettings.PreserveReferencesHandling = Newtonsoft.Json.PreserveReferencesHandling.Objects;
			config.Formatters.Remove(GlobalConfiguration.Configuration.Formatters.XmlFormatter);
		}
	}
}
