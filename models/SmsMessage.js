const mongoose = require('mongoose');

const SmsMessageSchema = new mongoose.Schema({
  to: { type: String, required: true },
  from: { type: String, required: true },
  body: { type: String, required: true },
  status: { type: String, default: 'en attente' },
  sentAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SmsMessage', SmsMessageSchema);
