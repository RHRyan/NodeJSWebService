-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 28-06-2023 a las 16:48:14
-- Versión del servidor: 5.6.26
-- Versión de PHP: 5.5.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `recordatoriosdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `etiquetas`
--

CREATE TABLE IF NOT EXISTS `etiquetas` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(50) DEFAULT NULL,
  `Descripcion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notificaciones`
--

CREATE TABLE IF NOT EXISTS `notificaciones` (
  `Id` int(11) NOT NULL,
  `ID_usuario` int(11) DEFAULT NULL,
  `Fecha` date DEFAULT NULL,
  `Nombre` varchar(100) DEFAULT NULL,
  `Descripcion` varchar(255) DEFAULT NULL,
  `Estado` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recordatorios`
--

CREATE TABLE IF NOT EXISTS `recordatorios` (
  `Id` int(11) NOT NULL,
  `Fecha` date DEFAULT NULL,
  `Nombre` varchar(50) DEFAULT NULL,
  `Descripcion` varchar(150) DEFAULT NULL,
  `Categoria` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro`
--

CREATE TABLE IF NOT EXISTS `registro` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(50) DEFAULT NULL,
  `ApellidoPaterno` varchar(50) DEFAULT NULL,
  `ApellidoMaterno` varchar(50) DEFAULT NULL,
  `FechaNacimiento` date DEFAULT NULL,
  `CorreoElectronico` varchar(100) DEFAULT NULL,
  `Telefono` varchar(20) DEFAULT NULL,
  `Contrasena` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido_paterno` varchar(50) DEFAULT NULL,
  `apellido_materno` varchar(50) DEFAULT NULL,
  `contrasena` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `etiquetas`
--
ALTER TABLE `etiquetas`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `notificaciones`
--
ALTER TABLE `notificaciones`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `recordatorios`
--
ALTER TABLE `recordatorios`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `registro`
--
ALTER TABLE `registro`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `etiquetas`
--
ALTER TABLE `etiquetas`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `notificaciones`
--
ALTER TABLE `notificaciones`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `recordatorios`
--
ALTER TABLE `recordatorios`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `registro`
--
ALTER TABLE `registro`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
