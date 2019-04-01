var mongoose = require('mongoose');

var pageSchema = require('./page.schema.server');
var pageModel = mongoose.model("pageModel",pageSchema);
var websiteModel = require('../website/website.model.server');

pageModel.createPage = createPage;
pageModel.findAllPagesForWebsite = findAllPagesForWebsite;
pageModel.findPageById = findPageById;
pageModel.updatePage = updatePage;
pageModel.deletePage = deletePage;

module.exports = pageModel;

function createPage(webId, page) {
  return pageModel.create(page)
    .then(
      function (createdPage) {
        websiteModel.findWebsiteById(webId)
          .then(
            function (website) {
              website.pages.push(createdPage);
              return websiteModel.updateWebsite(webId, website);
            }
          );
        return createdPage;
      }
    );
}

function findAllPagesForWebsite(websiteId) {
  return pageModel.find({websiteId: websiteId});
}

function findPageById(pageId){
  return pageModel.findById(pageId);
}

function updatePage(pageId, page) {
  var options = { new: true };
  return pageModel.findByIdAndUpdate(pageId, page, options);
}

function deletePage(pageId) {
  return pageModel.findByIdAndRemove(pageId)
    .then(
      function (page) {
        websiteModel.findWebsiteById(page.websiteId)
          .then(
            function (website) {
              //console.log(website);
              for (var x = 0; x < website.pages.length; x++) {
                if (website.pages[x] == pageId) {
                  //remove the page reference from the website pages array as well
                  website.pages.splice(x, 1);
                  return websiteModel.updateWebsite(website._id, website);
                }
              }
            }
          );
        return page;
      }
    );
}
