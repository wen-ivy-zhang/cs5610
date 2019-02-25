import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../../../models/user.model.client';


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

    this.user = this.userService.findUserByCredential(this.username, this.password);
    if (this.user) {
      this.router.navigate(['/user', this.user._id]);
    }
    else{
      this.errorFlag = true;
    }
  }


}
