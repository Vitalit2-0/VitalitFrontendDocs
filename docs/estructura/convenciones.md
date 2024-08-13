---
title: Convenciones de nombres
sidebar_position: 2
---

# Convenciones de Nombres

Para mantener la consistencia y claridad en el código del frontend de Vitalit, se han establecido las siguientes convenciones de nombres para componentes, archivos y variables:

### Componentes

- **Nombres de componentes:** Los nombres de los componentes deben seguir el formato **PascalCase**. Ejemplo: `UserProfile`, `NavBar`, `LoginForm`.
- **Nombres de carpetas de componentes:** Cada componente debe tener su propia carpeta dentro de `/components`, nombrada en **PascalCase** para reflejar el nombre del componente. Ejemplo: `/components/NavBar`.

### Archivos

- **Archivos de componentes:** Los archivos que definen componentes React deben seguir la convención **PascalCase.tsx**. Ejemplo: `UserProfile.tsx`.
- **Archivos de estilos:** Los archivos de estilos asociados a un componente específico deben estar dentro de la carpeta del componente y seguir el formato **PascalCase.module.scss** o **.css**. Ejemplo: `UserProfile.module.scss`.
- **Archivos de DTOs:** Los DTOs deben seguir la convención **PascalCase.ts**. Ejemplo: `UserProfileDTO.ts`.
- **Archivos de constantes:** Los archivos que definen constantes globales deben seguir la convención **UPPER_SNAKE_CASE.ts**. Ejemplo: `API_ENDPOINTS.ts`.
- **Archivos de servicios:** Los archivos de servicios deben seguir el formato **camelCase.ts**. Ejemplo: `userService.ts`.

### Variables

- **Variables locales y de estado:** Deben estar en **camelCase**. Ejemplo: `userProfile`, `isLoggedIn`.
- **Constantes:** Deben estar en **UPPER_SNAKE_CASE**. Ejemplo: `MAX_LOGIN_ATTEMPTS`, `API_BASE_URL`.
- **Propiedades de componentes (props):** Deben estar en **camelCase**. Ejemplo: `userName`, `onClick`.

### Nombres de funciones

- **Funciones y métodos:** Deben seguir la convención **camelCase**. Ejemplo: `handleSubmit`, `fetchUserData`.
- **Hooks personalizados:** Los hooks deben comenzar con `use` y seguir el formato **camelCase**. Ejemplo: `useAuth`, `useFetch`.

Estas convenciones aseguran que el código sea legible, consistente y fácil de mantener, lo que facilita la colaboración entre desarrolladores.