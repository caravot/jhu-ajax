(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.service('ShoppingListService', ShoppingListService)
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.filter('price', PriceFilter);

  function PriceFilter() {
    return function (input, prefix) {
      console.log(input, prefix);
      return prefix + parseFloat(input).toFixed(2);
    };
  }

  function ShoppingListService() {
    var service = this;

    // List of shopping items
    var toBuyItems = [];
    var boughtItems = [];

    // add new shopping item
    service.addItem = function (itemName, quantity, price) {
      var item = {
        name: itemName,
        quantity: quantity,
        pricePerItem: price
      };
      toBuyItems.push(item);
    };

    // item was bought
    service.boughtItem = function (index) {
      boughtItems.push(toBuyItems[index]);
      toBuyItems.splice(index, 1);
    };

    // get items to buy
    service.getToBuyItems = function () {
      return toBuyItems;
    };

    // get items already bought
    service.getBoughtItems = function () {
      return boughtItems;
    };

    // get total of items already bought
    service.getTotalCost = function () {
      var totalCost = 0;
      angular.forEach(boughtItems, function(item, key) {
        totalCost += item.quantity * item.pricePerItem;
      });
      console.log(totalCost);
      return totalCost;
    };
  }

  ToBuyController.$inject = ['$scope', 'ShoppingListService'];
  function ToBuyController($scope, ShoppingListService) {
    // initial shopping list
    var list = [
      { name: "cookies", quantity: 10, pricePerItem: 2 },
      { name: "milk", quantity: 1, pricePerItem: 2.35 },
      { name: "bananas", quantity: 5, pricePerItem: 0.20 },
      { name: "soda", quantity: 12, pricePerItem: 1.50 }
    ];

    // add shopping list items to service
    for (var i = 0; i < list.length; i++) {
      try {
        ShoppingListService.addItem(list[i].name, list[i].quantity, list[i].pricePerItem);
      } catch (error) {
        console.log(error);
      }
    }

    // get the items to buy
    $scope.items = ShoppingListService.getToBuyItems();

    // user clicks to purchase item
    $scope.boughtItem = function (itemIndex) {
      ShoppingListService.boughtItem(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['$scope', 'ShoppingListService'];
  function AlreadyBoughtController($scope, ShoppingListService) {
    $scope.items = ShoppingListService.getBoughtItems();
    $scope.getTotalCost = function() {
      return ShoppingListService.getTotalCost();
    }
  }
})();