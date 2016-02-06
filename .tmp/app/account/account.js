(function() {
  'use strict';
  angular.module('aroundThailandApp').config(function($stateProvider) {
    return $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'app/account/login/login.html',
      controller: 'LoginCtrl'
    }).state('signup', {
      url: '/signup',
      templateUrl: 'app/account/signup/signup.html',
      controller: 'SignupCtrl'
    }).state('settings', {
      url: '/settings',
      templateUrl: 'app/account/settings/settings.html',
      controller: 'SettingsCtrl',
      authenticate: true
    });
  });

}).call(this);

//# sourceMappingURL=account.js.map
