'use strict'

// Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var pageView = {};

pageView.handleMainNav = function() {

  $('.navbar-header').on('click', 'button', function() {
    $('.nav li').toggle();
  });

  $('.navbar-header').on('click', '.tab', function() {
    $('.tab-content').hide();
    // console.log($('.tab-content'));
    $('#' + $(this).data('content')).fadeIn();
    // console.log($('#' + $(this).data('content')).html());
  });

  $('.navbar-header .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
};

// TODO: Call all of the above functions, once we are sure the DOM is ready.
$(document).ready(function() {
  // pageView.populateFilters();
  pageView.handleMainNav();
})
