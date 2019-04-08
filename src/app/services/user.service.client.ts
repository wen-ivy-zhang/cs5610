import {Injectable} from '@angular/core';
import {User} from '../models/user.model.client';
import {Http, RequestOptions, Response} from '@angular/http';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {SharedService} from './shared.service';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';


// injecting service into module

@Injectable()
export class UserService {
  constructor(private _http: Http, private http: HttpClient, private sharedService: SharedService, private router: Router) {}

  baseUrl = environment.baseUrl;
  options = new RequestOptions();

  api = {
    'createUser' : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUsername' : this.findUserByUsername,
    'findUserByCredential' : this.findUserByCredential,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser,
    'login' : this.login,
    'logout' : this.logout,
    'register' : this.register,
    'loggedIn' : this.loggedIn
  };

  login(username: String, password: String) {
    //this.options.withCredentials = true; // jga
    const body = {
      username : username,
      password : password
    };
    return this.http.post(this.baseUrl + '/api/login', body, {withCredentials: true});
      // .map(
      //   (res: Response) => {
      //     const data = res.json();
      //     return data;
      //   }
      // );
  }

  logout() {
    //this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/logout', '', {withCredentials: true});
      // .map((response: Response) => {
      //   return response.json();
      // });
  }

  register(username: String, password: String) {
    //this.options.withCredentials = true;
    const user = {
      username : username,
      password : password
    };

    return this.http.post(this.baseUrl + '/api/register', user, {withCredentials: true});
      // .map(
      //   (res: Response) => {
      //     const data = res.json();
      //     return data;
      //   }
      // );
  }

  loggedIn() {
    console.log("enter loggedIn");
    this.options.withCredentials = true;
    return this._http.post(this.baseUrl + '/api/loggedIn', '', this.options)
      .pipe(map(
        (res: Response) => {
          const user = res.json();
          if (user !== 0) {
            console.log("user: " + user);
            this.sharedService.user = user; // setting user so as to share with all components
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      ));
  }

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
