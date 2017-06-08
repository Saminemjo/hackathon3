angular.module('app', ['ui.router', 'ui.bootstrap'])
.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}]);
