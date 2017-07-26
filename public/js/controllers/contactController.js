'use strict';

var app = app || {};

(function(module) {
  const contactController = {};

  contactController.init = () => {
    $('.tab-content').hide();
    $('#contact').fadeIn();
  }

  module.contactController = contactController;
})(app);
