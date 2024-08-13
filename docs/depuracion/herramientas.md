---
title: Herramientas de Depuración
sidebar_position: 1
---

Para depurar la aplicación frontend de Vitalit, se utilizan las siguientes herramientas recomendadas:

### 1. React Developer Tools

**React Developer Tools** es una extensión para navegadores que permite inspeccionar la jerarquía de componentes React en la aplicación, depurar el estado y las props de cada componente, y monitorear el rendimiento de la aplicación. Es una herramienta esencial para cualquier desarrollador trabajando con React, ya que facilita la identificación de problemas en la estructura de los componentes y la lógica de la aplicación.

#### Instalación

React Developer Tools está disponible como una extensión para Chrome y Firefox. Se puede instalar desde los respectivos sitios de extensiones:

- **Chrome:** [React Developer Tools en Chrome Web Store](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- **Firefox:** [React Developer Tools en Mozilla Add-ons](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

#### Uso Básico

Una vez instalada, puedes acceder a las herramientas de desarrollo de React en la pestaña "Components" de las herramientas de desarrollo del navegador. Aquí podrás ver la jerarquía de componentes, revisar y modificar el estado y props, y ver las dependencias de hooks como `useState` y `useEffect`.

## Manejo de Errores

El manejo de errores en la aplicación Vitalit se ha estandarizado mediante el uso de un sistema de generalización de errores a través de un objeto común. Este enfoque permite que todos los errores, tanto en el frontend como en la comunicación con el backend, sean manejados de manera consistente y fácil de depurar.

### Sistema de Generalización de Errores

Los errores se encapsulan en un objeto estándar, que se utiliza para verificar las respuestas antes de que los datos sean procesados o mostrados en la interfaz de usuario. Esto asegura que la aplicación maneje los errores de manera predecible y que el usuario reciba mensajes de error coherentes y útiles.

#### Ejemplo de Manejo de Errores en la Comunicación con el Backend

Aquí tienes un ejemplo de cómo se maneja un error en una petición a la API:

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

- Encapsulación del Error: Si se produce un error en la solicitud, se captura en el bloque catch y se devuelve un objeto ResponseDto con un código de error y un mensaje.
- Verificación del Error: Antes de utilizar los datos devueltos por la API, se verifica el código de respuesta para asegurarse de que no se haya producido un error.