---
title: Herramientas de Despliegue
sidebar_position: 3
---

El proceso de despliegue continuo para la aplicación Vitalit se apoya en las siguientes herramientas:

### 1. **GitHub Actions:**
   
GitHub Actions se utiliza para automatizar el proceso de integración y despliegue continuo (CI/CD). Con GitHub Actions, se configuran flujos de trabajo (workflows) que ejecutan automáticamente las tareas de construcción y despliegue cada vez que se hace un push o un merge en las ramas principales del repositorio.

- Flujos de trabajo (workflows): Puedes definir un flujo de trabajo en un archivo .yml dentro de la carpeta .github/workflows para automatizar tareas como la ejecución de pruebas, la construcción de la aplicación, y el despliegue en GitHub Pages.

- Despliegue Automático: GitHub Actions permite desencadenar el despliegue automáticamente cada vez que se fusiona un cambio en la rama principal (main), garantizando que la versión más reciente de la aplicación esté siempre en producción.

### 2. **gh-pages:**

El paquete gh-pages se utiliza para desplegar aplicaciones en GitHub Pages de manera sencilla. Este paquete permite que el contenido de la carpeta dist se suba directamente al branch gh-pages del repositorio, desde donde GitHub Pages servirá la aplicación

Este proceso asegura que la aplicación Vitalit esté correctamente configurada para producción y se despliegue de manera eficiente y automatizada a través de GitHub Pages utilizando GitHub Actions.
