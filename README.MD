# Proyecto de Nest 

Este es un proyecto de API desarrollado con [NestJS](https://nestjs.com/). Maneja categorías, órdenes, productos y usuarios mediante controladores y servicios.

## Estructura del Proyecto

El código fuente principal se encuentra en la carpeta `src/`, organizada en módulos:

- **categories/**: Controlador y servicio para manejar categorías de productos.
- **orders/**: Controlador y servicio para gestionar órdenes de compra.
- **products/**: Controlador y servicio para administrar productos.
- **users/**: Controlador y servicio para la gestión de usuarios.
- **app.module.ts**: Módulo principal de la aplicación.
- **main.ts**: Punto de entrada de la aplicación.

## Instalación y Configuración

### 1. Clonar el Repositorio
```sh
git clone <URL_DEL_REPOSITORIO>
cd proyect-tienda
```

### 2. Instalar Dependencias
```sh
yarn install  # O npm install
```

### 3. Ejecutar el Proyecto
```sh
yarn start:dev  # O npm run start:dev
```

La API estará disponible en `http://localhost:3000/`.

## Uso

### **Categories**
- **Obtener todas las categorías**
  - `GET /categories`
- **Crear una nueva categoría**
  - `POST /categories`
  - @body `{ name: string }`

### **Orders**
- **Obtener todas las órdenes**
  - `GET /orders`
- **Crear una nueva orden**
  - `POST /orders`
  - @body `{ userId: number, products: number[] }`

### **Products**
- **Obtener todos los productos**
  - `GET /products`
- **Crear un producto**
  - `POST /products`
  - @body `{ name: string, price: number, categoryId: number }`

### **Users**
- **Obtener todos los usuarios**
  - `GET /users`
- **Crear un usuario**
  - `POST /users`
  - @body `{ name: string, email: string }`

## Tecnologías Utilizadas
- NestJS
- TypeScript
- Yarn 

## Autor
Desarrollado por [Brandow Stivent Claros Polania].
