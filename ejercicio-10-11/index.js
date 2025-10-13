import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json()) //para usar json 

app.use((req, res, next) => {
    console.log(`Datos received at:  ${req.method} ${req.url}`);
    next();
});

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


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})