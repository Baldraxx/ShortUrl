# ShortUrl

ShortUrl es un servicio RESTful de acortamiento de URLs diseñado para generar, gestionar y redirigir enlaces cortos de forma eficiente.

## 📋 Descripción

- **Crear**, **redirigir**, **actualizar** y **eliminar** URLs cortas.
- Consultar **estadísticas** de acceso (visitas).
- Construido en **Node.js** con **Express** y **MongoDB** (Mongoose).

## 🚀 Tecnologías y recursos

- **Lenguaje**: JavaScript (ES6+)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Base de datos**: MongoDB con Mongoose
- **Variables de entorno**: dotenv
- **Desarrollo**: nodemon
- **Pruebas**: Jest + Supertest
- **Control de versiones**: Git

## ⚙️ Instalación

1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPO>
   cd ShortUrl
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Crea un archivo `.env` en la raíz con:
   ```dotenv
   MONGO_URI=mongodb://localhost:27017/shortUrl
   PORT=3000
   ```

## 🏃 Uso

Arranca el servidor en modo desarrollo:
```bash
npm run dev
```

- **POST** `/shorten`  → Crear URL corta:
  ```bash
  curl -X POST http://localhost:3000/shorten \
    -H "Content-Type: application/json" \
    -d '{"url":"https://ejemplo.com"}'
  ```
- **GET** `/:code` → Redirigir al original:
  ```bash
  curl -i http://localhost:3000/a1b2c3
  ```
- **PUT** `/:code` → Actualizar URL:
  ```bash
  curl -X PUT http://localhost:3000/a1b2c3 \
    -H "Content-Type: application/json" \
    -d '{"url":"https://nuevo.com"}'
  ```
- **DELETE** `/:code` → Eliminar enlace:
  ```bash
  curl -X DELETE http://localhost:3000/a1b2c3
  ```
- **GET** `/:code/stats` → Ver estadísticas:
  ```bash
  curl http://localhost:3000/a1b2c3/stats
  ```

## ✅ Pruebas automatizadas

Ejecuta la suite con:
```bash
npm test
```
- Basada en **Jest** y **Supertest**.

## 📄 Licencia

Este proyecto está bajo licencia MIT.  

