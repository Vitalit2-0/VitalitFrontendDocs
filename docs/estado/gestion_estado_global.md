---
title: Gestión del Estado Global
sidebar_position: 1
---


En la aplicación Vitalit, la gestión del estado global se maneja utilizando **Zustand** y **Context API**. 

- **Zustand:** Se utiliza como la principal herramienta para manejar la lógica central del estado global de la aplicación. Zustand permite crear y gestionar estados de manera eficiente con una API simple y directa, proporcionando un control de estado escalable y fácil de entender. Los estados que afectan a la mayoría de la aplicación, como los datos del usuario, configuraciones globales y otras entidades compartidas, se gestionan a través de Zustand.

- **Context API:** Se emplea para manejar estados más específicos relacionados con la UI, como la lógica de popups y ventanas emergentes. La Context API de React permite compartir valores entre componentes sin necesidad de pasar props manualmente a través de cada nivel del árbol de componentes. Esto es particularmente útil para la gestión de ventanas emergentes que requieren una manipulación más localizada del estado.

## Manejo de Datos Asíncronos

Las peticiones asíncronas a la API en Vitalit se manejan utilizando **Axios**, un cliente HTTP basado en promesas que facilita la comunicación con servicios externos. Cada clase dentro de la carpeta `services` está encargada de manejar las peticiones específicas a las APIs correspondientes.

### Ejemplo de Manejo de Peticiones Asíncronas

A continuación, se muestra un ejemplo de cómo se maneja una petición POST a la API para registrar una meta (goal) utilizando Axios. Este código se encuentra dentro de la clase `GoalsServiceProvider.ts`:

```typescript
export async function RegisterGoal(token: string, goal: any): Promise<ResponseDto> {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const response = await axios.post('https://app-j462ku7pkq-uc.a.run.app/v1/goals', goal, config);
        return { code: "200", string: "", data: response.data } as ResponseDto;
    } catch (error: any) {
        return {
            code: error.response.data.code,
            string: error.response.data.string,
            data: null
        } as ResponseDto;
    }
}
```
En este ejemplo:

- Configuración del Token: El token de autorización se pasa en los headers de la petición para autenticar al usuario.
- Manejo de Errores: En caso de error, el catch captura la respuesta de error y la estructura en un objeto ResponseDto.