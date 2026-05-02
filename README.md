# Restaurante — API de productos (Express + MongoDB)

API REST ligera para gestionar **productos** de un restaurante o menú, con **Express** y **Mongoose**. Pensada como práctica de backend con persistencia en MongoDB.

**Autora del repositorio:** [@Juli21v](https://github.com/Juli21v)

## Stack

- Node.js (ES modules)
- Express
- Mongoose
- dotenv, CORS
- nodemon (desarrollo)

## API (`/api`)

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/health` | Estado del servicio |
| GET | `/api/products` | Lista productos |
| GET | `/api/products/:id` | Detalle por `_id` de MongoDB |
| POST | `/api/products` | Crear (`nombre` requerido) |
| PUT | `/api/products/:id` | Actualizar |
| DELETE | `/api/products/:id` | Eliminar |

Ejemplos en `request.http`.

## Estructura del repositorio

```
backend-menu-restaurante-mongodb/
├── src/
│   ├── index.js           # Arranque del servidor
│   ├── db.js              # Conexión MongoDB
│   ├── models/product.js
│   └── routes/Products.js
├── request.http           # Ejemplos de peticiones (REST Client / VS Code)
├── package.json
├── .env.example           # Plantilla de variables de entorno
└── .gitignore
```

## Requisitos

- Node.js 18+
- MongoDB (local o Atlas)

## Instalación

```bash
npm install
cp .env.example .env
# Edita .env: PORT y MONGODB_URI
```

## Ejecución

```bash
npm start
```

Por defecto el servidor usa `PORT` del entorno o **9000**. Las rutas del API están montadas bajo `/api` (ver `src/index.js`).

## Seguridad

- No subas el archivo `.env` al repositorio. Usa solo `.env.example` como referencia.
- Si este repo llegó a exponer una URI real en el pasado, **rota la contraseña** en MongoDB Atlas o cambia el usuario de base de datos.
