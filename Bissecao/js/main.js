// Author - Renê Alves Barbosa | renealves@lavid.ufpb.br

/* recommended */
// main.js

'use strict';

let app = angular.module('numerico', ['ngRoute', 'chart.js', 'restangular']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl   : 'info.html',
            controller    : 'numericoController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);