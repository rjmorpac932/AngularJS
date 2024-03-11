-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-03-2024 a las 08:15:07
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `formulario_individual`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lenguaje`
--

CREATE TABLE `lenguaje` (
  `id` bigint(20) NOT NULL,
  `descripcion` varchar(800) NOT NULL,
  `fecha_lanzamiento` date DEFAULT NULL,
  `nombre` varchar(25) NOT NULL,
  `tipo_lenguaje` varchar(15) NOT NULL,
  `ultima_version` varchar(14) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `lenguaje`
--

INSERT INTO `lenguaje` (`id`, `descripcion`, `fecha_lanzamiento`, `nombre`, `tipo_lenguaje`, `ultima_version`) VALUES
(1, 'JavaScript (JS) es un lenguaje de programación ligero, interpretado, o compilado justo-a-tiempo (just-in-time) con funciones de primera clase. Si bien es más conocido como un lenguaje de scripting (secuencias de comandos) para páginas web, y es usado en muchos entornos fuera del navegador, tal como Node.js, Apache CouchDB y Adobe Acrobat JavaScript es un lenguaje de programación basada en prototipos, multiparadigma, de un solo hilo, dinámico, con soporte para programación orientada a objetos, im', '1995-12-04', 'JavaScript', 'FrontEnd', 'ES12'),
(2, 'Angular (comúnmente llamado Angular 2+ o Angular 2) es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página. Su objetivo es aumentar las aplicaciones basadas en navegador con capacidad de Modelo Vista Controlador (MVC), en un esfuerzo para hacer que el desarrollo y las pruebas sean más fáciles.\n\nLa biblioteca lee el HTML que contiene atributos de las etiquetas personalizadas. Hola.', '2016-12-14', 'Angular', 'FrontEnd', '19'),
(3, 'React (también llamada React.js o ReactJS) es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. En el proyecto hay más de mil desarrolladores libres.\n\nReact intenta ayudar a los desarrolladores a construir aplicaciones que usan datos que cambian todo el tiempo.', '2013-05-29', 'React', 'FrontEnd', '18.2.0'),
(4, 'Vue.js es un framework open source de JavaScript, que nos permite la creación de interfaces de usuario y aplicaciones de una sola página (single-page application o SPA, en inglés), de una forma muy sencilla. Fue creado, o desarrollado, por un ex empleado de Google, Evan You, en el año 2014. Con respecto a otros frameworks, la curva de aprendizaje es baja, si conoces los fundamentos de JavaScript. Además, es muy sencillo de utilizar ya que podemos utilizar este framework simplemente con la inclus', '2014-02-01', 'Vue.js', 'FrontEnd', '2.5.16'),
(5, 'Java SE es un lenguaje de programación y una plataforma informática que fue comercializada por primera vez en 1995 por Sun Microsystems.\n\nEl lenguaje de programación Java fue desarrollado originalmente por James Gosling, de Sun Microsystems (constituida en 1983 y posteriormente adquirida el 27 de enero de 2010 por la compañía Oracle), y publicado en 1995 como un componente fundamental de la plataforma Java de Sun Microsystems. Su sintaxis deriva en gran medida de C y C++, pero tiene menos utilidad.', '1995-01-01', 'Java SE', 'BackEnd', '21'),
(6, 'PHP es un lenguaje de programación interpretado del lado del servidor y de uso general que se adapta especialmente al desarrollo web. Fue creado inicialmente por el programador danés-canadiense Rasmus Lerdorf en 1994. En la actualidad, la implementación de referencia de PHP es producida por The PHP Group. PHP originalmente significaba Personal Home Page (Página personal), pero ahora significa el inicialismon recursivo PHP: Hypertext Preprocessor.\r\n\r\nEl código PHP suele ser procesado en un servid', '1995-01-01', 'PHP', 'BackEnd', '8.3.2'),
(7, 'Python es un lenguaje de alto nivel de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código, se utiliza para desarrollar aplicaciones de todo tipo, por ejemplo: Instagram, Netflix, Spotify, Panda3D, entre otros. Se trata de un lenguaje de programación multiparadigma, ya que soporta parcialmente la orientación a objetos, programación imperativa y, en menor medida, programación funcional. Es un lenguaje interpretado, dinámico y multiplataforma.\r\n\r\nAdministrado por ', '1991-01-01', 'Python', 'BackEnd', '3.12.2'),
(8, 'Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google. Fue creado con el enfoque de ser útil en la creación de programas de red altamente escalables, como por ejemplo, servidores web. Fue creado por Ryan Dahl en 2009 y su evolución está apadrinada por la empresa Joy', '2009-05-27', 'Node.js', 'BackEnd', '18.18.0');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `lenguaje`
--
ALTER TABLE `lenguaje`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_qeo6c0l1xsc2jgyu01ft973q0` (`descripcion`) USING HASH,
  ADD UNIQUE KEY `UK_s0a6np3mdk07n2akcc54yi8j9` (`nombre`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `lenguaje`
--
ALTER TABLE `lenguaje`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
