
module.exports = function (app) {

  // var websites = [
  //   {_id: "123", name: "Facebook", developerId: "456", description: "Lorem"},
  //   {_id: "234", name: "Tweeter", developerId: "456", description: "Lorem"},
  //   {_id: "456", name: "Gizmodo", developerId: "456", description: "Lorem"},
  //   {_id: "890", name: "Go", developerId: "123", description: "Lorem"},
  //   {_id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem"},
  //   {_id: "678", name: "Checkers", developerId: "123", description: "Lorem"},
  //   {_id: "789", name: "Chess", developerId: "234", description: "Lorem"}
  // ]

  //POST
  app.post("/api/user/:userId/website", createWebsite);

  //GET
  app.get("/api/user/:userId/website", findAllWebsitesForUser);
  app.get("/api/website/:websiteId", findWebsiteById);

  //PUT
  app.put("/api/website/:websiteId", updateWebsite);

  //DELETE
  app.delete("/api/website/:websiteId", deleteWebsite);

  var websiteModel = require("../model/website/website.model.server");

  function createWebsite(req, res) {
    var userId = req.params.userId;
    var website = req.body;
    // for (var i = 0; i < websites.length; i++) {
    //   if (websites[i].developerId === userId && websites[i].name === website.name) {
    //     res.status(404).send("This website is already exist.");
    //     return;
    //   }
    // }
    // website._id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();
    // website.developerId = userId;
    // websites.push(website);
    // res.json(website);

    console.log("userId: " + userId);
    console.log(website);
    websiteModel.createWebsite(userId, website)
      .then(
        function (website) {
          console.log(website);
          res.json(website);
        },
        function (error) {
          res.sendStatus(400).send(error);
        }
      )
  }

  function findAllWebsitesForUser(req, res) {
    console.log("Server enter findAllWebsitesForUser");
    var userId = req.params.userId;
    // var resultSet = [];
    // for (var x = 0; x < websites.length; x++) {
    //   if (websites[x].developerId === userId) {
    //     resultSet.push(websites[x]);
    //   }
    // }
    // res.json(resultSet);

    websiteModel.findAllWebsiteForUser(userId)
      .then(
        function (websites) {
          res.json(websites);
        },
        function (err) {
          res.sendStatus(400).send(err);
        }
      )
  }

  function findWebsiteById(req, res) {
    var websiteId = req.params.websiteId;
    // for (var i = 0; i < websites.length; i++) {
    //   if (websites[i]._id === websiteId) {
    //     return res.json(websites[i]);
    //   }
    // }
    // res.status(404).send("Cannot find the website");

    websiteModel.findWebsiteById(websiteId)
      .then(
        function(website){
          res.json(website);
        },
        function (err) {
          res.sendStatus(400).send(err);
        }
      )
  }

  function updateWebsite(req, res) {
    var websiteId = req.params.websiteId;
    var updatedWebsite = req.body;

    console.log("update website: " + websiteId + " " + updatedWebsite.name + " " + updatedWebsite.description);
    // for (var i = 0; i < websites.length; i++) {
    //   if (websites[i]._id === websiteId) {
    //     websites[i].name = updatedWebsite.name;
    //     websites[i].description = updatedWebsite.description;
    //
    //     res.json(updatedWebsite);
    //     return;
    //   }
    // }
    // res.status(404).send("Website not found!");

    websiteModel.updateWebsite(websiteId, updatedWebsite)
      .then(
        function (website) {
          res.json(website);
        },
        function (err) {
          res.sendStatus(400).send(err);
        }
      );
  }

  function deleteWebsite(req, res) {
    var websiteId = req.params.websiteId;
    // for (var x = 0; x < websites.length; x++) {
    //   if (websites[x]._id === websiteId) {
    //     res.json(websites[x]);
    //     websites.splice(x, 1);
    //     return;
    //   }
    // }
    // res.status(404).send("Website with ID: " + websiteId + " cannot be found");

    websiteModel.deleteWebsite(websiteId)
      .then(
        function (website) {
          res.json(website);
        },
        function (err) {
          res.sendStatus(400).send(err);
        }
      );
  }

}
