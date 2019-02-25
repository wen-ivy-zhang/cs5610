import {Component, OnInit, ViewChild} from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {Page} from '../../../models/page.model.client';
import {Router, ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  @ViewChild('newpage') myNewPageFrom: NgForm;
  userId: string;
  websiteId: string;
  page: Page;

  // errorFlag: boolean;
  // errorMsg = 'Registration failed!';

  constructor(private pageService: PageService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        this.websiteId = params['wid'];
      }
    );

    console.log('new page user id: ' + this.userId);
    console.log('new page web id: ' + this.websiteId);
  }

  newPage(){
    console.log(this.myNewPageFrom.value.pagename);
    console.log(this.myNewPageFrom.value.pagetitle);

    this.page = this.pageService.createPage(
      this.websiteId,
      new Page('000', this.myNewPageFrom.value.pagename, this.websiteId, this.myNewPageFrom.value.pagetitle)
    );
    console.log("check page id: ", this.page._id);
    console.log("check page name: ", this.page.name);
    if (this.page) {
      this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
    }
    // else{
    //   this.errorFlag = true;
    // }
  }
}
