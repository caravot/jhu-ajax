(function () {
  "use strict";

  angular.module('public', [])
  .component('menuCategory', {
    templateUrl: 'src/public/categories/categories.html',
    bindings: {
      category: '<'
    }
  });
})();
