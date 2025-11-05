const express = require('express');
const router = express.Router();
const SmsMessage = require('../models/SmsMessage');

// Envoi de SMS
router.post('/send', async (req, res) => {
  const { to, from, body } = req.body;
  const newMessage = new SmsMessage({ to, from, body });

  try {
    // Logique d'envoi de SMS
    // Code pour interagir avec l'API d'envoi SMS
    await newMessage.save();
    res.status(201).send('Message envoyé!');
  } catch (error) {
    res.status(500).send('Erreur lors de l\'envoi du message');
  }
});

// Historique des SMS
router.get('/history', async (req, res) => {
  const messages = await SmsMessage.find();
  res.status(200).json(messages);
});

module.exports = router;
