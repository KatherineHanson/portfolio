'use strict';

var app = app || {};

(function(module) {
  const portfolioController = {};

  portfolioController.init = () => {
    $('.tab-content').hide();
    $('#projects').show();

    app.repos.requestRepos(app.repoView.index);
  }

  module.portfolioController = portfolioController;
})(app);
