
module.exports= function(app, models){

  // widgets = [
  //   { _id: "123", widgetType: "HEADER", name: ' ', pageId: "321", size: "2", text: "GIZMODO", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
  //   { _id: "234", widgetType: "HEADER", name: ' ', pageId: "321", size: "4", text: "Lorem ipsum", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
  //   { _id: "345", widgetType: "IMAGE", pageId: "321", size: "", text: "", width: "100%", url: "http://lorempixel.com/400/200/" },
  //   { _id: "456", widgetType: "HTML", name: 'html name', pageId: "321", size: "", text: "<p>Lorem ipsum</p>", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
  //   { _id: "567", widgetType: "HEADER", name: ' ', pageId: "321", size: "4", text: "Lorem ipsum", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
  //   { _id: "678", widgetType: "YOUTUBE", name: ' ', pageId: "321", size: "", text: "", url: 'https://www.youtube.com/embed/mFkli0wD4-w', width: "100%", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
  //   { _id: "789", widgetType: "HTML", name: 'html name', pageId: "321", size: "<p>Lorem ipsum</p>", text: "", url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: '' }
  // ];


  var widgets = [
    {_id: "123", widgetType: "HEADING", pageId: "321", size: "2", text: "GIZMODO", url: "url", width: "100%"},
    {_id: "234", widgetType: "HEADING", pageId: "321", size: "4", text: "Lorem ipsum", url: "url", width: "100%"},
    {_id: "345", widgetType: "IMAGE", pageId: "321", size: "unknown", text: "unknown", url: "http://lorempixel.com/400/200/", width: "100%"},
    //{_id: "456", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"},
    {_id: "567", widgetType: "HEADING", pageId: "321", size: "4", text: "Lorem ipsum", url: "url", width: "100%"},
    {_id: "678", widgetType: "YOUTUBE", pageId: "321", size: "unknown", text: "unknown", url: "https://www.youtube.com/embed/WrDGpMGF1pk", width: "100%"},
    //{_id: "789", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"}
  ]


  var multer = require('multer'); // npm install multer --save
  var upload = multer({ dest: __dirname + '/../../dist/my-project/assets/uploads' });


  //POST
  app.post("/api/page/:pageId/widget", createWidget);

  // GET
  app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
  app.get("/api/widget/:widgetId", findWidgetById);

  //PUT
  app.put("/api/widget/:widgetId", updateWidget);
  app.put("/api/page/:pageId/widget", reorderWidgets);

  //DELETE
  app.delete("/api/widget/:widgetId", deleteWidget);

  //UPLOAD
  app.post ("/api/upload", upload.single('myFile'), uploadImage);


  function createWidget (req, res) {
    var pageId = req.params.pageId;
    var widget = req.body;
    widget._id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();
    widget.pageId = pageId;
    widgets.push(widget);
    res.json(widget);
  }

  function findAllWidgetsForPage (req, res) {
    var pageId = req.params.pageId;
    const resultSet = [];
    for (let x = 0; x < widgets.length; x++) {
      if (widgets[x].pageId === pageId) {
        resultSet.push(widgets[x]);
      }
    }
    return res.json(resultSet);

  }

  function findWidgetById (req, res) {
    var widgetId  = req.params.widgetId;
    for (let x = 0; x < widgets.length; x++) {
      if (widgets[x]._id === widgetId) {
        return res.json(widgets[x]);
      }
    }
    res.status(404).send("Cannot find Widget");
  }

  function updateWidget (req, res) {
    var widgetId  = req.params.widgetId;
    var widget = req.body;
    for (let x = 0; x < widgets.length; x++) {
      if (widgets[x]._id === widgetId) {
        widgets[x].pageId = widget.pageId;
        switch (widget.widgetType) {
          case 'HEADING':
            widgets[x].text = widget.text;
            widgets[x].size = widget.size;
            return res.json(widgets[x]);
          case 'IMAGE':
            if (widget.url !== 'url') { //don't update the image if it has invalid url
              widgets[x].width = widget.width;
              widgets[x].url = widget.url;
            }
            return res.json(widgets[x]);
          case'HTML':
            widgets[x].text = widget.text;
            return res.json(widgets[x]);
          case'YOUTUBE':
            widgets[x].width = widget.width;
            widgets[x].url = widget.url;
            return res.json(widgets[x]);
        }
      }
    }
    res.status(404).send("Cannot find Widget");
  }

  function deleteWidget (req, res) {
    var widgetId  = req.params.widgetId;
    for (const i in widgets) {
      if (widgets[i]._id === widgetId) {
        const j = +i;
        res.json(widgets[i]);
        widgets.splice(j, 1);
        return;
      }
    }
    res.status(404).send("Cannot find Widget");
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

  function reorderWidgets(req, res) {
    console.log("Server entering reorderWidgets");

    var startIndex = parseInt(req.query["start"]);
    var endIndex = parseInt(req.query["end"]);

    var pageId = req.params.pageId;
    const resultSet = []; //store the widgets that needs to be reordered that belongs to this page
    const indexSet = []; //store the index that needs to be removed from widgets
    for (let i = 0; i < widgets.length; i++) {
      if (widgets[i].pageId === pageId) {
        resultSet.push(widgets[i]);
        indexSet.push(i);
      }
    }

    // remove the widgets of this page from the widgets database, reordered set will be added back later
    for (var i = indexSet.length - 1; i >= 0; i--) {
      widgets.splice(indexSet[i], 1);
    }

    //array_swap(widgets, startIndex, endIndex);
    array_swap(resultSet, startIndex, endIndex); //reorder the widget set that belongs to current page

    widgets.push.apply(widgets, resultSet); //add the reordered set back into widgets database

    return res.json(resultSet);
  }

  function uploadImage(req, res) {
    console.log("Entering uploadImage");
    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;
    var widgetId = req.body.widgetId;
    var width = req.body.width;
    var myFile = req.file;

    if(myFile == null) {
      //res.redirect("https://yourheroku.herokuapp.com/user/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId);
      //res.redirect("http://localhost:3200/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId);
      return;
    }

    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;
    var url           = '/assets/uploads/' + filename;

    console.log("widgetId: " + widgetId);
    console.log("url: " + url);
    for (var i = 0; i < widgets.length; i++) {
      if (widgets[i]._id === widgetId) {
        widgets[i].url = url;
        widgets[i].size = size;
        widgets[i].width = width;
        //res.json(widgets[i]);
        //res.send('File Uploaded Successfully.');
        //return;
      }
    }

    console.log("Server exiting uploadImage");
    //res.redirect("https://yourheroku.herokuapp.com/user/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId);
    //res.redirect("/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId);
  }

};
