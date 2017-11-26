(function () {
  "use strict";

  angular.module('public')
  .controller('SignupController', SignupController);

  /**
   * Handles login form credentials and redirects user to page.
   */
  // SignupController.$inject = ['$state', 'LoginService', 'CurrentUserService'];
  SignupController.$inject = ['$state'];

  // function SignupController($state, LoginService, CurrentUserService) {
  function SignupController($state) {
    var $ctrl = this;

    $ctrl.firstname = '';
    $ctrl.lastname = '';
    $ctrl.email = '';
    $ctrl.phone = '';
    $ctrl.favorite = '';

    /**
     * Handles when user clicks the login button.
     */
    $ctrl.login = function () {
      LoginService.getAccessToken($ctrl.username, $ctrl.password).then(function (accessToken) {
        CurrentUserService.saveToken($ctrl.username, accessToken);

        // If user went directly to login page, redirect to admin home
        if (!$state.params || !$state.params.toState) {
          $state.go('admin.auth');
        }
        else {
          $state.go($state.params.toState.name, $state.params.toParams);
        }
      }, function (response) {
        // Login failed
        $ctrl.error = "Login Failed: Username and/or Password did not match.";
      });
    };

    $ctrl.valid = function () {
      return ($ctrl.firstname !== '' && $ctrl.lastname !== '' &&
        $ctrl.email !== '' && $ctrl.phone !== '' && $ctrl.favorite !== '');
    };
  }
})();
