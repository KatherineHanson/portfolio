'use strict';

// Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var pageView = {};

pageView.handleMainNav = () => {
  $('.navbar-header').on('click', 'button', () => {
    $('li').toggleClass('li');
  });

  $('.navbar-header').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

  // Trigger a click on the first .tab element, to set up the page.
  $('.navbar-header .tab:first').click();
};

let sleepHours = [7,7,7,7,7,7,7];
pageView.calculateSleepHours = sleepHours => {
  let sleepTotal = sleepHours.reduce((sum, value) => {
    return sum + value;
  }, 0);
  console.log('You slept ' + sleepTotal + ' hours this week!');
}

// Call all of the above functions, once we are sure the DOM is ready.
pageView.initIndexPage = () => {
  Project.all.map(article => $('#projects').append(article.toHtml()))

  pageView.handleMainNav();
  pageView.calculateSleepHours(sleepHours);
};
