var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  websites: [{type: mongoose.Schema.Types.ObjectId, ref: 'websiteModel'}],
  dateCreated: {
    type:Date,
    default: Date.now(),
  },
}, {collection: 'users'});

module.exports = userSchema;
