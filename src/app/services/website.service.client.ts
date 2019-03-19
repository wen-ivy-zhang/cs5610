import {Injectable} from '@angular/core';
import {Website} from '../models/website.model.client';
import {Http, RequestOptions, Response} from '@angular/http';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class WebsiteService {
  constructor(private http: HttpClient) {}

  baseUrl = environment.baseUrl;

  api = {
    'createWebsite' : this.createWebsite,
    'findWebsitesByUser' : this.findWebsitesByUser,
    'findWebsiteById' : this.findWebsiteById,
    'updateWebsite' : this.updateWebsite,
    'deleteWebsite' : this.deleteWebsite
  };

  createWebsite(userId: string, website: Website) {
    return this.http.post(this.baseUrl + '/api/user/' + userId + '/website', website);
  }

  findWebsitesByUser(userId: string) {
    return this.http.get(this.baseUrl+ '/api/user/' + userId + '/website');
  }

  findWebsiteById(websiteId: string) {
    return this.http.get(this.baseUrl+ '/api/website/' + websiteId);
  }

  updateWebsite(websiteId: string, website: Website) {
    return this.http.put(this.baseUrl + '/api/website/' + websiteId, website);

  }

  deleteWebsite(websiteId: string) {
    return this.http.delete(this.baseUrl + '/api/website/' + websiteId);
  }
}
