import {Injectable} from '@angular/core';
import {Page} from '../models/page.model.client';


@Injectable()
export class PageService {

  pages: Page[] = [
    {_id: "321", name: "Post 1", websiteId: "456", title: "Lorem" },
    {_id: "432", name: "Post 2", websiteId: "456", title: "Lorem" },
    {_id: "543", name: "Post 3", websiteId: "456", title: "Lorem" }
  ]

  api = {
    'createPage' : this.createPage,
    'findPagesByWebsiteId' : this.findPagesByWebsiteId,
    'findPageById' : this.findPageById,
    'updatePage' : this.updatePage,
    'deletePage' : this.deletePage
  };

  createPage(websiteId: string, page: Page) {
    page._id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();
    page.websiteId = websiteId;
    this.pages.push(page);
    return page;
  }

  findPagesByWebsiteId(websiteId: string) {
    const resultSet = [];
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x].websiteId === websiteId) {
        resultSet.push(this.pages[x]);
      }
    }
    return resultSet;
  }


  findPageById(pageId: string) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        return this.pages[x];
      }
    }
  }

  updatePage(pageId: string, page: Page) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        this.pages[x].name = page.name;
        this.pages[x].websiteId = page.websiteId;
        this.pages[x].title = page.title;
        return this.pages[x];
      }
    }
  }

  deletePage(pageId: string) {
    for (const i in this.pages) {
      if (this.pages[i]._id === pageId) {
        const j = +i;
        this.pages.splice(j, 1);
      }
    }
  }
}
