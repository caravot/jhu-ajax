(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', MsgController);

  MsgController.$inject = ['$scope'];
  function MsgController($scope) {
    // declare initial variables
    $scope.message = "";
    $scope.dishes = "";

    // check dishes listed
    $scope.checkDishes = function () {
      // split dishes into array or if blank create an array
      var dishArr = ($scope.dishes).split(',') || [];

      // remove any items that are blank from list
      dishArr = dishArr.filter(function(n){ return n });

      // if no dishes provided
      if (dishArr.length === 0) {
        $scope.message = "Please enter data first!";
        $scope.messageClass = "text-danger border-red";
      }
      // three or less dishes provided
      else if (dishArr.length <= 3) {
        $scope.message = "Enjoy!";
        $scope.messageClass = "text-success border-green";
      }
      // more then three dishes provided
      else {
        $scope.message = "Too much!";
        $scope.messageClass = "text-success border-green";
      }
    };
  }
})();
