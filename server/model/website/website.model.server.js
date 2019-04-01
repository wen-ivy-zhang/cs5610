var mongoose = require('mongoose');

var websiteSchema = require('./website.schema.server');
var websiteModel = mongoose.model("websiteModel", websiteSchema);
var userModel = require('../user/user.model.server');

websiteModel.createWebsite = createWebsite;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.findAllWebsiteForUser = findAllWebsiteForUser;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;


module.exports = websiteModel;


function createWebsite(userId, website) {
  console.log("create website: userId: " + userId);
  console.log("create website: website: " + website);
  return websiteModel.create(website)
    .then(
      function (website) {
        userModel.findUserById(userId)
          .then(
            function (user) {
              console.log(user);
              //console.log(website);
              user.websites.push(website);
              //user.websites.push(website._id);
              console.log(user);
              return userModel.updateUser(userId, user);
              //return user.save();
            }
          );
        return website;
      }
    )
}

function findAllWebsiteForUser(userId) {
  console.log(userId);
  return websiteModel.find({developerId: userId});
}

function findWebsiteById(id) {
  return websiteModel.findById(id);
}

function updateWebsite(id, website) {
  var options = { new: true };
  return websiteModel.findByIdAndUpdate(id, website, options);
}

function deleteWebsite(id){
  return websiteModel.findByIdAndRemove(id)
    .then(
      function (website) {
        userModel.findUserById(website.developerId)
          .then(
            function (user) {
              console.log(user);
              //console.log(website);
              for (var x = 0; x < user.websites.length; x++) {
                //console.log(user.websites[x]);
                //console.log(id);
                if (user.websites[x] == id) {
                  //remove the website reference from the user website array as well
                  user.websites.splice(x, 1);
                  //console.log("after removal: " + user);
                  return userModel.updateUser(user._id, user);
                }
              }
              //user.websites.push(website);
              //user.websites.push(website._id);
              //console.log(user);
              //return userModel.updateUser(userId, user);
              //return user.save();
            }
          );
        return website;
      }
    );
}
