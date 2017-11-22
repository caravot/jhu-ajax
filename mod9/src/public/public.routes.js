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
        menuCategories: ['MenuDataService', function (MenuService) {
          return MenuService.getAllCategories();
        }]
      }
    })

    .state('public.items', {
      url: '/categories/{category}',
      templateUrl: 'src/public/items/items.html',
      controller: 'ItemsController',
      controllerAs: 'itemsCtrl',
      resolve: {
        menuItems: ['$stateParams', 'MenuDataService', function ($stateParams, MenuService) {
          return MenuService.getItemsForCategory($stateParams.category);
        }]
      }
    })
    ;
  }
})();
