---
title: Preguntas Frecuentes (FAQ)
sidebar_position: 3
---

# Preguntas Frecuentes (FAQ)

## Solución de Problemas Comunes

### 1. Error: "Command not found" al ejecutar scripts de npm

**Solución:** Asegúrate de que Node.js y npm están instalados correctamente y que las versiones cumplen con los requisitos mínimos (Node.js >= 18). Puedes verificarlo ejecutando `node -v` y `npm -v` en tu terminal. Si el problema persiste, intenta reinstalar Node.js y npm.

### 2. Error: "Module not found" después de clonar el repositorio

**Solución:** Este error generalmente ocurre si no se han instalado las dependencias. Después de clonar el repositorio, asegúrate de ejecutar `npm install` en la raíz del proyecto para instalar todas las dependencias necesarias antes de ejecutar cualquier script.

### 3. Problemas con el despliegue en GitHub Pages

**Solución:** Si encuentras problemas al desplegar la aplicación en GitHub Pages, asegúrate de que el archivo `package.json` esté configurado correctamente con la propiedad `"homepage": "https://Vitalit2-0.github.io/VitalitFrontend/"`. Verifica también que los scripts `predeploy` y `deploy` estén presentes. Si el despliegue falla, revisa los logs de GitHub Actions para identificar el problema.

### 4. Estilos no aplicados correctamente al usar Tailwind

**Solución:** Asegúrate de que Tailwind CSS esté correctamente configurado en el proyecto y que los archivos de configuración, como `tailwind.config.js`, estén presentes y configurados correctamente. Si Tailwind no está aplicando estilos como se espera, verifica que las clases estén bien escritas y que no haya conflictos con otros estilos (por ejemplo, SASS).

### 5. Estado global no se actualiza correctamente al usar Zustand

**Solución:** Si el estado global no se actualiza como se espera al usar Zustand, verifica que las funciones que modifican el estado estén correctamente implementadas. Asegúrate de que los componentes que dependen del estado estén suscritos correctamente al store de Zustand. Consulta la [documentación de Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) para obtener más detalles sobre la configuración y uso de Zustand.

### 6. Problemas de rendimiento en la aplicación

**Solución:** Si experimentas problemas de rendimiento, utiliza React Developer Tools para identificar posibles cuellos de botella. Verifica que no haya renderizados innecesarios y que los componentes estén correctamente optimizados. Asegúrate de usar `useMemo` y `useCallback` donde sea necesario para evitar renderizados redundantes.

## Recursos Adicionales

Para obtener más información y guías detalladas sobre las tecnologías utilizadas en el proyecto, consulta los siguientes recursos:

- **React Documentation:** [https://react.dev/](https://react.dev/)
- **Zustand Documentation:** [https://docs.pmnd.rs/zustand/getting-started/introduction](https://docs.pmnd.rs/zustand/getting-started/introduction)
- **SASS Documentation:** [https://sass-lang.com/documentation/](https://sass-lang.com/documentation/)
- **Material-UI (MUI) Documentation:** [https://mui.com/](https://mui.com/)
- **GitHub Pages Documentation:** [https://docs.github.com/en/pages](https://docs.github.com/en/pages)

---

Estos recursos proporcionan una base sólida para resolver problemas comunes y profundizar en el uso de las herramientas y tecnologías clave utilizadas en el desarrollo de la aplicación Vitalit.
