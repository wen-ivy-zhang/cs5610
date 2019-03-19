import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../../../models/user.model.client';
import {error} from 'selenium-webdriver';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @ViewChild('f') myloginFrom: NgForm;
  username: string;
  password: string;
  user: User;

  errorFlag: boolean;
  errorMsg = 'Invalid username or password!';

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {

  }

  login(){
    this.username = this.myloginFrom.value.username;
    this.password = this.myloginFrom.value.password;

    console.log(this.username);
    console.log(this.password);

    //this.user = this.userService.findUserByCredential(this.username, this.password);
    this.userService.findUserByCredential(this.username, this.password)
      .subscribe(
        (data: User) => {
          this.user = data;
          if (this.user) {
            console.log("login this.userId: ", this.user._id);
            console.log("login this.username: ", this.user.username);
            this.errorFlag = false;
            this.router.navigate(['/user', this.user._id]);
          }
          else {
            this.errorFlag = true;
          }
        },
        (error: any) => {
          console.log("login error: " + error)
          this.errorFlag = true;
        });
  }

}
