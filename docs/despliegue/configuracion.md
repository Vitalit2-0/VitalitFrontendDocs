---
title: Configuración
sidebar_position: 1
---

Para preparar la aplicación Vitalit para su despliegue en un entorno de producción, se deben seguir estos pasos:

### 1. **Configuración del archivo `package.json`:**
   
Asegúrate de que el archivo `package.json` esté configurado correctamente para el despliegue. En particular, debes asegurarte de que la propiedad `homepage` esté definida con la URL donde la aplicación será desplegada, en este caso, GitHub Pages:

```json
{
    "name": "vitalit-frontend",
    "version": "1.0.0",
    "homepage": "https://Vitalit2-0.github.io/VitalitFrontend/",
    ...
}
```

### 2. **Configuración de scripts de despliegue:**

En la sección `scripts` del `package.json`, agrega los siguientes comandos para manejar la construcción y el despliegue de la aplicación:

```json
"scripts": {
    ...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
    ...
}
```
- predeploy: Este script asegura que la aplicación se construya antes de ser desplegada.
- deploy: Este script utiliza gh-pages para desplegar los archivos generados en la carpeta dist a GitHub Pages.

### 3. Verificación de la construcción:

Antes de proceder con el despliegue, ejecuta el comando de construcción para asegurarte de que no haya errores:

```bash
npm run build
```

Este comando generará una versión optimizada de la aplicación en la carpeta dist. Revisa los mensajes de la consola para confirmar que no haya errores.