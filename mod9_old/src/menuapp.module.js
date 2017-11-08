(function () {
  "use strict";

  /**
   * Restaurant module that includes the public module as a dependency
   */
  angular.module('MenuApp', ['public'])
  .config(config)
  ;

  config.$inject = ['$urlRouterProvider'];

  function config($urlRouterProvider) {
    console.log("hellO", $urlRouterProvider);
    // If user goes to a path that doesn't exist, redirect to public root
    //$urlRouterProvider.otherwise('/');
  }

})();
