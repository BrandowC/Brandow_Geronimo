# Documentación del Proyecto NestJS

## Requisitos Previos
Antes de iniciar el proyecto, asegúrate de tener instalado:

- Node.js (versión 16 o superior)
- NestJS CLI (`npm install -g @nestjs/cli`)

## Instalación
Para ejecutar el proyecto, sigue estos pasos:

1. Clona el repositorio:
   ```sh
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Ingresa al directorio del proyecto:
   ```sh
   cd nombre-del-proyecto
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```
4. Inicia el servidor:
   ```sh
   npm run start
   ```

## Estructura del Proyecto
El proyecto sigue la estructura modular de NestJS:

```
 src
 ├──  products
 │   ├── products.module.ts
 │   ├── products.controller.ts
 │   ├── products.service.ts
 │   └── data/products.json
 │
 ├──  categories
 │   ├── categories.module.ts
 │   ├── categories.controller.ts
 │   ├── categories.service.ts
 │   └── data/categories.json
 │
 ├──  users
 │   ├── users.module.ts
 │   ├── users.controller.ts
 │   ├── users.service.ts
 │   └── data/users.json
 │
 ├──  orders
 │   ├── orders.module.ts
 │   ├── orders.controller.ts
 │   ├── orders.service.ts
 │   └── data/orders.json
```

## Módulos Implementados

### 1. ProductsModule (Gestión de productos)
- CRUD completo de productos.
- Consumo de `products.json`.
- Métodos implementados:
  - `findAll()`: Retorna todos los productos.
  - `findOneById(id)`: Retorna un producto por ID.
  - `create(dto)`: Crea un nuevo producto.
  - `update(id, dto)`: Modifica un producto existente.
  - `delete(id)`: Elimina un producto.

### 2. CategoriesModule (Gestión de categorías)
- CRUD de categorías.
- Consumo de `categories.json`.
- Métodos implementados:
  - `findAll()`, `findOneById(id)`, `create(dto)`, `update(id, dto)`, `delete(id)`.

### 3. UsersModule (Gestión de usuarios)
- CRUD de usuarios.
- Consumo de `users.json`.
- Métodos implementados:
  - `findAll()`, `findOneById(id)`, `create(dto)`, `update(id, dto)`, `delete(id)`.

### 4. OrdersModule (Gestión de pedidos)
- CRUD de pedidos.
- Consumo de `orders.json`.
- Métodos implementados:
  - `findAll()`, `findOneById(id)`, `create(dto)`, `update(id, dto)`, `delete(id)`.

## Endpoints Disponibles
Cada módulo expone los siguientes endpoints:

```
GET /products -> Obtiene todos los productos.
GET /products/:id -> Obtiene un producto por ID.
POST /products -> Crea un nuevo producto.
PUT /products/:id -> Actualiza un producto.
DELETE /products/:id -> Elimina un producto.
```
(Similar para `/categories`, `/users`, `/orders`.)

## Uso de Decoradores
Los controladores utilizan decoradores de NestJS:

- `@Get()`, `@Post()`, `@Put()`, `@Delete()` para los endpoints.
- `@Param('id')` para obtener parámetros de ruta.
- `@Body()` para recibir datos en el cuerpo de la petición.

## Consideraciones Finales
- Se recomienda usar Postman o cURL para probar los endpoints.
- Para extender la funcionalidad, agregar más servicios o validaciones en los DTOs.

