import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';


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

  constructor(private userService: UserService, private router: Router) {
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
      this.userService.createUser(this.username, this.password)
        .subscribe(
        (data: any) => {
          this.user = data;
          console.log("checkpoint this.userId: ", this.user._id);
          console.log("checkpoint this.username: ", this.user.username);
          if (this.user) {
            this.errorFlag = false;
            this.router.navigate(['/user', this.user._id]);
          }
        },
        (error: any) => {
          this.errorFlag = true;
        }
      );
    }
  }

}
