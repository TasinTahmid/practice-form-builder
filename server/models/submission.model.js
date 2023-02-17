const mongoose = require('mongoose');

const Submission = new mongoose.Schema({
    formName: { type: String, required: true},
    formId: { type: String, required: true},
    values: { type: Map, of: String, required: true},
  },{ collection: 'submissions'}
);

const model = mongoose.model('Submission', Submission);

module.exports = model;