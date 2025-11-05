const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connecté'))
  .catch(err => console.error('Erreur de connexion MongoDB:', err));

// Routes
app.get('/', (req, res) => {
  res.send('Bienvenue dans l'application SMS Cloud Automation!');
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d\'exécution sur le port ${PORT}`);
});
