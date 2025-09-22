# 1) Ejemplo práctico: Cookies

Las **cookies** son pequeños pares clave/valor que el servidor puede pedir al navegador que guarde, y que el navegador envía automáticamente en solicitudes posteriores al mismo dominio.

## ¿Qué pueden contener?
- Identificadores de sesión (session id)
- Preferencias (tema, idioma)
- Token de autenticación (aunque por seguridad se recomienda usar HttpOnly + cookies seguras o storage con medidas adicionales)

---

## Ejemplo (Servidor Express): crear y leer cookies

**Instalar** (opcional): `npm install express cookie-parser`

```js
// server.js (CommonJS)
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());

app.get('/set-cookie', (req, res) => {
  // Setear una cookie sencilla (no httpOnly)
  res.cookie('miCookie', 'valor123', { maxAge: 1000 * 60 * 60, httpOnly: false });
  // Setear cookie segura y httpOnly (no accesible desde JS)
  res.cookie('sessionId', 'abcde12345', {
    maxAge: 1000 * 60 * 60 * 24, // 1 día
    httpOnly: true,
    secure: true,   // sólo HTTPS
    sameSite: 'lax' // control de CSRF básico
  });
  res.send('Cookies seteadas');
});

app.get('/leer-cookie', (req, res) => {
  // Todas las cookies llegan en req.cookies
  res.json(req.cookies);
});

app.listen(3000, () => console.log('Server en :3000'));
