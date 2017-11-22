(function () {
  "use strict";

  angular.module('public')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['menuItems'];

  function ItemsController(menuItems) {
    var $ctrl = this;

    $ctrl.categoryItems = menuItems.menu_items;
    $ctrl.categoryInfo = menuItems.category;
  }

})();
