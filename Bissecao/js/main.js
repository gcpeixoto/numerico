// Author - Renê Alves Barbosa | renealves@lavid.ufpb.br

/* recommended */
// main.js

'use strict';

let app = angular.module('numerico', ['ngRoute', 'chart.js', 'restangular']);

app.config(['$routeProvider', 'RestangularProvider', function ($routeProvider, RestangularProvider) {

    $routeProvider
        .when('/', {
            templateUrl   : 'info.html',
            controller    : 'numericoController'
        })
        .otherwise({
            redirectTo: '/'
        });

        RestangularProvider.setBaseUrl('http://150.165.138.215:8080/bissecao');
}]);