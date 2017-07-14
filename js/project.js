'use strict';

var projects = [];

// Project Data Constructor Function
function Project(rawDataObj) {
  this.imageSRC = rawDataObj.imageSRC;
  this.imageAlt = rawDataObj.imageAlt;
  this.finishedOn = rawDataObj.finishedOn;
  this.projectName = rawDataObj.projectName;
  this.projectSummary = rawDataObj.projectSummary;
  this.category = rawDataObj.category;
}

// Project Data Render Function
Project.prototype.toHtml = function() {
  var source = $('#project-template').html();
  var comp = Handlebars.compile(source);

  return comp(this);
};

rawData.sort(function(a,b) {
  return (new Date(b.finishedOn)) - (new Date(a.finishedOn));
});

rawData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(article) {
  $('#projects').append(article.toHtml());
});
