# Calculadora - Proyecto de Laboratorio

## Descripción
Este proyecto es una calculadora desarrollada como parte del laboratorio de Sistemas y Tecnologías Web. Proporciona una interfaz de usuario para realizar operaciones matemáticas básicas y algunas operaciones avanzadas como cálculos de potencia y raíz cuadrada. Este frontend está construido usando React y Next.js.

## Requisitos
- Node.js
- npm

## Instalación
1. Clona el repositorio:
   ```bash
   git clone [URL-del-repositorio]

2. Navega al directorio del proyecto:

cd app-calculadora

3. Instala las dependencias del proyecto:

npm install

## Uso
1. Para iniciar el servidor de desarrollo, ejecuta:
El servidor estará corriendo en http://localhost:3000.

npm run dev

2. Para construir la versión de producción, ejecuta:

npm run build
Esto generará los archivos estáticos en el directorio .next.

## Estructura del Proyecto

/Lab7_Calculadora
|-- /.next
|-- /node_modules
|-- /public
|-- /src
|   |-- /app
|   |   |-- /components
|   |   |   |-- /Boton
|   |   |   |-- /Calculadora
|   |   |   |-- /Pantalla
|   |   |-- /styles
|   |-- /types
|   |-- globals.css
|   |-- layout.tsx
|   |-- page.tsx
|-- /storybook
|-- .eslintrc.json
|-- .gitignore
|-- jest.config.js
|-- next.config.js
|-- package.json
|-- README.md
|-- tsconfig.json

## Componentes
Boton: Utilizado para las teclas de la calculadora.
Calculadora: Componente principal que encapsula toda la lógica de la calculadora.
Pantalla: Muestra los resultados y entradas del usuario.

### Desarrollado por
Gabriel Paz

### Licencia
Este proyecto está bajo la Licencia ISC
