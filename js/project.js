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

Project.prototype.toHtml = function() {
  // var $newProject = $('article.template').clone();
  // $newProject.removeClass('template');
  //
  // $newProject.attr('data-category', this.category);
  //
  // $newProject.find('img').attr('src', this.imageSRC);
  // $newProject.find('img').attr('alt', this.imageAlt);
  // $newProject.find('time').html(this.finishedOn);
  // $newProject.find('h4').html('Project Name: ' + this.projectName);
  // $newProject.find('section').html(this.projectSummary);
  //
  // return $newProject;
  var source = $('#article-template').html();
  var comp = Handlebars.compile(source);

  return comp(this);
};

rawData.sort(function(a,b) {
  // console.log(new Date(b.finishedOn)) - (new Date(a.finishedOn));
  return (new Date(b.finishedOn)) - (new Date(a.finishedOn));
});

rawData.forEach(function(projectObject) {
  // console.log(projects);
  projects.push(new Project(projectObject));
  // console.log(projects);
});

projects.forEach(function(article) {
  // console.log($('#projects').find('h4').html());
  $('#projects').append(article.toHtml());
  // console.log($('#projects').find('h4').html());
});
