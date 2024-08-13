---
title: Ejecución del Proyecto
sidebar_position: 3
---

# Ejecución del Proyecto

Después de configurar el entorno de desarrollo y clonar el repositorio, puedes ejecutar el proyecto siguiendo estos pasos:

## 1. Iniciar el Servidor de Desarrollo

Para iniciar el servidor de desarrollo y comenzar a trabajar en el proyecto, ejecuta el siguiente comando en tu terminal:

```bash
npm run dev
```
Este comando lanzará el servidor de desarrollo utilizando Vite. El proyecto estará disponible en tu navegador en http://localhost:3000 o en el puerto especificado por Vite.

## 2. Compilaciones de Producción

Cuando estés listo para generar una compilación de producción optimizada, ejecuta el siguiente comando:
```bash
npm run build
```
Esto generará los archivos optimizados en el directorio dist, listos para ser desplegados en un servidor de producción.

## 3. Iniciar el Compilador SASS

Recuerda que, además de iniciar el servidor de desarrollo, es necesario ejecutar el compilador SASS para convertir los archivos .scss a .css. Este proceso puede iniciarse con el siguiente comando:

```bash
npm run sass
```

Estos comandos te permitirán desarrollar, probar, y construir el proyecto de manera efectiva.