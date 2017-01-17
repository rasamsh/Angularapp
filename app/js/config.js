/**
 * Created by shashank on 12/28/16.
 */

var testingAngularApp = angular.module('testingAngularApp',['ui.router']);

testingAngularApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: './views/view.html'
        })

        .state('Page1', {
            url: '/Page1',
            templateUrl: './views/view1.html'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('Page2', {
            url: '/Page2',
            templateUrl: './views/view2.html'
        })

    .state('Page3', {
        url: '/page3',
        templateUrl: './views/view3.html'
    });

});