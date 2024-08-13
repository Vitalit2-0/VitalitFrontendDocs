---
title: Manejo de Errores en el Frontend
sidebar_position: 2
---

En el frontend, los errores se manejan verificando el estado del objeto de respuesta antes de procesar cualquier dato. Esto se hace generalmente en los componentes que consumen los servicios:

```typescript
async function submitGoal(goalData) {
    const token = getAuthToken(); // Función hipotética para obtener el token del usuario
    const response = await RegisterGoal(token, goalData);

    if (response.code !== "200"){
        console.error('Error al registrar meta:', response.string);
        return;
    } 

    // Aquí se ejecuta el código una vez se confirma que la información
    //llegó correctamente
}
```

Este enfoque garantiza que los errores se manejen de manera uniforme en toda la aplicación, minimizando la posibilidad de que errores no controlados afecten la experiencia del usuario.

## Notificación de Errores

En caso de que un error necesite ser notificado al usuario, se pueden utilizar componentes de UI para mostrar mensajes de error amigables. Estos mensajes informan al usuario sobre lo que ha sucedido y, si es posible, le ofrecen pasos para resolver el problema o reintentar la acción.

El sistema de manejo de errores de Vitalit asegura que tanto los desarrolladores como los usuarios finales puedan enfrentarse a errores de una manera controlada y predecible, mejorando la estabilidad y la usabilidad de la aplicación.