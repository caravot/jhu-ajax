(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .service('MenuSearchService', MenuSearchService)
        .controller('NarrowItDownController', NarrowItDownController)
        .directive('foundItems', FoundItems)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");



    // 6. Declare and create `foundItems` directive. The list should be displayed using this `directive` which
    // takes the `found` array of items specified on it as an attribute (think one-way binding with '<'). To
    // implement the functionality of the "Don't want this one!" button, the directive should also provide an
    // on-remove attribute that will use function reference binding to invoke the parent controller removal
    // an item from the `found` array based on an index into the `found` array.
    function FoundItems() {
        var ddo = {
            restrict: 'E',
            scope: {
                foundItems: '<',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'menu',
            bindToController: true,
            templateUrl: 'loader/itemsfound.template.html'
            //template: '{{ item.short_name }} of {{ item.name }}'
        };

        return ddo;
    }


    function FoundItemsDirectiveController() {
        var menu = this;

        menu.cookiesInList = function () {
            for (var i = 0; i < list.items.length; i++) {
                var name = list.items[i].name;
                if (name.toLowerCase().indexOf("cookie") !== -1) {
                    return true;
                }
            }

            return false;
        };
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];

    function MenuSearchService($http, ApiBasePath) {
        var service = this;

        var foundItems = [];

        // https://davids-restaurant.herokuapp.com/menu_items.json
        service.getMatchedMenuItems = function (searchTerm) {
            // var response = $http({method: "GET", url: ("loader/data.json")}).then(function (result) {
            //     console.log(result);
            // });

            // return processed items
            //return response;
            return $http({method: "GET", url: ("loader/data.json")});
        };

        service.removeItem = function (itemIndex) {
            console.log("'this' is: ", this);
            items.splice(itemIndex, 1);
        };

        //    The index should be passed in from the directive to the controller. (Note that we implemented almost
        // identical type of behavior in the Lecture 30 Part 2, so as long as you understood that code, it should
        // be very close to copy/paste). In the NarrowItDownController, simply remove that item from the `found`
        // array. You can do that using the [Array's splice() method](
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).
        // For example, to remove
        //    an item with the index of 3 from the `found` array, you would call `found.splice(3, 1);`.
        //
    }

    NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];

    function NarrowItDownController($scope, MenuSearchService) {
        var menu = this;
        $scope.foundItems = [];

        menu.removeItem = function (itemIndex) {
            console.log("'this' is: ", this);
            this.lastRemoved = "Last item removed was " + this.items[itemIndex].name;
            shoppingList.removeItem(itemIndex);
            this.title = origTitle + " (" + list.items.length + " items )";
        };

        $scope.narrowItDown = function () {
            var promise = MenuSearchService.getMatchedMenuItems($scope.searchTerm);

            promise.then(function (response) {
                $scope.foundItems = response.data.data;
                console.log($scope.foundItems);
            }).catch(function (error) {
                console.log(error);
            });
        };
    }
})();