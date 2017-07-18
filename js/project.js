'use strict';

// Project Data Constructor Function
function Project(rawDataObj) {
  this.imageSRC = rawDataObj.imageSRC;
  this.imageAlt = rawDataObj.imageAlt;
  this.finishedOn = rawDataObj.finishedOn;
  this.projectName = rawDataObj.projectName;
  this.projectSummary = rawDataObj.projectSummary;
  this.category = rawDataObj.category;
}

Project.all = [];

// Project Data Render Function
Project.prototype.toHtml = function() {
  let comp = Handlebars.compile($('#project-template').text());

  return comp(this);
};

// Use rawData to instantiate all articles function
Project.loadAll = function(rawData) {
  rawData.sort(function(a,b) {
    return (new Date(b.finishedOn)) - (new Date(a.finishedOn));
  });

  rawData.forEach(function(projectObject) {
    Project.all.push(new Project(projectObject));
  });
}

// Function that retrieves the data from either a local or remote
// source, and processes it, then hands off control to the View.
Project.fetchAll = function() {
  if (localStorage.rawData) {
    // When rawData is already in localStorage,
    // load it with the .loadAll function above,
    // and then render the index page (using the proper method on the articleView object).
    Project.loadAll($.parseJSON(localStorage.rawData)); //DONE: What do we pass in to loadAll()?
     //Method to render the index page
    pageView.initIndexPage();
  } else {
    // When rawData isn't already in localStorage,
    // retrieve the JSON file from the server with AJAX,
    // cache it in localStorage,
    // load all the data into Project.all with the .loadAll function above,
    // render the index page.
    $.getJSON('data/codeProjects.json')
       .then(
       //stringify into localstorage
       function(data) {
         console.log(data)
         localStorage.setItem('rawData', JSON.stringify(data))
         Project.loadAll($.parseJSON(localStorage.rawData));
         pageView.initIndexPage();
       },
       function(err) {
         console.log(err)
       })
  }
}
