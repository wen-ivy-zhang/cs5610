import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') myRegisterFrom: NgForm;
  user: User;
  username: string;
  password: string;
  vpassword: string;

  errorFlag: boolean;
  errorMsg = 'Registration failed!';
  pwErrorFlag: boolean;
  pwErrorMsg = 'Password should be same';

  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) {
  }

  ngOnInit() {
  }

  register() {
    console.log(this.myRegisterFrom.value.username);
    console.log(this.myRegisterFrom.value.password);
    console.log(this.myRegisterFrom.value.vpassword);
    this.username = this.myRegisterFrom.value.username;
    this.password = this.myRegisterFrom.value.password;
    this.vpassword = this.myRegisterFrom.value.vpassword;


    // this.userService.createUser(
    //   new User('000',
    //     this.myRegisterFrom.value.username,
    //     this.myRegisterFrom.value.password,
    //     'empty',
    //     'empty',
    //     'empty'))

    // call user service only if passwords match else show the same error
    if (this.password === this.vpassword) {

      // this.userService.createUser(this.username, this.password) // without credential
      this.userService.register(this.username, this.password)
        .subscribe(
        (data: any) => {
          //this.user = data;
          this.sharedService.user = data;
          // console.log("checkpoint this.userId: ", this.user._id);
          // console.log("checkpoint this.username: ", this.user.username);
          console.log("register this.userId: ", this.sharedService.user['_id']);
          console.log("register this.username: ", this.sharedService.user['username']);
          if (this.sharedService.user) {
            this.errorFlag = false;
            //this.router.navigate(['/user', this.user._id]);
            this.router.navigate(['/profile']);
          }
        },
        (error: any) => {
          this.errorFlag = true;
        }
      );
    }
    else {
      this.pwErrorFlag = true;
      return;
    }
  }

}
