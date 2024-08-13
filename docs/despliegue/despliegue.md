---
title: Proceso de despliegue
sidebar_position: 2
---

Una vez que la configuración para producción esté completa y la aplicación haya sido construida sin errores, sigue estos pasos para desplegar la aplicación:

### 1. **Construcción de la aplicación:**
   
Ejecuta el siguiente comando para generar la versión de producción de la aplicación:

```bash
npm run build
```
Este comando crea la carpeta dist con todos los archivos necesarios para la versión de producción.

### 2. **Despliegue en GitHub Pages:**

Para desplegar la aplicación en GitHub Pages, utiliza el siguiente comando:

```bash
npm run deploy
```
Este comando subirá los archivos de la carpeta dist al branch gh-pages de tu repositorio GitHub, lo que hará que la aplicación esté disponible en la URL definida en homepage.

GitHub Pages se encargará de publicar automáticamente los archivos subidos, y la aplicación estará disponible en el navegador en la URL especificada.
