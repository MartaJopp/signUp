var myApp = angular.module('myApp', ['ngRoute']);
// myApp.constant('moment', moment);
/// Routes ///
myApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    console.log('myApp -- config')
    
    $routeProvider
        .when('/home', {
            templateUrl: '/views/home.html',
            controller: 'HomeController as hc',
        })
        .otherwise({
            redirectTo: 'home'
        });
});
