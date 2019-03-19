import {Component, OnInit, ViewChild} from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {Page} from '../../../models/page.model.client';
import {Router, ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  @ViewChild('updatepage') updatePageFrom: NgForm;
  @ViewChild('deletepage') deletePageFrom: NgForm;
  userId: string;
  websiteId : string;
  pageId: string;
  page: Page = new Page('','','','');

  constructor(private pageService: PageService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        this.websiteId = params['wid'];
        this.pageId = params['pid'];
      }
    );

    console.log('user id: ' + this.userId);
    console.log('web id: ' + this.websiteId);
    console.log('page id: ' + this.pageId);
   this.pageService.findPageById(this.pageId).subscribe(
     (data:Page) => {
       this.page = data;
       console.log('Got Page');
     }
   );

  }

  updatePage(){
    console.log('entering update page');
    this.pageService.updatePage(this.pageId, this.page).subscribe(
      (data:Page) => {
        this.page = data;
        console.log('exiting update page');
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
      }
    );

  }

  deletePage(){
    console.log('entering delete page');
    this.pageService.deletePage(this.pageId).subscribe(
      (data:Page) => {
        this.page = data;
        console.log('exiting delete page');
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
      }
    );

  }

}


