'use strict';

(function(module) {
  // Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
  const pageView = {};

  let sleepHours = [7,7,7,7,7,7,7];
  pageView.calculateSleepHours = sleepHours => {
    let sleepTotal = sleepHours.reduce((sum, value) => {
      return sum + value;
    }, 0);
    console.log('You slept ' + sleepTotal + ' hours this week!');
  }

  // Call all of the above functions, once we are sure the DOM is ready.
  pageView.initIndexPage = () => {
    Project.all.map(article => $('#projects').append(article.toHtml()));

    pageView.calculateSleepHours(sleepHours);
  };

  module.pageView = pageView;
})(window);
