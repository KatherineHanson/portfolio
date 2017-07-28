'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  // REVIEW: Private methods declared here live only within the scope of the wrapping IIFE.
  const ui = function() {
    let $projects = $('#projects'); // Best practice: Cache the DOM query if it's used more than once.

  };

  // EASY COMPILE function -- uses the render from down below.
  let render = Handlebars.compile($('#repo-template').text());

  repoView.index = function() {
    ui();

    // The jQuery `append` method lets us append an entire array of HTML elements at once:
    $('#projects .container').append(
      app.repos.with('name').map(render) // Want to filter by a different property other than name?
    );
  };

  module.repoView = repoView;
})(app);
