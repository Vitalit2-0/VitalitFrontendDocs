---
title: Componentes, estructura y reutilización
sidebar_position: 1
---

## Componentes Principales

En el frontend de Vitalit, varios componentes clave forman la base de la aplicación y son esenciales para la funcionalidad general y la experiencia del usuario. A continuación, se describen algunos de los componentes principales:

- **Header.tsx:** Este componente se encuentra en la carpeta `pages/landing` y es responsable de mostrar el encabezado de la aplicación. Incluye elementos de navegación y logotipos que son visibles en la parte superior de la interfaz.

- **Footer.tsx:** Localizado en la carpeta `pages/landing`, este componente muestra el pie de página de la aplicación, proporcionando enlaces útiles y detalles de contacto.

- **Sidebar.tsx:** Ubicado en la carpeta `shared`, este componente gestiona la barra lateral de navegación, que permite a los usuarios acceder rápidamente a diferentes secciones de la aplicación.

- **Goal.tsx:** En la carpeta `pages/dashboard`, este componente muestra los objetivos del usuario, permitiendo ver y gestionar sus metas de bienestar.

- **Activity.tsx:** Localizado en la carpeta `pages/mentalHealth`, este componente muestra y gestiona las actividades relacionadas con la salud mental del usuario, incluyendo ejercicios y tareas de seguimiento.

- **ExerciseContainer.tsx:** Este componente, en la carpeta `pages/workout`, es el contenedor principal para los ejercicios, permitiendo gestionar y visualizar rutinas de entrenamiento.

## Estructura de los Componentes

Todos los componentes en Vitalit están estructurados como **functional components** utilizando las siguientes funcionalidades básicas de React:

- **useState:** Utilizado para manejar el estado local dentro de un componente. Permite crear y actualizar valores dinámicos que afectan el renderizado del componente.

- **useEffect:** Utilizado para manejar efectos secundarios dentro de un componente, como la llamada a APIs, suscripciones o manipulaciones de DOM. Se ejecuta después de que el componente se ha renderizado.

- **Props:** Todos los componentes reciben `props` para manejar datos que se pasan desde los componentes padres. Esto permite la reutilización y la composición de componentes de manera eficiente.

- **Hooks personalizados:** En algunos componentes, se utilizan hooks personalizados para encapsular y reutilizar lógica que se repite en múltiples lugares.

Esta estructura permite que los componentes sean modulares, reutilizables y fáciles de mantener, asegurando que cada pieza de la interfaz de usuario esté bien organizada y sea eficiente.

## Componentes Reutilizables

Todos los componentes en Vitalit están diseñados para ser reutilizables, lo que significa que pueden ser utilizados en diferentes partes de la aplicación sin necesidad de duplicar código. A continuación se identifican algunos de los componentes reutilizables y su propósito:

- **CircularTimer.tsx (en shared):** Un temporizador circular reutilizable que se puede utilizar en varias partes de la aplicación donde se requiere una cuenta atrás visual.

- **DropDownMenu.tsx (en shared):** Un menú desplegable reutilizable, adaptable para diferentes contextos en los que se necesita una selección de opciones.

- **Loader.tsx (en shared):** Componente reutilizable para mostrar una animación de carga en cualquier parte de la aplicación donde se esté esperando la finalización de una acción asíncrona.

- **ModalNotification.tsx (en shared):** Un modal reutilizable que muestra notificaciones al usuario. Es adaptable para diferentes tipos de mensajes, como alertas, confirmaciones o información.

- **ProtectedRoute.tsx (en shared):** Un componente de ruta que garantiza que solo los usuarios autenticados puedan acceder a ciertas páginas, reutilizable en cualquier parte de la aplicación que necesite protección de rutas.

- **ProgressBar.tsx (en shared):** Barra de progreso reutilizable para visualizar el avance en tareas, rutinas o metas, adaptable en diferentes contextos de la aplicación.

Cada uno de estos componentes ha sido desarrollado con la intención de maximizar su reutilización en diferentes escenarios de la aplicación, lo que no solo mejora la eficiencia del desarrollo sino que también garantiza una experiencia de usuario coherente.
