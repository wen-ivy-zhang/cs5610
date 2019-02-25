import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user.service.client';;
import {NgForm} from '@angular/forms';
import {User} from '../../../models/user.model.client';
//import {core} from '@angular/compiler'; @angular/core

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('f') myloginForm:NgForm;
  //properties
  userId: string;
  user: User;
  username: string;

  constructor(private userService: UserService, private router: ActivatedRoute) { }

  UpdateUser() {
    console.log(this.user.username);
    console.log(this.user.firstName);
    console.log(this.user.lastName);
    this.userService.updateUser(this.userId, this.user);
  }

  ngOnInit() {
    this.router.params.subscribe((params: any) => {
      this.userId = params['uid'];
      console.log('user id: ' + this.userId);
    });

    this.user = this.userService.findUserById(this.userId);
    console.log('profile check: username:' + this.user.username);
    this.username = this.user['username'];
  }
}