---
title: Estructura de Carpetas y Archivos
sidebar_position: 1
---

La estructura de carpetas y archivos en el frontend del proyecto Vitalit se organiza de manera modular y clara para facilitar el desarrollo, mantenimiento, y escalabilidad del código. A continuación se describe la estructura principal:


### Descripción de la Estructura

- **/assets:** Contiene todos los recursos estáticos, incluyendo imágenes y estilos, que se utilizan en toda la aplicación.
- **/components:** Incluye todos los componentes de interfaz de usuario que son reutilizables y autónomos, diseñados para ser utilizados en múltiples partes de la aplicación.
- **/constants:** Define constantes globales que se utilizan en diferentes partes de la aplicación para evitar la repetición de valores mágicos o literales.
- **/dtos:** Almacena los objetos de transferencia de datos (DTOs) que se utilizan para estructurar y validar los datos que se intercambian entre el frontend y el backend.
- **/entities:** Define las entidades o modelos de datos que reflejan las estructuras principales utilizadas en la aplicación.
- **/pages:** Contiene las vistas o páginas completas que representan diferentes rutas de la aplicación.
- **/services:** Incluye los servicios que gestionan la lógica de negocio, como la comunicación con APIs y la gestión de datos.
- **/stores:** Contiene la gestión del estado global de la aplicación, utilizando herramientas como Redux o Context API.
- **Otros archivos en /src:** Incluyen estilos globales y archivos principales que inicializan y configuran la aplicación.

Esta organización modular permite una fácil localización y modificación de cualquier parte del sistema, lo que facilita el desarrollo y la colaboración en equipo.



