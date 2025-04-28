require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const urlRoutes = require('./routes/url.routes');
const errorHandler = require('./middleware/errorHandler');


const app = express();

// Conectar a MongoDB
connectDB();

// Middlewares
app.use(express.json());

// Rutas
app.use('/', urlRoutes);

// Manejo errores
app.use(errorHandler);

module.exports = app;