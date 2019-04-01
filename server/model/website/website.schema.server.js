var mongoose = require('mongoose');

var pageSchema = require('../page/page.schema.server');

var websiteSchema = mongoose.Schema(
  {
    name: String,
    developerId: {type: mongoose.Schema.Types.ObjectId, ref: 'userModel'},
    description: String,
    //pages: [pageSchema],
    pages: [{type: mongoose.Schema.Types.ObjectId, ref: 'pageModel'}],
    dateCreated: {type: Date, default: Date.now()}

  }, {collection: "websites"}
);

module.exports = websiteSchema;
