import {Injectable} from '@angular/core';
import {Website} from '../models/website.model.client';

@Injectable()
export class WebsiteService {

  websites: Website[] = [
    {_id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
    {_id: "234", name: "Tweeter", developerId: "456", description: "Lorem" },
    {_id: "456", name: "Gizmodo", developerId: "456", description: "Lorem" },
    {_id: "890", name: "Go", developerId: "123", description: "Lorem" },
    {_id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
    {_id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
    {_id: "789", name: "Chess", developerId: "234", description: "Lorem" }
  ]

  api = {
    'createWebsite' : this.createWebsite,
    'findWebsitesByUser' : this.findWebsitesByUser,
    'findWebsiteById' : this.findWebsiteById,
    'updateWebsite' : this.updateWebsite,
    'deleteWebsite' : this.deleteWebsite
  };

  createWebsite(userId: string, website: Website) {
    //this.website = new Website(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(), name, userId, description);
    website._id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();
    this.websites.push(website);
    return website;
  }

  findWebsitesByUser(userId: string) {
    const resultSet = [];
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x].developerId === userId) {
        resultSet.push(this.websites[x]);
      }
    }
    return resultSet;
  }

  findWebsiteById(websiteId: string) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        return this.websites[x];
      }
    }
  }

  updateWebsite(websiteId: string, website: Website) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        this.websites[x].name = website.name;
        this.websites[x].developerId = website.developerId;
        this.websites[x].description = website.description;
        return this.websites[x];
      }
    }

  }

  deleteWebsite(websiteId: string) {
    for (const i in this.websites) {
      if (this.websites[i]._id === websiteId) {
        const j = +i;
        this.websites.splice(j, 1);
      }
    }
  }
}
