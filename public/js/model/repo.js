'use strict';
var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
  //   $.ajax({
  //     url: 'https://api.github.com/user/repos?type=owner',
  //     method: 'GET',
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`
  //     }
  //   })
  //     .then(
  //      data => {
  //        console.log(data);
  //        repos.all = data;
  //      },
  //      err => {
  //        console.error(err);
  //      }
  //     )
  //     .then(
  //       callback
  //     )
  // };
    $.get('github/user/repos')
  .then(data => repos.all = data, err => console.error(err)) // es6 syntax arrow functions
  .then(callback);
  };

  // Model method that filters the full collection for repos with a particular attribute.
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
