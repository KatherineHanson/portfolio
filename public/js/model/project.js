'use strict';

(function(module) {
  // Project Data Constructor Function
  function Project(rawDataObj) {
    Object.keys(rawDataObj).map(key => this[key] = rawDataObj[key]);
  }

  Project.all = [];

  // // Project Data Render Function
  // Project.prototype.toHtml = function() {
  //   let template = Handlebars.compile($('#project-template').text());
  //
  //   return template(this);
  // };

  // Use rawData to instantiate all articles function
  Project.loadAll = rows => {
    rows.sort((a,b) => (new Date(b.publishedOn)) - (new Date(a.publishedOn)));
    Project.all = rows.map(ele => new Project(ele));
  };

  // Function that retrieves the data from either a local or remote
  // source, and processes it, then hands off control to the View.
  Project.fetchAll = () => {
    if (localStorage.rawData) {
      Project.loadAll($.parseJSON(localStorage.rawData));
      pageView.initIndexPage();
    } else {
      $.getJSON('data/codeProjects.json')
         .then(
         data => {
           console.log(data);
           localStorage.setItem('rawData', JSON.stringify(data));
           Project.loadAll($.parseJSON(localStorage.rawData));
           pageView.initIndexPage();
         },
         err => {
           console.log(err);
         })
    }
  }

  module.Project = Project;
})(window);
