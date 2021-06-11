const express = require('express');
const path = require('path')
const app = express();

// Archivos estáticos
app.use(express.static(path.resolve(__dirname, "./public")))

// Servidor 
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
})

// Rutas
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
});

app.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname + '/views/register.html'))
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"))
});