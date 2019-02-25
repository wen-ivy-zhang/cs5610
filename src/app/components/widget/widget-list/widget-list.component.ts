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
    this.widgets = this.widgetService.findWidgetsByPageId(this.pageId);
    console.log('Got widgets');
  }
}

