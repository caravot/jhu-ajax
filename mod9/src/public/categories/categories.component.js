(function () {
  "use strict";

  angular.module('public')
  .component('menuCategory', {
    templateUrl: 'src/public/categories/menu-category.html',
    bindings: {
      category: '<'
    }
  });
})();
