const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10003;

// Remplacez par l'adresse IP autorisée
const allowedIP = '82.65.82.204';

// Middleware pour vérifier l'adresse IP


// Servir les fichiers statiques dans le dossier "public"
app.use(express.static(path.join(__dirname, 'public')));

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
