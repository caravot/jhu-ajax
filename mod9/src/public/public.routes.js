(function () {
  'use strict';

  angular.module('public')
  .config(routeConfig);

  /**
   * Configures the routes and views
   */
  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    // Routes
    $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })

    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })

    // categories page
    .state('public.categories', {
      url: '/categories',
      templateUrl: 'src/public/categories/categories.html',
      controller: 'CategoriesController',
      controllerAs: 'categoriesCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })

    .state('public.items', {
      url: '/categories/{category}',
      templateUrl: 'src/public/items/items.html',
      controller: 'ItemsController',
      controllerAs: 'itemsCtrl',
      resolve: {
        menuItems: ['$stateParams', 'MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    ;
  }
})();
