import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';;
import {NgForm} from '@angular/forms';
import {User} from '../../../models/user.model.client';
import {SharedService} from '../../../services/shared.service';
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
  user: User = new User('000', '', '', '', '', '', '');
  //user: any
  username: string;
  errorFlag : boolean;

  constructor(private userService: UserService, private router: ActivatedRoute, private route: Router, private sharedService: SharedService) { }

  UpdateUser() {
    console.log("updating user");
    console.log(this.user.username);
    console.log(this.user.firstName);
    console.log(this.user.lastName);
    //this.userService.updateUser(this.userId, this.user);

    this.userService.updateUser(this.userId, this.user)
      .subscribe(
        (data: any) => {
          this.user = data;
          console.log("after update: " + this.user.username);
          console.log("after update: " + this.user.firstName);
          console.log("after update: " + this.user.lastName);
        },
        (error: any) => {
          this.errorFlag = true;
        }
      );
  }

  DeleteUser() {
    console.log("deleting user");
    console.log(this.user.username);
    console.log(this.user.firstName);
    console.log(this.user.lastName);

    return this.userService.deleteUser(this.userId)
      .subscribe(
      (data: any) => {
        this.route.navigate(['/login'])
      }
    );
  }

  logout() {
    return this.userService.logout()
      .subscribe(
        (data: any) => {
          console.log('this is logout');
          this.route.navigate(['/login']);
      }
    );
  }

  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    console.log('user id: ' + this.userId);
    // this.router.params.subscribe((params: any) => {
    //   this.userId = params['uid'];
    //   console.log('user id: ' + this.userId);
    // });

    //this.user = this.userService.findUserById(this.userId)
    this.userService.findUserById(this.userId)
      .subscribe(
        (data: any) => {
          this.user = data;
          console.log('profile check: username:' + this.user.username);
          this.username = this.user['username'];
        },
        (error: any) => {
          this.errorFlag = true;
        }
      );
  }
}
