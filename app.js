const express = require("express");
const mongoose = require("mongoose");
const routerArticles = require("./router/articles");
const routerCommentaires = require("./router/commentaires");
const routerUtilisateurs = require("./router/utilisateurs");
const routerParametresApp = require("./router/parametresApp");
 
// spécial pour le fait que l'on va mettre en ligne notre projet
const cors = require("cors");
 
const app = express();

// fonction middleware 
app.use(cors()); // autoriser des sites internet à lui faire des requêtes
app.use(express.json()); // récupérer plus facile le body des requêtes POST et PUT

app.use("/articles",routerArticles ); // utiliser le router Articles
app.use("/commentaires",routerCommentaires ); // utiliser le router Commentaires
app.use("/utilisateurs",routerUtilisateurs ); // utiliser le router Utilisateurs
app.use("/parametresApp",routerParametresApp ); // utiliser le router Parametres d'application


const urlBDD = "mongodb+srv://ifocop_admin:azerty1234@cluster0-s7trc.mongodb.net/test?retryWrites=true&w=majority"; // à récuperer sur le site suivant: https://mlab.com/ 

const optionConnexion = {
      useNewUrlParser : true ,
      useUnifiedTopology: true
};

mongoose.connect(urlBDD , optionConnexion)
        .then(function(){
            console.log("connexion à la base de donnée est réussie");
        })
        .catch(function(err){
            console.log(err);
        })


// spéciale pour la mise en ligne de notre projet 
const port = process.env.PORT || 5800;

app.listen(port , function(){ 
    console.log("serveur lancé sur le port " + port);
});