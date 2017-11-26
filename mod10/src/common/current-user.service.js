(function () {
  "use strict";

  angular.module('common')
  .service('CurrentUserService', CurrentUserService);

  /**
   * Used to store and track information about the currently logged in user.
   * This is intended to be injected any time we need some user metadata
   * or to find out if the user is authenticated.
   **/
  function CurrentUserService() {
    var service = this;
    var _username = '';
    var _accessToken = '';
    var _user = {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      favorite: ''
    };

    /**
     * Load the current user with username and token
     */
    service.saveToken = function (username, user, token) {
      _username = username;
      _user = user;
      _accessToken = token;
    };


    service.getUsername = function () {
      return _username;
    };


    service.getUser = function () {
      return _user;
    };


    service.getAccessToken = function () {
      return _accessToken;
    };


    service.isAuthenticated = function () {
      return _accessToken !== '';
    };
  }
})();
