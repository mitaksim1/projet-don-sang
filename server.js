////// CONFIGURATION SERVEUR //////////////
// Import express
const express = require("express");
// server va recevoir les fonctionnalités d'express
const server = express();


/// CONFIGURATION DU SERVER POUR LES FICHIERS STATICS ////
// récupères les fichiers statics (image, css, scripts)
server.use(express.static('public'));

//////// ACCEDER AU BODY DE LA REQUETE ///////////
server.use(express.urlencoded({ extended: true }));

//////// CONFIGURATION CONNEXION BDD ////////////////
// Pool va mantenir la connexion avec la bdd active, on aura pas besoin de l'actualiser (envoi de mot de passe) tout le temps
const Pool = require('pg').Pool;
const db = new Pool({
    user: 'postgres',
    password: 'Mi182123@',
    host: 'localhost',
    port: 5432,
    database: 'blood-donation'
}); 



/////// CONFIGURATION TEMPLATE ENGINE ////////////
// nunjucks renderise la page html créée sans les fichiers statics
// noCache: on veut pas qu'il utilise le
const nunjucks = require("nunjucks");
nunjucks.configure("./", {
    express: server,
    noCache: true,
});



///////////// LISTE DE DONNEURS //////////////////
// nunjucks nous permet d'envoyer des données à notre code html cf. config de la renderisation de la page
const donors = [
    {
        name: "Marie Dupont",
        blood: "AB+"
    },
    {
        name: "Jean Martin",
        blood: "B+"
    },
    {
        name: "Anne Marie Durand",
        blood: "A+"
    },
    {
        name: "François Monnet",
        blood: "O+"
    },
]




////// CONFIGURATION DE LA PRESENTATION DE LA PAGE ////////
// on demande à accéder à /, une fois que c'est fait
// la fonction s'éxecute avec les deux paramètres req et res
server.get("/", function(req, res) {
    return res.render("index.html", { donors });
});

// recevoir les données du formulaire
server.post("/", function(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const blood = req.body.blood;

    donors.push({ name, blood });

    return res.redirect("/");
})







//// APPEL AU SERVEUR ET PERMISSION POUR ACCEDER AU PORT 3000 /////

server.listen(3000, function() {
    console.log("Serveur ok")
});