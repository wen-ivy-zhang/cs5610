import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from './user.service.client';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService) {}

  canActivate() {
    console.log("enter canActivate");
    return this.userService.loggedIn();
  }
}
