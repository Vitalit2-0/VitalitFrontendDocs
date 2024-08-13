---
title: Sistema de Estilos
sidebar_position: 2
---

En la aplicación Vitalit, se ha optado por un enfoque híbrido para la gestión de estilos, utilizando principalmente **Tailwind CSS** junto con **SASS** en casos específicos:

- **Tailwind CSS:** Es la principal herramienta utilizada para el diseño y la estilización de la aplicación. Tailwind es un framework de CSS de utilidad que permite escribir clases directamente en los elementos HTML o JSX, facilitando la creación rápida de diseños sin necesidad de escribir CSS personalizado. Tailwind ofrece un sistema escalable y altamente configurable que se adapta bien al diseño responsivo y a la personalización.

- **SASS:** Aunque Tailwind es el principal motor de estilos, SASS se utiliza para manejar casos específicos donde se requiere mayor control sobre los estilos, como la creación de variables de estilo globales y clases generales. SASS permite escribir CSS de manera más estructurada y con características avanzadas como anidación, herencia y mixins. Esto es particularmente útil en la gestión de temas y la reutilización de estilos a lo largo de la aplicación.

### Ejemplo de Estilo con Tailwind

A continuación se muestra un ejemplo de cómo se aplican los estilos utilizando Tailwind directamente en un componente:

```tsx
function Button() {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Click me
        </button>
    );
}
```

En este ejemplo:

- bg-blue-500: Aplica un fondo azul.
- hover:bg-blue-700: Cambia el color del fondo al pasar el mouse.
- text-white: Aplica color de texto blanco.
- font-bold: Aplica negrita al texto.
- py-2 px-4: Aplica padding vertical y horizontal.
- rounded: Aplica bordes redondeados.

## Uso de SASS

A continuación, un ejemplo de uso de SASS para definir variables de color:

```scss
// Variables de color
$primary-color: #3490dc;
$secondary-color: #ffed4a;
$danger-color: #e3342f;

.button-primary {
    background-color: $primary-color;
    &:hover {
        background-color: darken($primary-color, 10%);
    }
}

.button-danger {
    background-color: $danger-color;
    &:hover {
        background-color: darken($danger-color, 10%);
    }
}
```

## Temas y Diseño Responsivo
El diseño de la aplicación Vitalit es completamente responsivo, asegurando que funcione bien en una amplia gama de dispositivos y tamaños de pantalla, desde teléfonos móviles hasta monitores de escritorio grandes.

### Uso de Tailwind para Diseño Responsivo
Tailwind facilita la creación de diseños responsivos utilizando su sistema de breakpoints. A continuación se muestra un ejemplo de cómo se utiliza Tailwind para aplicar estilos específicos según el tamaño de la pantalla:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div className="bg-white p-4 rounded shadow">Item 1</div>
    <div className="bg-white p-4 rounded shadow">Item 2</div>
    <div className="bg-white p-4 rounded shadow">Item 3</div>
    <div className="bg-white p-4 rounded shadow">Item 4</div>
</div>
```

En este ejemplo:

- grid-cols-1: En pantallas pequeñas, el layout es de una columna.
- md:grid-cols-2: En pantallas medianas, el layout cambia a dos columnas.
- lg:grid-cols-4: En pantallas grandes, el layout se ajusta a cuatro columnas.

### Integración con Material-UI (MIU)
Para algunos componentes, se utilizaron elementos de Material-UI (MIU), un popular framework de UI basado en React que proporciona componentes listos para usar y altamente configurables. MIU se ha integrado para proporcionar una experiencia de usuario coherente y mejorar la productividad en el desarrollo de UI.

### Diseño Temático
El uso de SASS también facilita la implementación de temas a través de variables de color y mixins reutilizables. Esto permite cambiar fácilmente los esquemas de color o ajustar el tema global de la aplicación sin necesidad de modificar cada componente individualmente.

En resumen, el sistema de estilos en Vitalit combina la flexibilidad y potencia de Tailwind CSS con la estructura avanzada de SASS, apoyado por componentes de MIU, para ofrecer una interfaz de usuario moderna, responsiva y fácil de mantener.