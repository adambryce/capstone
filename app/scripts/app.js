var unmindApp = angular.module('unmindApp', ['ui.router']);


unmindApp.config(function($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
             });
         
        $stateProvider
            .state('landing', {
                url: '/',
                controller: 'LandingCtrl',
                templateUrl: '/templates/landing.html'
            })
});
