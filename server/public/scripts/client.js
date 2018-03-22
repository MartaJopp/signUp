var myApp = angular.module('myApp', ['ngRoute']);
// myApp.constant('moment', moment);
/// Routes ///
myApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    console.log('myApp -- config')
    
    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'LoginController as lc',
        })
        .otherwise({
            redirectTo: 'home'
        });
});
