const mongoose = require('mongoose');

const ObjectperbaikanSchema = mongoose.Schema({
  objectName: {
    type: String,
    unique: 1,
    maxlength: 150,
    required: [true, 'This field is required'],
  },
  objectCategory: {
    type: String,
    default: '',
  },
  Cart: {
    type: Array,
    default: [],
  },
  history: {
    type: Array,
    default: [],
  },
});

const Objectperbaikan = mongoose.model(
  'Objectperbaikan',
  ObjectperbaikanSchema
);
module.exports = { Objectperbaikan };
