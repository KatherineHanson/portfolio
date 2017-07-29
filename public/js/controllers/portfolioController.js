'use strict';

var app = app || {};

(function(module) {
  const portfolioController = {};

  // function calling the projects data to define the view we will see. It uses the portfolioView.index function located in this file.
  portfolioController.index = (ctx) => app.pageView.index(ctx.projects);

  // Middleware for grabbing all projects:
  portfolioController.loadAll = (ctx, next) => {
    let projectData = () => {
      ctx.projects = app.Project.all;
      next();
    };

    if (app.Project.all.length) {
      ctx.projects = app.Project.all;
      next();
    } else {
      app.Project.fetchAll(projectData);
    }
  };

  // portfolioController.init = () => {
  //   $('.tab-content').hide();
  //   $('#projects').show();
  //
  //   app.repos.requestRepos(app.repoView.index);
  // }

  module.portfolioController = portfolioController;
})(app);
