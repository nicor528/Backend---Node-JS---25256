# 🌐 CORS — Configuración y Uso en Express

## 🧾 ¿Qué es CORS?

CORS (*Cross-Origin Resource Sharing*) es un mecanismo que permite a un servidor indicar **qué orígenes externos** (dominios) pueden acceder a sus recursos.

Por defecto, los navegadores **bloquean solicitudes** desde dominios distintos al del servidor.  
Con CORS se pueden **habilitar, restringir o personalizar** estos accesos.

---

## 🧭 Tabla de Configuraciones Comunes de CORS

| Opción                | Tipo                   | Descripción                                                                                   | Ejemplo                                                                                       |
|------------------------|-------------------------|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| `origin`               | `String` / `Array` / `Boolean` | Define **qué dominios** pueden acceder a los recursos.                                        | `"*"` (todos) / `"https://midominio.com"` / `["https://a.com","https://b.com"]` / `false` |
| `methods`              | `String` / `Array`     | Define qué **métodos HTTP** están permitidos.                                                 | `["GET", "POST"]` o `"GET,POST,PUT,DELETE"`                                                   |
| `allowedHeaders`       | `Array` / `String`     | Define qué **cabeceras personalizadas** puede enviar el cliente.                              | `["Content-Type", "Authorization"]`                                                           |
| `exposedHeaders`       | `Array` / `String`     | Define qué cabeceras el cliente puede **ver en la respuesta**.                                 | `["Content-Length", "X-Custom-Header"]`                                                       |
| `credentials`          | `Boolean`              | Permite enviar **cookies o credenciales** en solicitudes CORS.                                | `true` o `false`                                                                              |
| `maxAge`               | `Number`               | Tiempo (en segundos) que el navegador puede **cachear la respuesta de preflight**.             | `600` (10 minutos)                                                                           |
| `preflightContinue`    | `Boolean`              | Indica si la respuesta de preflight debe **pasar al siguiente middleware**.                    | `false`                                                                                       |
| `optionsSuccessStatus` | `Number`               | Código de estado HTTP que se enviará en respuesta al preflight.                               | `204` (por defecto)                                                                          |

---

## 🧪 ¿Qué es un preflight?

Es una solicitud automática tipo OPTIONS que el navegador envía antes de la solicitud real (GET, POST, etc.) para preguntar al servidor:

❓ “¿Estás de acuerdo con que este origen (dominio) te haga esta petición?”

❓ “Qué métodos y cabeceras se permiten?”

Si el servidor responde afirmativamente (con los encabezados CORS correctos), recién ahí el navegador envía la solicitud original.
La respuesta de preflight es la autorización previa que el servidor da al navegador para que se pueda realizar la solicitud real desde otro dominio.

## ⚙️ Ejemplo de Configuración de CORS en Express

```javascript
// server.js
const express = require('express');
const cors = require('cors');
const app = express();

// ✅ Configuración personalizada de CORS
const corsOptions = {
  origin: ['http://localhost:3000', 'https://midominio.com'], // dominios permitidos
  methods: ['GET', 'POST', 'PUT', 'DELETE'],                  // métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'],          // cabeceras permitidas
  exposedHeaders: ['Content-Length'],                         // cabeceras visibles al cliente
  credentials: true,                                          // habilitar credenciales
  maxAge: 600,                                                // cache preflight
  optionsSuccessStatus: 204                                   // respuesta preflight exitosa
};

app.use(cors(corsOptions));
app.use(express.json());

// 📌 Ruta de ejemplo
app.get('/api/data', (req, res) => {
  res.json({ message: 'CORS configurado correctamente 🚀' });
});

// 📌 Error 404 básico
app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

app.listen(4000, () => {
  console.log('Servidor corriendo en http://localhost:4000');
});
```

## 🚀 Casos Prácticos

1. Permitir acceso a todos los orígenes (⚠️ solo en desarrollo)
``` javascript
app.use(cors());
```

2. Permitir acceso a un único dominio
``` javascript
app.use(cors({ origin: 'https://midominio.com' }));
```

3. Permitir múltiples dominios
``` javascript
app.use(cors({ origin: 'https://midominio.com' }));
```

4. Permitir credenciales (cookies, sesiones, tokens)
``` javascript
const corsOptions = {
  origin: 'https://midominio.com',
  credentials: true
};
app.use(cors(corsOptions));
```

## 🧪 Tip: Testear CORS con Postman
* Postman no aplica restricciones CORS, por lo que si funciona ahí pero no en navegador, probablemente el problema sea de configuración de CORS.

* Revisá:
    * Que el dominio esté en **origin**
    * Que los métodos y cabeceras estén permitidos
    * Que la respuesta al preflight (OPTIONS) sea correcta