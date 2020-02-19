////// CONFIGURATION SERVEUR //////////////

// Import express
const express = require("express");
// server va recevoir les fonctionnalités d'express
const server = express();

////////////////////////////////////////////


/////// CONFIGURATION TEMPLATE ENGINE ////////////
const nunjucks = require("nunjucks");
nunjucks.configure("./", {
    express: server
})


////////// CONFIGURATION DE LA PRESENTATION DE LA PAGE ///////////

// on demande à accéder à /, une fois que c'est fait
// la fonction s'éxecute avec les deux paramètres req et res
server.get("/", function(req, res) {
    return res.send("ok, je suis arrivée ici");
});

///////////////////////////////////////////////////////////////////



///////////// APPEL AU SERVEUR ET PERMISSION POUR ACCEDER AU PORT 3000 /////////

server.listen(3000, function() {
    console.log("Serveur ok")
});