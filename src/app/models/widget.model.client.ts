export class Widget {
  _id: string;
  name: string;
  widgetType: string;
  pageId: string;
  size: string;
  text: string;
  url: string;
  width: string;
  rows: string;
  placeholder: string;
  formatted: boolean;

  //constructor(_id, type, pageId, size= '1', text = 'text', width = '100%', url = 'url') {
  constructor(name = 'name', type, pageId, size= '1', text = 'text', width = '100%', url = 'url',
              rows = '1', placeholder = 'placeholder', formatted = false) {
    //this._id = _id;
    this.name = name;
    this.widgetType = type;
    this.pageId = pageId;
    this.size = size;
    this.text = text;
    this.width = width;
    this.url = url;
    this.rows =rows;
    this.placeholder = placeholder;
    this.formatted = formatted;
  }
}
