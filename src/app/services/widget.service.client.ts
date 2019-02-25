import {Injectable} from '@angular/core';
import {Widget} from '../models/widget.model.client';


@Injectable()
export class WidgetService {

  widgets: Widget[] = [
    {_id: "123", widgetType: "HEADING", pageId: "321", size: "2", text: "GIZMODO", url: "url", width: "100%"},
    {_id: "234", widgetType: "HEADING", pageId: "321", size: "4", text: "Lorem ipsum", url: "url", width: "100%"},
    {_id: "345", widgetType: "IMAGE", pageId: "321", size: "unknown", text: "unknown", url: "http://lorempixel.com/400/200/", width: "100%"},
    //{_id: "456", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"},
    {_id: "567", widgetType: "HEADING", pageId: "321", size: "4", text: "Lorem ipsum", url: "url", width: "100%"},
    {_id: "678", widgetType: "YOUTUBE", pageId: "321", size: "unknown", text: "unknown", url: "https://www.youtube.com/embed/WrDGpMGF1pk", width: "100%"},
    //{_id: "789", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"}
  ]

  api = {
    'createWidget' : this.createWidget,
    'findWidgetsByPageId' : this.findWidgetsByPageId,
    'findWidgetById' : this.findWidgetById,
    'updateWidget' : this.updateWidget,
    'deleteWidget' : this.deleteWidget
  };

  createWidget(pageId: string, widget: Widget) {
    widget._id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();
    widget.pageId = pageId;
    this.widgets.push(widget);
    return widget;
  }

  findWidgetsByPageId(pageId: string) {
    const resultSet = [];
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x].pageId === pageId) {
        resultSet.push(this.widgets[x]);
      }
    }
    return resultSet;
  }

  findWidgetById(widgetId: string) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        return this.widgets[x];
      }
    }
  }

  updateWidget(widgetId: string, widget: Widget) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        this.widgets[x].pageId = widget.pageId;
        switch (widget.widgetType) {
          case 'HEADING':
            this.widgets[x].text = widget.text;
            this.widgets[x].size = widget.size;
            return this.widgets[x];
          case 'IMAGE':
            this.widgets[x].width = widget.width;
            this.widgets[x].url = widget.url;
            return this.widgets[x];
          case'HTML':
            this.widgets[x].text = widget.text;
            return this.widgets[x];
          case'YOUTUBE':
            this.widgets[x].width = widget.width;
            this.widgets[x].url = widget.url;
            return this.widgets[x];

        }
      }
    }
    return widget;
  }

  deleteWidget(widgetId: string) {
    for (const i in this.widgets) {
      if (this.widgets[i]._id === widgetId) {
        const j = +i;
        this.widgets.splice(j, 1);
      }
    }
  }
}
