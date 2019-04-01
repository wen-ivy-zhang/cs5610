var mongoose = require('mongoose');

var widgetSchema = new mongoose.Schema({
  widgetType: {type: String, enum: ['HEADING', 'IMAGE', 'YOUTUBE', 'HTML','TEXT']},
  pageId: {type: mongoose.Schema.ObjectId, ref: "pageModel"},
  name: String,
  text: String,
  placeholder: String,
  description: String,
  url: String,
  width: String,
  height: String,
  rows: Number,
  size: Number,
  class: String,
  icon: String,
  deletable: Boolean,
  formatted: Boolean,
  dateCreated: {type:Date, default: Date.now()}
}, {collection: 'widgets'});

module.exports = widgetSchema;
