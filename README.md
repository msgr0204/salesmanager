# SalesManager Frontend

Frontend del sistema de gestión de ventas. Esta aplicación permite a los usuarios interactuar con el sistema para realizar CRUD de productos, procesar ventas y generar reportes, conectándose a un backend desarrollado en Spring Boot.

## Tecnologías utilizadas

- **React**: Framework de JavaScript para el desarrollo de interfaces de usuario.
- **TailwindCSS**: Framework de CSS para un diseño responsivo y moderno.
- **Font Awesome**: Biblioteca de íconos.
- **Axios**: Cliente HTTP para interactuar con el backend.
- **Vite**: Herramienta para el desarrollo y empaquetado del proyecto.

---

## Instalación y configuración

### Pre-requisitos

1. **Node.js**: Asegúrate de tener instalado [Node.js](https://nodejs.org/). Recomendado: versión 16 o superior.
2. **Backend configurado**: El backend debe estar funcionando en el puerto `8081`. (Consulta [SalesManager Backend](https://github.com/msgr0204/salesmanager-backend)).

### Instrucciones de instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/msgr0204/salesmanager.git
   cd salesmanager
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura la URL del backend. En el archivo `src/services/api.js`, asegúrate de que la URL apunte a tu backend (por defecto, es `http://localhost:8081`).

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   Esto abrirá automáticamente la aplicación en tu navegador en `http://localhost:5173` (o en otro puerto si `5173` no está disponible).

---

## Scripts disponibles

En el directorio del proyecto, puedes ejecutar:

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Genera una versión de producción del proyecto en la carpeta `dist`.
- `npm run preview`: Previsualiza la aplicación generada en producción.

---

## Estructura del proyecto

- **`src`**: Carpeta principal que contiene todo el código del proyecto.
  - **`components`**: Componentes reutilizables de la aplicación.
  - **`pages`**: Páginas principales de la aplicación.
  - **`services`**: Lógica para conectar con el backend.
  - **`styles`**: Estilos globales.

---

## Funcionalidades principales

- **Gestión de productos**: 
  - Crear, editar, eliminar y listar productos.
- **Módulo de ventas**: 
  - Procesar ventas.
  - Actualizar el carrito de compras.
- **Generación de reportes**: 
  - Generar reportes de ventas y exportar a CSV o PDF.

---

## Personalización

Puedes personalizar los estilos o agregar nuevas funcionalidades modificando los archivos en `src/`.

---

## Contribución

1. Haz un fork del proyecto.
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`).
3. Haz commit de tus cambios (`git commit -m 'Agregar nueva funcionalidad'`).
4. Haz push a tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

---

## Contacto

Para cualquier duda o comentario sobre este proyecto, por favor, contacta al desarrollador principal:

- **Developed by Michael Giraldo**

