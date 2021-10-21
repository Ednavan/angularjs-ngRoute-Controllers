exibindo.controller('ctrinicio', function($scope, $location){
    $scope.titulo ="PÁGINA INICIAL"

    $scope.navegando = function(){
        $location.path('/resultado')
    }
})