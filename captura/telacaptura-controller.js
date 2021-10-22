exibindo.controller('ctrlCapturaValor',function($scope, $location){
    $scope.inputSoma = "valor 2"

    $scope.navegando = function(){
        var dadoSearch = $location.search();
        var informacoesParaSomar = {
            valor1: dadoSearch.dados,
            valor2:$scope.capturavalor
        }
        $location.search(informacoesParaSomar)
       
        $location.path('/resultado')   
    }  
 })
    
