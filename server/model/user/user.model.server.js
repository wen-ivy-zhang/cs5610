var mongoose = require('mongoose');
var userSchema = require('./user.schema.server');
var userModel = mongoose.model("userModel", userSchema);

userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByUserName = findUserByUserName;
userModel.findByCredential = findByCredential;
userModel.updateUser = updateUser;
userModel.deleteUser = deleteUser;

//helper function
//userModel.populateUsers = populateUsers;

module.exports = userModel;

// function populateUsers(users) {
//   return userModel.insertMany(users);
// }

function createUser(user) {
  return userModel.create(user);
}

function findUserById(id) {
  return userModel.findById(id);
}

function findUserByUserName(username) {
  return userModel.findOne({username: username});
}

function findByCredential(username, password){
  console.log("username: " + username + " password: " + password);
  //console.log("connection status: " + mongoose.connection.readyState); // Should not return 0
  return userModel.findOne({username: username , password: password});
}

function updateUser(userId, user) {
  console.log(user);
  var options = { new: true };
  return userModel.findByIdAndUpdate(userId, user, options);
}

function deleteUser(userId){
  return userModel.findByIdAndRemove(userId);
}
