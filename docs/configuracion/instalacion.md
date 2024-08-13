---
title: Instalación del proyecto
sidebar_position: 2
---

Sigue estos pasos para clonar el repositorio del frontend de Vitalit y configurar tu entorno de desarrollo:

### 1. Clonar el Repositorio

Primero, abre tu terminal y clona el repositorio del proyecto desde GitHub:

```bash
git clone https://github.com/Vitalit2-0/VitalitFrontend.git
```
### 2. Acceder al Directorio del Proyecto

Una vez clonado, navega al directorio del proyecto:
```bash
cd VitalitFrontend
```

### 3. Instalar las Dependencias
Instala todas las dependencias necesarias ejecutando el siguiente comando:
```bash
npm install
```

Este comando descargará e instalará todas las librerías y paquetes necesarios para el proyecto, basándose en el archivo package.json.

### 4. Iniciar el Compilador SASS
Para compilar los archivos SASS a CSS, ejecuta el siguiente comando en una terminal separada:
```bash
npm run sass
```
Esto iniciará el compilador SASS que observará cualquier cambio en los archivos .scss y los compilará automáticamente.

Una vez completados estos pasos, estarás listo para iniciar el proyecto.