---
title: Integración con Servicios Backend
sidebar_position: 2
---
La integración del frontend de Vitalit con los servicios backend se realiza principalmente a través de las clases ubicadas en la carpeta services. Estas clases actúan como proveedores de servicios que encapsulan la lógica de las peticiones a las APIs externas. Cada clase en services se enfoca en una parte específica de la funcionalidad de la aplicación, como el manejo de metas, actividades, autenticación, entre otros.

## Ejemplo de Integración con Backend
Aquí hay un ejemplo de cómo se conecta el frontend con los servicios backend usando la clase `GoalsServiceProvider.ts`:

```typescript
import { RegisterGoal } from './GoalsServiceProvider';

async function submitGoal(goalData) {
    const token = getAuthToken(); // Función hipotética para obtener el token del usuario
    const response = await RegisterGoal(token, goalData);
    if (response.code === "200") {
        console.log('Meta registrada exitosamente:', response.data);
    } else {
        console.error('Error al registrar meta:', response.string);
    }
}
```

En este ejemplo:

- Obtención del Token: Se obtiene el token de autenticación del usuario.
- Llamada al Servicio: Se realiza la llamada al servicio RegisterGoal con los datos de la meta (goalData).
- Manejo de Respuesta: Se maneja la respuesta según el código de estado devuelto.

Estas clases y métodos proporcionan una capa de abstracción que permite que el frontend se comunique con el backend de manera estructurada y eficiente, facilitando el mantenimiento y la escalabilidad de la aplicación.