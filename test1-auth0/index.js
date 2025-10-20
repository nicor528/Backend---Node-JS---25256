import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const state = "test123"
console.log(process.env.AUTH0_DOMAIN)
console.log(PORT)
app.use(express.json()) //para usar json 

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.AUTH0_CLIENT_SECRET,
    baseURL: 'http://localhost:3000',
    clientID:  process.env.AUTH0_CLIENT_ID,
    issuerBaseURL: process.env.AUTH0_DOMAIN
};

app.use(auth(config));

app.use((req, res, next) => {
    console.log(`Datos received at:  ${req.method} ${req.url}`);
    next();
});

/*
app.get("/auth/google", (req, res) => {
    const redirectUri = encodeURIComponent("http://localhost:3000/auth/callback");
    const auth0Domain = process.env.AUTH0_DOMAIN;
    const clientId = process.env.AUTH0_CLIENT_ID;

    const authUrl = `https://${auth0Domain}/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&connection=google-oauth2&scope=openid profile email`;

    res.redirect(authUrl);
});


app.get("/auth/login", (req, res) => {
    const redirectUri = encodeURIComponent("http://localhost:3000/auth/callback");
    const authUrl = `https://${process.env.AUTH0_DOMAIN}/authorize?
    response_type=code&client_id=${process.env.AUTH0_CLIENT_ID}&redirect_uri=
    ${redirectUri}`;

    res.redirect(authUrl);
});*/

app.get("/auth/callback", async (req, res) => {
    const code = req.query.code;
    const tokenUrl = `https://${process.env.AUTH0_DOMAIN}/oauth/token`;

    const body = {
        grant_type: "authorization_code",
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        code,
        redirect_uri: "http://localhost:3000/auth/callback",
    };

    const response = await fetch(tokenUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });

    const tokens = await response.json();
    console.log(tokens); // acá tenés access_token, id_token, etc.

    // Podés verificar el id_token (JWT) y extraer el perfil del usuario
    // luego emitir tu propio token para tu sesión si querés
});



app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})