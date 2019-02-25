import { Injectable } from '@angular/core';
import {User} from '../models/user.model.client';

// injecting service into module

@Injectable()
export class UserService {

  constructor() { }
  users: User[] = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "Alice.Wonder@gmail.com"},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "Bob.Marley@gmail.com"},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "Charly.Garcia@gmail.com"},
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi", email: "Jose.Annunzi@gmail.com"}
  ];

  api = {
    'createUser' : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUsername' : this.findUserByUsername,
    'findUserByCredential' : this.findUserByCredential,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser
  };

  createUser(user: User) {
    //this.user.username = username;
    //this.user.password = password;
    user._id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();
    //this.user = new User(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(), username, password);
    this.users.push(user);
    return user;
    //this.users.push(new User(user._id, user.username, user.password));
  }

  findUserById(userId: string) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i]._id === userId) {
        //return true;
        return this.users[i];
      }
    }
  }

  findUserByUsername(username: string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username) {
        return this.users[x];
      }
    }
  }

  findUserByCredential(username: string, password: string) {
    // for (let x = 0; x < this.users.length; x++) {
    //   if (this.users[x].username === username && this.users[x].password === password) {
    //     return true;
    //   }
    // }
    return this.users.find(function (user){
      return user.username === username && user.password === password;
    });
  }

  updateUser(userId: string, user: User) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        this.users[x].username = user.username;
        this.users[x].password = user.password;
        this.users[x].firstName = user.firstName;
        this.users[x].lastName = user.lastName;
        return this.users[x];
      }
    }
  }

  deleteUser(userId: string) {
    for (const i in this.users) {
      if (this.users[i]._id === userId) {
        const j = +i;
        this.users.splice(j, 1);
      }
    }
  }

}
