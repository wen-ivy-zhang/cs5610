import {Component, OnInit, ViewChild} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget} from '../../../../models/widget.model.client';
import {Router, ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  @ViewChild('updateyoutube') updateYoutubeFrom: NgForm;
  @ViewChild('deleteyoutube') deleteYoutubeFrom: NgForm;
  userId: string;
  websiteId : string;
  pageId: string;
  widgetId: string;
  widget: Widget;

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

    console.log('youtube user id: ' + this.userId);
    console.log('youtube web id: ' + this.websiteId);
    console.log('youtube page id: ' + this.pageId);
    console.log('youtube widget id: ' + this.widgetId);
    this.widget = this.widgetService.findWidgetById(this.widgetId);
    console.log('Got widget');
  }

  updateYoutube(){
    console.log('entering update youtube');
    this.widget = this.widgetService.updateWidget(this.widgetId, this.widget);
    console.log('exiting update youtube');
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }

  deleteYoutube(){
    console.log('entering delete youtube');
    this.widgetService.deleteWidget(this.widgetId);
    console.log('exiting delete youtube');
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }

}



