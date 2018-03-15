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

        RestangularProvider.setBaseUrl('https://fierce-falls-84562.herokuapp.com/bissecao');
}]);