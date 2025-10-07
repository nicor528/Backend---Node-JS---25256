import express from "express"
import {join, dirname} from "path"
import { fileURLToPath } from "url"

const __filename =  fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();


app.use("/docs", express.static(join(__dirname, "public")));

app.use((req, res, next) => {
    console.log(`Datos recibidos: ${req.method} ${req.url}`);
    next();
});

app.get('/testmiddlewares', (req, res) => {
  res.send('Hola desde Express con middlewares!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})