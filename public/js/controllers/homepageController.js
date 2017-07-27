'use strict';

var app = app || {};

(function(module) {
  const homepageController = {};

  homepageController.init = () => {
    $('.tab-content').hide();
    $('#about').show();

  }

  module.homepageController = homepageController;
})(app);
