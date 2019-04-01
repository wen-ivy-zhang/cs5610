import {Component, OnInit, ViewChild} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {
  @ViewChild('updatetext') updateTextFrom: NgForm;
  @ViewChild('deletetext') deleteTextFrom: NgForm;
  userId: string;
  websiteId : string;
  pageId: string;
  widgetId: string;
  widget: Widget = new Widget('', '', '', '', '', '', '', '', '', false);

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

    console.log('text user id: ' + this.userId);
    console.log('text web id: ' + this.websiteId);
    console.log('text page id: ' + this.pageId);
    console.log('text widget id: ' + this.widgetId);
    this.widgetService.findWidgetById(this.widgetId).subscribe(
      (data: any) => {
        this.widget = data;
        console.log('Got widget, type' + this.widget.widgetType);
      },
      (error: any) => {
        console.log('Can not find widget.');
      }
    );

  }

  updateText(){
    console.log('entering update text');
    this.widgetService.updateWidget(this.widgetId, this.widget).subscribe(
      (data: any) => {
        this.widget = data;
        console.log('exiting update text');
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
      },
      (error: any) => {
        console.log('Update Text failed');
      }
    );
  }

  deleteText(){
    console.log('entering delete text');
    this.widgetService.deleteWidget(this.widgetId).subscribe(
      (data: any) => {
        this.widget = data;
        console.log('exiting delete text');
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
      },
      (error: any) => {
        console.log('Delete Text failed');
      }
    );
  }

}
