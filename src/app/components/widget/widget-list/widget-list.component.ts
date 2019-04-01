import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {Widget} from '../../../models/widget.model.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  userId: string;
  websiteId: string;
  pageId: string;
  widgets: Widget[] = [];

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, public sanitizer: DomSanitizer) { }

  // receiving the emitted event
  reorderWidgets(indexes) {
    console.log('enter reorderWidgets, widget list');
    // call widget service function to update widget as per index
    this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageId)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.widgets = data;
        }
      );
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        this.websiteId = params['wid'];
        this.pageId = params['pid'];
      }
    );

    console.log('user id: ' + this.userId);
    console.log('website id: ' + this.websiteId);
    console.log('page id: ' + this.pageId);
    //this.widgets = this.widgetService.findWidgetsByPageId(this.pageId);
    this.widgetService.findWidgetsByPageId(this.pageId).subscribe(
      (data: any) => {
        this.widgets = data;
        console.log('Got widgets:');
        console.log(data);
      }
    );
  }

}
