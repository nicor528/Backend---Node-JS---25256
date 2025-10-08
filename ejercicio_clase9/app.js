import express from "express"

const app = express()

app.get("/ping", (req, res) => {
    console.log(req)
    res.send("pong")
})

app.listen(3000, () => {
    console.log("Servidor en http://localhost:3000")
})