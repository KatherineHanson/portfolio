'use strict';

// Project Data Constructor Function
function Project(imageName,imageLink,projectName,projectSummary) {
  this.imageName = imageName;
  this.imageLink = imageLink;
  this.projectName = projectName;
  this.projectSummary = projectSummary;
}

var aboutMe = new Project('About Me','https://katherinehanson.github.io/about-me/','About Me Page','My first About Me page');

console.log(aboutMe);
