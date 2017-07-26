'use strict';

var app = app || {};

(function(module) {
  const portfolioController = {};

  portfolioController.init = function() {
    $('.tab-content').hide();
    $('#projects').show();
  }

  module.portfolioController = portfolioController;
})(app);
