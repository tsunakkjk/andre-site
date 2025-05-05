const express = require('express');
const caminho = require("path");
const porta = 3000;
const app = express();
app.use(express.static('public'));

app.get("/", (requestAnimationFrame, res) => {
    res.sendFile(caminho.join(
        __dirname, "public", "index.html"
    ));
});

app.listen(porta, () => {
    console.log("http://localhost:" + porta);
});

