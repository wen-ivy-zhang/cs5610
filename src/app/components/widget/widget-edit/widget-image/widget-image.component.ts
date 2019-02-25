import {Component, OnInit, ViewChild} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget} from '../../../../models/widget.model.client';
import {Router, ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
  @ViewChild('updateimage') updateImageFrom: NgForm;
  @ViewChild('uploadimage') uploadImageFrom: NgForm;
  @ViewChild('deleteimage') deleteImageFrom: NgForm;
  userId: string;
  websiteId : string;
  pageId: string;
  widgetId: string;
  widget: Widget;
  uploadUrl: string = "No File Chosen";

  constructor(private widgetService: WidgetService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        this.websiteId = params['wid'];
        this.pageId = params['pid'];
        this.widgetId = params['wgid'];
      }
    );

    console.log('image user id: ' + this.userId);
    console.log('image web id: ' + this.websiteId);
    console.log('image page id: ' + this.pageId);
    console.log('image widget id: ' + this.widgetId);
    this.widget = this.widgetService.findWidgetById(this.widgetId);
    console.log('Got widget');
  }

  updateImage(){
    console.log('entering update image');
    this.widget = this.widgetService.updateWidget(this.widgetId, this.widget);
    console.log('exiting update image');
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }

  deleteImage(){
    console.log('entering delete image');
    this.widgetService.deleteWidget(this.widgetId);
    console.log('exiting delete image');
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }

  uploadImage(){
    console.log('entering upload image');
    this.widget.url = this.uploadUrl;
    this.widget = this.widgetService.updateWidget(this.widgetId, this.widget);
    console.log('exiting upload image');
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', this.widgetId]);
  }

}



