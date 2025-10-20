import express from "express";
import cors from "cors"
import productsRouter from './src/routes/products.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json()) //para usar json 

const corsConfig = {
    origin: ['http://localhost:3000', 'https://midominio.com'], // dominios permitidos
    methods: ['GET', 'POST', 'PUT', 'DELETE'],                  // métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'],          // cabeceras permitidas
    exposedHeaders: ['Content-Length'],                         // cabeceras visibles al cliente
    credentials: true,                                          // habilitar credenciales
    maxAge: 600,                                                // cache preflight
    optionsSuccessStatus: 204                                   // respuesta preflight exitosa
}

app.use(cors(corsConfig));



app.use((req, res, next) => {
    console.log(`Datos received at:  ${req.method} ${req.url}`);
    /*res.header('Access-Control-Allow-Origin', 'https://example.com');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');*/
    next();
});

app.use("/api", productsRouter)

app.get("/HTML", (req, res) => {
    res.send("<h1>Hola Mundo</h1>")
})

app.get("/JSON", (req, res) => {
    res.send({productos: [
        {
            nombre: "agua",
            precio: 100
        },
        {
            nombre: "yerba",
            precio: 200
        }
    ]})
})

app.get('/item/:id', (req, res) => {
  const itemId = req.params.id;
  res.send(`Devolviendo el ítem con ID: ${itemId}`);
});

app.get('/items', (req, res) => {
  const category = req.query.category;
  const price = req.query.price;
  res.send(`Categoría: ${category}, Precio: ${price}`);
});

app.use((req, res, next) => {
    res.status(404).send('Recurso no encontrado o ruta inválida');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})