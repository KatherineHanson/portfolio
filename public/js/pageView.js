'use strict'

// Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var pageView = {};

pageView.handleMainNav = function() {
  $('.navbar-header').on('click', 'button', function() {
    $('li').toggleClass('li');
  });

  $('.navbar-header').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

  // Trigger a click on the first .tab element, to set up the page.
  $('.navbar-header .tab:first').click();
};

// Call all of the above functions, once we are sure the DOM is ready.
pageView.initIndexPage = function() {
  Project.all.forEach(function(article) {
    $('#projects').append(article.toHtml());
  });

  pageView.handleMainNav();
};
