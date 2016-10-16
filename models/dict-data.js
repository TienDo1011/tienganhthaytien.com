var mongoose = require('mongoose');

var dictDataSchema = new mongoose.Schema({
  word: {type: String, required: true, index: true},
  oaldData: String,
  evData: String
});

var DictData = mongoose.model('DictData', dictDataSchema);
module.exports = DictData;
