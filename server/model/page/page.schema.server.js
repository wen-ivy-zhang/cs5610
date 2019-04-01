var mongoose = require('mongoose');
//var widgetSchema = require('../widget/widget.schema.server');

var pageSchema = mongoose.Schema({

  name: String,
  websiteId: {type: mongoose.Schema.ObjectId, ref: "websiteModel"},
  title: String,
  description: String,
  //widgets: [widgetSchema],
  widgets: [{type: mongoose.Schema.Types.ObjectId, ref: 'widgetModel'}],
  dateCreate:{type: Date, default: Date.now()}
  }, {collection: "pages"}
);

module.exports = pageSchema;
