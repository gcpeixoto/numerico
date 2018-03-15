// Author - Renê Alves Barbosa | renealves@lavid.ufpb.br

/* recommended */
// menuController.js

'use strict';

app.controller('numericoController', ['$scope', 'Restangular', function ($scope, Restangular) {

    $scope.content = {
        stringExpression : "x^2",
        limInf : -2,
        limSup : 3,
        maxInterations : 30,
        tolerancia: 0.001,
        interation: 0,
        raiz: 0,
        limiteInferior: 0,
        limiteSuperior: 0
    };

    let graohStruture = null;

    $scope.graph = false;
    $scope.maxInteration = 0;

    $scope.changeInteration = function () {
        $scope.labels = graohStruture[$scope.content.interation].x;
        $scope.data = [
            graohStruture[$scope.content.interation].y
        ];
        $scope.content.limiteSuperior = graohStruture[$scope.content.interation].limiteSuperior;
        $scope.content.limiteInferior = graohStruture[$scope.content.interation].limiteInferior;
    };

    $scope.bicessao = function () {
        Restangular.one("").customPOST($scope.content).then(function (response) {
            graohStruture = response.response.graphs;
            $scope.graph = true;
            $scope.labels = response.response.graphs[$scope.content.interation].x;
            $scope.content.limiteSuperior = response.response.graphs[$scope.content.interation].limiteSuperior;
            $scope.content.limiteInferior = response.response.graphs[$scope.content.interation]. limiteInferior;
            $scope.maxInteration = response.response.graphs.length;
            $scope.content.raiz = response.response.root;
            $scope.series = [$scope.content.stringExpression];
            $scope.data = [
                response.response.graphs[$scope.content.interation].y
            ];
            toastr.success('Teste', 'Sucesso');
        }, function () {
            toastr.error('Teste', 'Erro');
        });
    };



    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40]
    ];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];

    $scope.options = {
        scales: {
            yAxes: [
                {
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left'
                }
            ]
        }
    };

}]);
