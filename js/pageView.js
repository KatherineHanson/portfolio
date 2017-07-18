'use strict'

// Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var pageView = {};

pageView.handleMainNav = function() {
  // $('.navbar-header').on('click', 'button', function() {
  //   $('.nav li').toggle();
  // });

  $('.navbar-header').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

  $('.navbar-header .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
};

// Call all of the above functions, once we are sure the DOM is ready.
pageView.initIndexPage = function() {
  Project.all.forEach(function(article) {
    $('#projects').append(article.toHtml());
  });

  pageView.handleMainNav();
};

// $(document).ready(function() {
//   // pageView.populateFilters();
//   pageView.handleMainNav();
// })
