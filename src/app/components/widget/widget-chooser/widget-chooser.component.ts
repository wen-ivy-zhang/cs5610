import {Component, OnInit, ViewChild} from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {Widget} from '../../../models/widget.model.client';
import {Router, ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})

export class WidgetChooserComponent implements OnInit {
  //@ViewChild('newpage') myNewPageFrom: NgForm;
  @ViewChild('h') headingFrom: NgForm;
  //@ViewChild('deletepage') deletePageFrom: NgForm;
  userId: string;
  websiteId: string;
  pageId: string;
  widget: Widget;

  // errorFlag: boolean;
  // errorMsg = 'Registration failed!';

  constructor(private widgetService: WidgetService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        this.websiteId = params['wid'];
        this.pageId = params['pid']
      }
    );

    console.log('new widget user id: ' + this.userId);
    console.log('new widget web id: ' + this.websiteId);
    console.log('new widget page id: ' + this.pageId);

    //this.widget = this.widgetService.createWidget(this.pageId, new Widget('000', 'unknown', this.pageId))
  }

  createWidget(widgetType: string){
    console.log('entering  createWidget');
    // const newWidget : Widget = {
    //   widgetType: widgetType, pageId:'100', size:'1',text:'text',url:'url',width:'100%'
    // }
    let newWidget = new Widget('name', widgetType, '100', '1', 'text', '100%', 'url',
      '1', 'placeholder', false);
    this.widgetService.createWidget(this.pageId, newWidget).subscribe(
      (data: any) => {
        this.widget = data;
        console.log('new widget id ' + this.widget._id);
        console.log('new widget page id: ' + this.widget.pageId);
        console.log('new widget type: ' + this.widget.widgetType);

        const url: any = '/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget/' + this.widget._id;
        console.log('url:' + url);
        this.router.navigate([url]);
      }
    );
  }

}
