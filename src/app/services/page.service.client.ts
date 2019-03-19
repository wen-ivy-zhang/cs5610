import {Injectable} from '@angular/core';
import {Page} from '../models/page.model.client';
import {Http, RequestOptions, Response} from '@angular/http';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class PageService {
  constructor(private http: HttpClient) {}

  baseUrl = environment.baseUrl;

  api = {
    'createPage' : this.createPage,
    'findPagesByWebsiteId' : this.findPagesByWebsiteId,
    'findPageById' : this.findPageById,
    'updatePage' : this.updatePage,
    'deletePage' : this.deletePage
  };

  createPage(websiteId: string, page: Page) {
    return this.http.post(this.baseUrl + '/api/website/' + websiteId + '/page', page);
  }

  findPagesByWebsiteId(websiteId: string) {
    return this.http.get(this.baseUrl + '/api/website/' + websiteId + '/page');
  }


  findPageById(pageId: string) {
    return this.http.get(this.baseUrl + '/api/page/' + pageId);
  }

  updatePage(pageId: string, page: Page) {
    return this.http.put(this.baseUrl + '/api/page/' + pageId, page);
  }

  deletePage(pageId: string) {
    return this.http.delete(this.baseUrl + '/api/page/' + pageId);
  }
}
