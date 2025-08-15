# Gestor Comercial - Frontend

Este proyecto es la interfaz de usuario (frontend) para la aplicación "Gestor Comercial". Está desarrollado con Angular y diseñado para interactuar con una API backend para gestionar operaciones comerciales como clientes, productos, proveedores y ventas.

## Características Principales

*   **Dashboard:** Visualización de datos y métricas clave del negocio.
*   **Gestión de Productos:** Crear, ver, editar y eliminar productos.
*   **Gestión de Clientes:** Administración de la información de los clientes.
*   **Gestión de Proveedores:** Administración de la información de los proveedores.
*   **Gestión de Ventas:** Creación y seguimiento de transacciones de venta.
*   **Autenticación:** Páginas de Login y Registro para usuarios.

## Tecnologías Utilizadas

*   **Angular:** Framework principal para el desarrollo de la aplicación.
*   **TypeScript:** Lenguaje de programación para la lógica de la aplicación.
*   **SCSS:** Preprocesador de CSS para los estilos.
*   **CoreUI:** Librería de componentes de UI para Angular.
*   **Chart.js:** Para la visualización de gráficos en el dashboard.
*   **Karma & Jasmine:** Para la ejecución de pruebas unitarias.

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

*   Node.js (versión ^20.19.0 || ^22.12.0 || ^24.0.0)
*   NPM (versión >= 9)
*   Angular CLI

## Instalación y Ejecución

Sigue estos pasos para poner en marcha el proyecto en tu entorno local:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/coreui/coreui-free-angular-admin-template.git
    cd commercial_manager_front
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecutar el servidor de desarrollo:**
    El comando `start` levantará un servidor local (normalmente en `http://localhost:4200/`) y abrirá el navegador automáticamente (`-o`).
    ```bash
    npm start
    ```

4.  **Compilar para producción:**
    Para crear una versión de producción optimizada, usa el siguiente comando. Los archivos se generarán en el directorio `dist/`.
    ```bash
    npm run build
    ```

5.  **Ejecutar pruebas:**
    Para correr las pruebas unitarias definidas en el proyecto:
    ```bash
    npm run test
    ```

## Estructura del Proyecto

La lógica principal de la aplicación se encuentra en el directorio `src/app`:

*   `src/app/models`: Contiene las definiciones de las interfaces de datos (ej. `client.model.ts`, `product.model.ts`) que estructuran la información de la aplicación.
*   `src/app/services`: Contiene los servicios de Angular. Estos manejan la lógica de negocio y la comunicación con la API backend (ej. `product.service.ts`, `sale.service.ts`).
*   `src/app/views`: Contiene los componentes visuales de la aplicación, organizados por funcionalidad (Dashboard, Productos, Ventas, etc.).
*   `src/app/layout`: Define la estructura principal de la página, como la cabecera, el pie de página y el menú de navegación.
*   `src/environments`: Contiene los archivos de configuración para los diferentes entornos (desarrollo y producción), como la URL de la API.

## Dependencia del Backend

Este frontend está diseñado para funcionar con una API backend. La URL y otras configuraciones de la API deben ser especificadas en el archivo `src/environments/environment.ts` y `src/environments/environment.prod.ts`. Sin una conexión a un backend funcional, la aplicación no podrá obtener ni guardar datos.
