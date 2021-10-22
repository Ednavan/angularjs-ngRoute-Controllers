angular.module("exibindo").config(function($routeProvider){
    
    $routeProvider.when('/caminhoinicio',{

        controller: 'ctrInicio',
        templateUrl: '../inicio/inicio.html'

    }).when('/resultado',{
        controller: 'ctrMostrarResultado',
        templateUrl: '../resultado/resultado.html'

    }).when('/capturaNumber',{
        controller: 'ctrlCapturaValor',
        templateUrl: '../captura/captura.html'

    }).otherwise('/caminhoinicio');

})

