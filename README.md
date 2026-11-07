# Pourly

> A learning project built with React 19 and TypeScript to search cocktail recipes and experiment with AI recommendations.

**Live Demo:** [pourly.thepuchadesproject.com](https://pourly.thepuchadesproject.com)

---

## Navigation / Navegación
- [English](#english)
  - [What the project does](#what-the-project-does)
  - [Learning Goals & Main Tech](#learning-goals--main-tech)
  - [Note on API Keys & Security](#note-on-api-keys--security)
  - [Roadmap](#roadmap)
  - [Local Installation](#local-installation)
- [Español](#español)
  - [Qué hace el proyecto](#qué-hace-el-proyecto)
  - [Objetivos de aprendizaje y tecnologías](#objetivos-de-aprendizaje-y-tecnologías)
  - [Nota sobre la API Key y seguridad](#nota-sobre-la-api-key-y-seguridad)
  - [Hoja de Ruta](#hoja-de-ruta)
  - [Instalación Local](#instalación-local)

---

<a name="english"></a>
## English

### What the project does
Pourly is a pet learning project created to practice modern React patterns. It allows you to search cocktail recipes by name, ingredient, or category using an external public API, save your favorites to local storage, and ask a bartender AI assistant for custom drink ideas with real-time text streaming.

### Learning Goals & Main Tech
This project was built to test and consolidate key frontend libraries and architecture patterns:
- **React 19 & TypeScript:** Strict typing, components, and hooks.
- **Tailwind CSS v4:** Modern styling with responsive design.
- **React Router DOM:** Layout routing, active navigation, and lazy loading with `Suspense`.
- **Zustand (Slices Pattern):** Modular global state divided into separate slices (`recipes`, `favorites`, `notifications`, `ai`) with DevTools integration.
- **Zod:** Runtime schema validation for external API responses.
- **Headless UI & Heroicons:** Accessible modal dialogs and notification toasts.
- **AI SDK & OpenRouter:** Streaming assistant responses with `streamText`.

### Note on API Keys & Security
Frontend applications should avoid exposing secret API keys in the client bundle.
- **In local development:** Vite's development server acts as a proxy for `/api/openrouter`, reading `OPENROUTER_API_KEY` from `.env.local` and attaching the authorization header without exposing the secret to the browser.
- **In production:** The application is designed to sit behind a web server proxy that injects the secret API key into upstream AI calls, keeping the public build completely clean.

### Roadmap
- [x] Initial project setup with Vite, React 19, TypeScript, and Tailwind CSS
- [x] Layout, navigation header, and page routing
- [x] Drink categories and recipes consumption from external API
- [x] Recipe search and filtering by category and ingredients
- [x] Recipe details modal with ingredients and preparation steps
- [x] Global state management with modular slices
- [x] Favorites collection with local storage persistence
- [x] User notifications system
- [x] Dedicated AI assistant page for drink ideas and recommendations
- [x] AI prompt form and async streaming response handling

### Local Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Puchades/pourly.git
   cd pourly
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` and add your OpenRouter key:
   ```env
   OPENROUTER_API_KEY=your_openrouter_api_key_here
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:5173` in your browser.

---

<a name="español"></a>
## Español

### Qué hace el proyecto
Pourly es un proyecto de práctica y aprendizaje enfocado en trabajar con React moderno. Permite buscar y filtrar recetas de cócteles por categoría o ingrediente consumiendo una API pública externa, guardar recetas favoritas en el almacenamiento local del navegador y pedir sugerencias personalizadas a un asistente de coctelería con Inteligencia Artificial que responde con streaming de texto.

### Objetivos de aprendizaje y tecnologías
El objetivo principal de esta app ha sido poner a prueba e integrar varias librerías y patrones clave:
- **React 19 y TypeScript:** Tipado estricto, componentes funcionales y custom hooks.
- **Tailwind CSS v4:** Maquetación moderna y responsive.
- **React Router DOM:** Enrutamiento modular con layouts, enlaces activos y carga perezosa con `Suspense`.
- **Zustand (Patrón Slices):** Estado global dividido en stores modulares (`recipes`, `favorites`, `notifications`, `ai`) con soporte para DevTools.
- **Zod:** Validación de esquemas en tiempo de ejecución para asegurar las respuestas de la API.
- **Headless UI y Heroicons:** Modales accesibles y sistema de notificaciones visuales.
- **AI SDK y OpenRouter:** Conexión y streaming en tiempo real con modelos de IA usando `streamText`.

### Nota sobre la API Key y seguridad
En proyectos cliente de frontend no es buena práctica exponer claves privadas en el código público.
- **En desarrollo local:** El servidor de Vite incluye un proxy configurado para `/api/openrouter` que lee `OPENROUTER_API_KEY` desde `.env.local` e inyecta la cabecera necesaria, de modo que la clave nunca se envía desde el navegador.
- **En producción:** La aplicación está pensada para desplegarse detrás de un proxy en el servidor web que inyecta la clave de forma segura antes de enviar la petición a la IA, manteniendo el build compilado 100% libre de credenciales.

### Hoja de Ruta
- [x] Configuración inicial del proyecto con Vite, React 19, TypeScript y Tailwind CSS
- [x] Estructura general, cabecera de navegación y rutas
- [x] Consumo de API externa para categorías y recetas de bebidas
- [x] Búsqueda y filtrado de recetas por categoría e ingredientes
- [x] Modal con detalle de la receta, ingredientes e instrucciones
- [x] Gestión de estado global con arquitectura modular de slices
- [x] Colección de favoritos con persistencia en almacenamiento local
- [x] Sistema de avisos y notificaciones en la interfaz
- [x] Vista dedicada de asistente con IA para ideas y recomendaciones
- [x] Formulario de consultas a la IA y renderizado de respuestas asíncronas

### Instalación Local
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Puchades/pourly.git
   cd pourly
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Configurar variables de entorno:
   ```bash
   cp .env.example .env.local
   ```
   Editar `.env.local` y colocar tu clave de OpenRouter:
   ```env
   OPENROUTER_API_KEY=your_openrouter_api_key_here
   ```
4. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Abrir en el navegador en `http://localhost:5173`.
