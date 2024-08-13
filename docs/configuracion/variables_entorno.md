---
title: Variables de entorno
sidebar_position: 4
---

# Variables de Entorno

El proyecto Vitalit utiliza variables de entorno para configurar ciertos aspectos del entorno de ejecución, en particular la integración con la API de OpenAI.

## Configuración de Variables de Entorno

Las variables de entorno se configuran mediante un archivo `.env` en la raíz del proyecto. A continuación se describe la variable de entorno clave que debes configurar:

### 1. `VITE_OPENAI_API_KEY`

Esta variable define la clave de la API de OpenAI que permite al proyecto utilizar funcionalidades de inteligencia artificial. Debes obtener esta clave desde OpenAI y configurarla en el archivo `.env` como se muestra a continuación:

```env
VITE_OPENAI_API_KEY=tu_clave_de_api_aqui
```
Reemplaza tu_clave_de_api_aqui con la clave real proporcionada por OpenAI.

Este archivo .env debe ser creado en la raíz del proyecto si no existe. Recuerda que este archivo no debe ser incluido en el control de versiones (ya está incluido en .gitignore), ya que contiene información sensible.

Asegúrate de configurar correctamente esta variable antes de ejecutar el proyecto para que las funcionalidades de inteligencia artificial funcionen correctamente.

Estos archivos Markdown proporcionan una guía detallada para configurar y ejecutar el entorno de desarrollo del frontend de Vitalit, asegurando que cualquier desarrollador pueda iniciar y contribuir al proyecto de manera eficiente.
