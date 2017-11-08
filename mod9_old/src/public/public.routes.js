(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })

  // Home page
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

  // items for a given category
  .state('public.items', {
    url: '/items/{category}',
    templateUrl: 'src/public/items/items.html',
    controller: 'MenuItemsController',
    controllerAs: 'menuItemsCtrl',
    resolve: {
      menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
        return MenuService.getMenuItems($stateParams.category);
      }]
    }
  });
}
})();
