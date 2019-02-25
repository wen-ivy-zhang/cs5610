import {Component, OnInit, ViewChild} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/website.model.client';
import {Router, ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';


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

  constructor(private websiteService: WebsiteService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
      }
    );

    console.log('new web user id: ' + this.userId);
    this.websites = this.websiteService.findWebsitesByUser(this.userId);
    console.log('new web Got websites');
  }

  newWebsite(){
    console.log('new web check: ' + this.myNewWebFrom.value.webname);
    console.log('new web check: ' + this.myNewWebFrom.value.description);

    this.website = this.websiteService.createWebsite(
      this.userId,
      new Website('000', this.myNewWebFrom.value.webname, this.userId, this.myNewWebFrom.value.description)
    );
    console.log("checkpoint website ID: ", this.website._id);
    console.log("checkpoint website Name", this.website.name);
    if (this.website) {
      this.router.navigate(['/user', this.userId, 'website']);
    }
    //else{
    //  this.errorFlag = true;
    //}
  }
}
