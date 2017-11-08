(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .service('MenuSearchService', MenuSearchService)
  .controller('NarrowItDownController', NarrowItDownController)
  .directive('foundItems', FoundItems)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  // custom directive to show items
  function FoundItems() {
    var ddo = {
      restrict: 'E',
      scope: {
        foundItems: '<',
        onRemove: '&'
      },
      templateUrl: 'loader/itemsfound.template.html'
    };

    return ddo;
  }

  MenuSearchService.$inject = ['$http', '$filter', 'ApiBasePath'];

  function MenuSearchService($http, $filter, ApiBasePath) {
    var service = this;

    service.foundItems = [];

    // get all items that contain the search term
    service.getMatchedMenuItems = function (searchTerm) {
      return $http({method: "GET", url: ApiBasePath + '/menu_items.json'}).then(function(response) {
        service.foundItems = $filter('filter')(response.data.menu_items, searchTerm);
        return service.foundItems;
      });
    };

    // remove item from menu list
    service.removeItem = function (itemIndex) {
      service.foundItems.splice(itemIndex, 1);
    };
  }

  NarrowItDownController.$inject = ['MenuSearchService'];

  function NarrowItDownController(MenuSearchService) {
    var menu = this;

    // init variables to be used
    menu.foundItems = [];
    menu.searchTerm = '';

    // get list of items containing user's search term
    menu.narrowItDown = function () {
      var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);

      promise.then(function (response) {
        menu.foundItems = response;
      }).catch(function (error) {
        console.log(error);
      });
    };

    // remove item from menu list
    menu.removeItem = function (itemIndex) {
      MenuSearchService.removeItem(itemIndex);
    };
  }
})();