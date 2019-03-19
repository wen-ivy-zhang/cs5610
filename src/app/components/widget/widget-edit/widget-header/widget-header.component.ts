import {Component, OnInit, ViewChild} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget} from '../../../../models/widget.model.client';
import {Router, ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  @ViewChild('updateheading') updateHeadFrom: NgForm;
  @ViewChild('deleteheading') deleteHeadFrom: NgForm;
  userId: string;
  websiteId : string;
  pageId: string;
  widgetId: string;
  widget: Widget = new Widget('000', '', '', '', '', '', '');

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

    console.log('header user id: ' + this.userId);
    console.log('header web id: ' + this.websiteId);
    console.log('header page id: ' + this.pageId);
    console.log('header widget id: ' + this.widgetId);
    this.widgetService.findWidgetById(this.widgetId).subscribe(
      (data: Widget) => {
        this.widget = data;
        console.log('Got widget, type' + this.widget.widgetType);
      },
      (error: any) => {
        console.log('Can not find widget.');
      }
    );

  }

  updateHeading(){
    console.log('entering update heading');
    this.widgetService.updateWidget(this.widgetId, this.widget).subscribe(
      (data: Widget) => {
        this.widget = data;
        console.log('exiting update heading');
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
      },
      (error: any) => {
        console.log('Update Heading failed');
      }
    );
  }

  deleteHeading(){
    console.log('entering delete heading');
    this.widgetService.deleteWidget(this.widgetId).subscribe(
      (data: Widget) => {
        this.widget = data;
        console.log('exiting delete heading');
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
      },
      (error: any) => {
        console.log('Delete Heading failed');
      }
    );
  }

}



