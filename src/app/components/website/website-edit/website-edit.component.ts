import {Component, OnInit, ViewChild} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/website.model.client';
import {Router, ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  @ViewChild('updateweb') updateWebFrom: NgForm;
  @ViewChild('deleteweb') deleteWebFrom: NgForm;
  userId: string;
  websiteId : string;
  website: Website;
  websites: Website[] = [];

  constructor(private websiteService: WebsiteService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        this.websiteId = params['wid'];
      }
    );

    console.log('user id: ' + this.userId);
    this.websites = this.websiteService.findWebsitesByUser(this.userId);
    this.website = this.websiteService.findWebsiteById(this.websiteId);
    console.log('Got websites');
  }

  updateWebsite(){
    console.log('entering update website');
    this.website = this.websiteService.updateWebsite(this.websiteId,this.website);
    console.log('exiting update website');
  }

  deleteWebsite(){
    console.log('entering delete website');
    this.websiteService.deleteWebsite(this.websiteId);
    console.log('exiting delete website');
    this.router.navigate(['/user', this.userId, 'website']);
  }

}

