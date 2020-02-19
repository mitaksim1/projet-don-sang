////// CONFIGURATION SERVEUR //////////////
// Import express
const express = require("express");
// server va recevoir les fonctionnalités d'express
const server = express();


/// CONFIGURATION DU SERVER POUR LES FICHIERS STATICS ////
// récupères les fichiers statics (image, css, scripts)
server.use(express.static('public'));




/////// CONFIGURATION TEMPLATE ENGINE ////////////
// nunjucks renderise la page html créée sans les fichiers statics
const nunjucks = require("nunjucks");
nunjucks.configure("./", {
    express: server
});




////// CONFIGURATION DE LA PRESENTATION DE LA PAGE ////////
// on demande à accéder à /, une fois que c'est fait
// la fonction s'éxecute avec les deux paramètres req et res
server.get("/", function(req, res) {
    return res.render("index.html");
});





//// APPEL AU SERVEUR ET PERMISSION POUR ACCEDER AU PORT 3000 /////

server.listen(3000, function() {
    console.log("Serveur ok")
});