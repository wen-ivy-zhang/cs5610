
module.exports = function (app) {

  var users = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "Alice.Wonder@gmail.com"},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "Bob.Marley@gmail.com"},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "Charly.Garcia@gmail.com"},
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi", email: "Jose.Annunzi@gmail.com"}
  ];

  //Put
  app.put("/api/user/:userId", updateUser);

  //GET
  app.get("/api/user", findUserByCredential);
  app.get("/api/user", findUserByUsername);
  app.get("/api/user/:userId", findUserById);
  app.get("/api/user/hello", helloUser);

  //POST
  app.post("/api/user", createUser);

  //DELETE
  app.delete("/api/user/:userId", deleteUser);


  function helloUser(req, res) {
    console.log("Enter Hello!");
    res.send("Hello from user service!");
  }

  function createUser(req, res) {
    console.log("Server enter createUser");
    var user = req.body;
    user._id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();
    console.log("The new user's username: " + user.username + " password: " + user.password);
    users.push(user);
    res.json(user);
  }


  function findUserByCredential(req, res) {
    console.log("Server enter findUserByCredential");
    let username = req.query['username'];
    let password = req.query['password'];
    let user = null;

    if (username && password){
      user = users.find(function (user) {
        return user.username === username && user.password === password;
      });
    }
    res.json(user);
  }

  function findUserByUsername(req, res) {
    console.log("Server enter findUserByUsername");
    let username = req.query['username'];
    let user = null;

    if (username){
      user = users.find(function (user) {
        return user.username === username;
      });
    }
    res.json(user);
  }

  function findUserById(req, res){
    console.log("Server enter findUserById");
    var userId = req.params["userId"];
    var user = users.find(function (user) {
      return user._id === userId;
    });
    res.json(user);
  }

  function updateUser(req, res){
    var userId = req.params['userId'];
    var user = req.body;

    console.log(req.body);
    console.log("update user: " + userId + " " + user.firstName + " " + user.lastName);

    for(var i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        users[i].firstName = user.firstName;
        users[i].lastName = user.lastName;
        users[i].username = user.username;
        users[i].email = user.email;

        res.status(200).send(user);
        return;
      }
    }
    res.status(404).send("not found!");
  }

  function deleteUser(req, res) {
    var userId = req.params['userId'];

    console.log("delete user: " + userId);

    for(var i = 0; i < users.length; i++) {
      if (users[i]._id === userId) {
        users.splice(i,1);
        res.sendStatus(200);
        return;
      }
    }
    res.status(404).send("not found!");
  }

}
