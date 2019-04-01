import {Injectable} from '@angular/core';
import {User} from '../models/user.model.client';
import {Http, RequestOptions, Response} from '@angular/http';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';


// injecting service into module

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  baseUrl = environment.baseUrl;

  api = {
    'createUser' : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUsername' : this.findUserByUsername,
    'findUserByCredential' : this.findUserByCredential,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser
  };

  //createUser(user: User) {
  createUser(username: string, password: string) {
    const user = {
      username : username,
      password : password
    };
    return this.http.post(this.baseUrl + '/api/user/', user);
  }

  findUserById(userId: string) {
    return this.http.get(this.baseUrl + '/api/user/' + userId);
  }

  findUserByUsername(username: string) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username);
  }

  findUserByCredential(username: string, password: string) {
    const url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
    return this.http.get(url);
  }


  updateUser(userId: string, user: User) {
    return this.http.put(this.baseUrl + '/api/user/' + userId, user);
  }

  deleteUser(userId: string) {
    return this.http.delete(this.baseUrl + '/api/user/' + userId);
  }

}
