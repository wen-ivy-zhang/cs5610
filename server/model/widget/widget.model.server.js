var mongoose = require("mongoose");

var widgetSchema = require("./widget.schema.server");
var pageModel = require("../page/page.model.server");
var widgetModel = mongoose.model('widgetModel', widgetSchema);

widgetModel.createWidget = createWidget;
widgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
widgetModel.findWidgetById = findWidgetById;
widgetModel.updateWidget = updateWidget;
widgetModel.deleteWidget = deleteWidget;
widgetModel.reorderWidget = reorderWidget;

module.exports = widgetModel;

function createWidget(pageId, widget) {
  return widgetModel.create(widget)
    .then(
      function(responseWidget) {
        pageModel.findPageById(pageId)
          .then(
            function (page) {
              //widget.position = page.widgets.length;
              page.widgets.push(responseWidget);
              //widget.save();
              //return page.save();
              return pageModel.updatePage(pageId, page);
            });
        return responseWidget;
    });
}

function findAllWidgetsForPage(pageId) {
  return widgetModel.find({pageId: pageId});
}

function findWidgetById(widgetId) {
  return widgetModel.findById(widgetId);
}

function updateWidget(widgetId, widget){
  var options = { new: true };

  if (widget.widgetType === 'IMAGE' && widget.url === 'url') { //don't update image if it has invalid url
    return widgetModel.findById(widgetId);
  }
  else {
    return widgetModel.findByIdAndUpdate(widgetId, widget, options);
  }

}

function deleteWidget(widgetId) {
  // widget = WidgetModel.findWidgetById(widgetId).then(function(widget) {
  //   PageModel.findPageById(widget.pageId).then(function(page){
  //     page.widgets.pull({_id: widgetId});
  //     page.save();
  //   })
  // });
  // return WidgetModel.remove({_id: widgetId});

  return widgetModel.findByIdAndRemove(widgetId)
    .then(
      function (widget) {
        pageModel.findPageById(widget.pageId)
          .then(
            function (page) {
              //console.log(website);
              for (var x = 0; x < page.widgets.length; x++) {
                if (page.widgets[x] == widgetId) {
                  //remove the widget reference from the page widgets array as well
                  page.widgets.splice(x, 1);
                  return pageModel.updatePage(page._id, page);
                }
              }
            }
          );
        return widget;
      }
    );
}


function array_swap(arr, old_index, new_index) {
  console.log("temp array size: " + arr.length);
  while (old_index < 0) {
    old_index += arr.length;
  }
  while (new_index < 0) {
    new_index += arr.length;
  }

  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
};

function reorderWidget(pageId, startIndex, endIndex) {
  // return pageModel.findPageById(pageId).then(
  //   function(page) {
  //     page.widgets.splice(end, 0, page.widgets.splice(start, 1)[0]);
  //     return page.save();
  //   }
  // )

  return widgetModel.find({pageId: pageId})
    .then(
      function (resultSet) { //store the widgets that needs to be reordered that belongs to this page into resultSet
        console.log("shuffle");

        // remove the widgets of this page from the widgets database, reordered set will be added back later
        return widgetModel.remove({pageId: pageId})
          .then(
            function () {
              array_swap(resultSet, startIndex, endIndex); //reorder the widget set that belongs to current page

              //add the reordered set back into widgets database
              return widgetModel.insertMany(resultSet)
                .then(
                  function() {
                    console.log("exiting 1");
                    return resultSet;
                  }
                );
            }
          );

        console.log("exiting 2");
        //return resultSet;
      }
    );
}

