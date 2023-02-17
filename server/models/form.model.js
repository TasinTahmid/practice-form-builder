const mongoose = require('mongoose');

const Form = new mongoose.Schema({
    name: { type: String, required: true},
    fields: { type:[String], required: true},
  },{ collection: 'forms'}
);

const model = mongoose.model('Form', Form);

module.exports = model;