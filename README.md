## Requerimientos

Asegúrate de tener Node.js y npm (o yarn) instalados en tu computadora, para manejo de versiones descarga NVM (Node version manager).

## Pasos para arrancar el proyecto

1. Clonar el repositorio en tu local
2. Crear un archivo llamado `.env` para las variables de entorno
3. Instalar dependencias con `npm install`
4. Agregar archivo `tsconfig.json` para la configuración de typescript
5. Arrancar proyecto con `npm start`

## Variables de entorno (.env)

```
REACT_APP_POKEMON_ENDPOINT="https://pokeapi.co/api/v2/pokemon/"
```

## Configuración de `tsconfig.json`

La encontraras en [`tsconfig.json`](https://github.com/Programador-Azteca/pokedex-typescript/blob/main/tsconfig.json) en la raiz del proyecto.

## Commandos para arrancar tu applicación

#### `npm start`

Ejecuta la applicación en modo de desarrollo.\
Abre en el navegador la URL [http://localhost:3000](http://localhost:3000) para visualizarlo.

## Creación de un proyecto nuevo con typescript e instalación de librerias

1. Crea una nueva carpeta para tu proyecto y abre una terminal en ella.
2. Usa el comando `npx create-react-app [nombre de tu proyecto] --template typescript` para crear una nueva aplicación de React con typescript incluido.
3. Una vez que la aplicación ha sido creada, ingresa a la carpeta del proyecto usando "cd [nombre de tu proyecto]"
4. Usa el comando `npm start` o `yarn start` para iniciar el servidor de desarrollo y verificar que tu aplicación esté funcionando correctamente.
5. Sigamos con la instalación de Material UI y Styled components ejecutando
   ```
   npm install @mui/material @emotion/react @emotion/styled
   npm install @mui/icons-material
   npm install @mui/material @mui/styled-engine-sc styled-components
   npm i --save-dev @types/styled-components
   ```
6. Agregar archivo `tsconfig.json` para la configuración de typescript

## Recursos y documentación

### [Material UI](https://mui.com/material-ui/getting-started/installation/)

### [React ciclo de vida](https://es.reactjs.org/docs/state-and-lifecycle.html)

### [React hooks](https://es.reactjs.org/docs/hooks-intro.html)

### [Create React App (CRA)](https://create-react-app.dev/docs/getting-started)

### [Node Js](https://nodejs.org/en/)

### [Material UI](https://mui.com/material-ui/getting-started/overview/)

### [Styled Component](https://styled-components.com/docs/basics#installation)

### [Poke API](https://pokeapi.co/docs/v2)
