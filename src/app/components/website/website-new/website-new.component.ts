import {Component, OnInit, ViewChild} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/website.model.client';
import {Router, ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../../../models/user.model.client';


@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  @ViewChild('newWeb') myNewWebFrom: NgForm;
  userId: string;
  website: Website;
  websites: Website[] = [];
  errorFlag: boolean;

  constructor(private websiteService: WebsiteService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
      }
    );

    console.log('new web user id: ' + this.userId);
    // this.websites = this.websiteService.findWebsitesByUser(this.userId);
    this.websiteService.findWebsitesByUser(this.userId)
      .subscribe(
        (data: any) => {
          this.websites = data;
          console.log('new web Got websites');
        }
      );
  }

  newWebsite(){
    console.log('new web check: ' + this.myNewWebFrom.value.webname);
    console.log('new web check: ' + this.myNewWebFrom.value.description);

    // this.website = this.websiteService.createWebsite(
    //   this.userId,
    //   new Website('000', this.myNewWebFrom.value.webname, this.userId, this.myNewWebFrom.value.description)
    // );
    this.websiteService.createWebsite(
      this.userId,
      new Website(this.myNewWebFrom.value.webname, this.userId, this.myNewWebFrom.value.description)
    ).subscribe(
      (data: any) => {
        this.website = data;
        console.log("checkpoint this.website Id: ", this.website._id);
        console.log("checkpoint this.website Name: ", this.website.name);
        console.log("checkpoint this.website developerId: ", this.website.developerId);
        if (this.website) {
          this.errorFlag = false;
          this.router.navigate(['/user', this.userId, 'website']);
        }
      },
      (error: any) => {
        this.errorFlag = true;
      }
    );
  }

}
