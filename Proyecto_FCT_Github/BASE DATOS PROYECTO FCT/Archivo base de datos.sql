-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.1.36-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win32
-- HeidiSQL Versión:             10.1.0.5464
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para adminproyectofct
CREATE DATABASE IF NOT EXISTS `adminproyectofct` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `adminproyectofct`;

-- Volcando estructura para tabla adminproyectofct.administradores
CREATE TABLE IF NOT EXISTS `administradores` (
  `idAdmin` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Contrasenya` varchar(50) NOT NULL,
  PRIMARY KEY (`idAdmin`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla adminproyectofct.administradores: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `administradores` DISABLE KEYS */;
INSERT INTO `administradores` (`idAdmin`, `Nombre`, `Contrasenya`) VALUES
	(4, 'ADMIN', '2020'),
	(6, '60', '1012323232');
/*!40000 ALTER TABLE `administradores` ENABLE KEYS */;

-- Volcando estructura para tabla adminproyectofct.niveles
CREATE TABLE IF NOT EXISTS `niveles` (
  `idNivel` int(11) NOT NULL,
  `Titulo` varchar(200) NOT NULL,
  `Pregunta` varchar(200) NOT NULL,
  `Respuesta` int(11) NOT NULL,
  `Puntosacierto` int(11) NOT NULL,
  `Puntosfallo` int(11) NOT NULL,
  `ultimo` int(11) DEFAULT '0',
  PRIMARY KEY (`idNivel`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla adminproyectofct.niveles: ~14 rows (aproximadamente)
/*!40000 ALTER TABLE `niveles` DISABLE KEYS */;
INSERT INTO `niveles` (`idNivel`, `Titulo`, `Pregunta`, `Respuesta`, `Puntosacierto`, `Puntosfallo`, `ultimo`) VALUES
	(1, 'Pregunta fácil', '¿Cuántas veces puede restarse el número 1 del número 1.111?', 1, 100, 10, 0),
	(2, 'Pregunta dos', 'la respuesta es la anterior mas uno', 2, 199, 299, 0),
	(3, 'Pregunta 3', 'que pasa si no pones el variable=variable + puntos', 0, 100, 100, 0),
	(4, 'Pregunta 4', '¿Qué número debes multiplicar por si mismo para conseguir como resultado el 12345678987654321?', 111111111, 300, 30, 0),
	(5, 'Pregunta 5', 'Son las doce de la mañana, hora de mis pastillas. Me tengo que tomar 4 pastillas, una cada hora. ¿A qué hora me tomaré la última?', 3, 100, 20, 0),
	(6, 'Pregunta muy facil', 'El reloj de la Puerta del Sol da una campanada cada segundo. ¿Cuanto tarda en dar 12 campanadas ?', 11, 100, 50, 0),
	(7, 'Pregunta 7', 'Si 5 máquinas hacen 5 artículos en 5 minutos, ¿cuánto tiempo dedicarán 100 máquinas en hacer 100 artículos?', 5, 400, 100, 0),
	(8, 'Pregunta gatuna', 'Cuatro gatos en un cuarto, cada gato en un rincón, cada gato ve tres gatos, adivina cuántos gatos son.', 4, 100, 10, 0),
	(9, 'Pregunta 9', 'Existe un número de tres dígitos. El dígito del medio es 4 veces más grande que el tercer dígito, mientras que el primero es tres unidades menor que el segundo.', 141, 141, 29, 0),
	(10, 'Pregunta 10', '¿Que número pierde todo su valor cuando le quitas su cinturón?', 8, 80, 40, 0),
	(11, 'Pregunta númerica', '¿Sabrías decir cuántos 9 hay entre el número 1 y el número 100)', 20, 20, 20, 0),
	(12, 'Pregunta dificil', 'Un hombre se levanta por la noche y descubre que no hay luz en su habitación. Abre el cajón de los guantes, en el que hay diez guantes negros y diez azules. ¿Cuántos debe coger para asegurarse de que ', 11, 111, 11, 0),
	(13, 'Pregunta 13', 'Cual es ese numero que si lo paras de manos pierde valor', 9, 60, 30, 0),
	(14, 'Easter egg', 'Existe un numero muy famoso que es el resultado de restar los puntos de acierto de la pregunta 9 con sus puntos de fallo', 112, 600, 300, 1);
/*!40000 ALTER TABLE `niveles` ENABLE KEYS */;

-- Volcando estructura para tabla adminproyectofct.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(200) NOT NULL,
  `Contra` varchar(200) NOT NULL,
  `Puntuacion` int(11) DEFAULT NULL,
  `idNivel` int(11) NOT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla adminproyectofct.usuarios: ~9 rows (aproximadamente)
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` (`idUsuario`, `Nombre`, `Contra`, `Puntuacion`, `idNivel`) VALUES
	(1, 'JUAN', '1234', 0, 1),
	(2, 'mar', '34', 0, 1);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
