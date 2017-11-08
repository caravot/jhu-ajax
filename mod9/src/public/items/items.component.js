(function () {
  "use strict";

  angular.module('public')
  .component('categoryItem', {
    templateUrl: 'src/public/items/category-item.html',
    bindings: {
      item: '<',
      category: '<'
    }
  });
})();
