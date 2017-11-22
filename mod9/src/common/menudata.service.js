(function () {
  "use strict";

  angular.module('common')
  .service('MenuDataService', MenuService);

  MenuService.$inject = ['$http', 'ApiPath'];

  function MenuService($http, ApiPath) {
    var service = this;

    // get all categories for menu
    service.getAllCategories = function () {
      return $http.get(ApiPath + '/categories.json').then(function (response) {
        return response.data;
      });
    };

    // get items for a category
    service.getItemsForCategory = function (category) {
      var config = {};

      if (category) {
        config.params = { 'category': category };
      }

      return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
        return response.data;
      });
    };
  }
})();
