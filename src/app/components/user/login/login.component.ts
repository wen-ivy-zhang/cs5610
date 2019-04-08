import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../../../models/user.model.client';
import {error} from 'selenium-webdriver';
import {SharedService} from '../../../services/shared.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @ViewChild('f') myloginFrom: NgForm;
  username: string;
  password: string;
  //user: User;

  errorFlag: boolean;
  errorMsg = 'Invalid username or password!';

  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) {
  }

  ngOnInit() {

  }

  login(){
    this.username = this.myloginFrom.value.username;
    this.password = this.myloginFrom.value.password;

    console.log(this.username);
    console.log(this.password);

    //this.user = this.userService.findUserByCredential(this.username, this.password);
    //this.userService.findUserByCredential(this.username, this.password)
    this.userService.login(this.username, this.password)
      .subscribe(
        (data: any) => {
          //this.user = data;
          this.sharedService.user = data;
          if (this.sharedService.user) {
            console.log("login this.userId: ", this.sharedService.user['_id']);
            console.log("login this.username: ", this.sharedService.user['username']);
            this.errorFlag = false;
            //this.router.navigate(['/user', this.user._id]);
            this.router.navigate(['/profile']);
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
