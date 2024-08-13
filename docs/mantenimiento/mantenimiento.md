---
title: Actualización de Dependencias
sidebar_position: 1
---

Mantener las dependencias del proyecto actualizadas es crucial para asegurar la seguridad, rendimiento y compatibilidad de la aplicación. A continuación, se detallan los pasos para manejar la actualización de dependencias:

### 1. Verificación de Dependencias Obsoletas

Para verificar si existen actualizaciones disponibles para las dependencias del proyecto, utiliza el siguiente comando:

```bash
npm outdated
```

### 2. Actualización de Dependencias
Este comando te mostrará una lista de todas las dependencias que tienen nuevas versiones disponibles, junto con las versiones actuales y las versiones más recientes.

Para actualizar las dependencias a sus versiones más recientes compatibles (según lo especificado en el archivo `package.json`), ejecuta:

```bash
npm update
```

Este comando actualizará las dependencias y ajustará el archivo package-lock.json para reflejar los cambios.

### 3. Actualización de Dependencias a Versiones Principales
Si quieres actualizar a la versión principal más reciente (que puede incluir cambios importantes que no sean retrocompatibles), utiliza:

```bash
npm install <package-name>@latest
```

Por ejemplo, para actualizar React a su última versión principal:

```bash
npm install react@latest
```

### 4. Pruebas Después de Actualizar

Después de actualizar las dependencias, es fundamental ejecutar las pruebas para asegurarse de que todo funcione correctamente:

```bash
npm test
```

Si encuentras problemas, revisa la documentación de las nuevas versiones para entender los cambios y realizar los ajustes necesarios en el código.