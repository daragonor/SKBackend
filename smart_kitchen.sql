CREATE TABLE `usuario` (
  `id` int PRIMARY KEY,
  `nombres` varchar(255),
  `apellidos` varchar(255),
  `email` varchar(255) UNIQUE,
  `password` varchar(255),
  `created_at` datetime,
  `updated_at` datetime
);

CREATE TABLE `perfil` (
  `id` int PRIMARY KEY,
  `nombre` varchar(255),
  `created_at` datetime,
  `updated_at` datetime,
  `user_id` int
);

CREATE TABLE `ingrediente` (
  `id` int PRIMARY KEY,
  `nombre` varchar(255)
);

CREATE TABLE `receta` (
  `id` int PRIMARY KEY,
  `nombre` varchar(255)
);

CREATE TABLE `ingrediente_receta` (
  `id` int PRIMARY KEY,
  `ingrediente_id` int,
  `receta_id` int,
  `cantidad` int,
  `medida` varchar(255)
);

CREATE TABLE `historial` (
  `id` int PRIMARY KEY,
  `perfil_id` int,
  `receta_id` int
);

ALTER TABLE `perfil` ADD FOREIGN KEY (`user_id`) REFERENCES `usuario` (`id`);

ALTER TABLE `ingrediente_receta` ADD FOREIGN KEY (`ingrediente_id`) REFERENCES `ingrediente` (`id`);

ALTER TABLE `ingrediente_receta` ADD FOREIGN KEY (`receta_id`) REFERENCES `receta` (`id`);

ALTER TABLE `historial` ADD FOREIGN KEY (`perfil_id`) REFERENCES `perfil` (`id`);

ALTER TABLE `historial` ADD FOREIGN KEY (`receta_id`) REFERENCES `receta` (`id`);
