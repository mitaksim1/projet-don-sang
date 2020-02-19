// Import express
const express = require("express");

// server va recevoir les fonctionnalités d'express
const server = express();

// Chemin qu'on veut accéder
// on demande à accéder à /, une fois que c'est fait
// la fonction s'éxecute avec les deux paramètres req et res
server.get("/", function(req, res) {
    return res.send("ok, je suis arrivée ici");
})

// on écoute le port 3000
server.listen(3000);