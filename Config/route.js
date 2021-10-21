angular.module("exibindo").config(function($routeProvider){
    $routeProvider.when('/caminhoinicio',{
        controller: 'ctrinicio',
        templateUrl: '../inicio/inicio.html'
    }).when('/resultado',{
        controller: 'ctrmostraresultado',
        templateUrl: '../resultado/resultado.html'

    }).otherwise('/caminhoinicio');


})

