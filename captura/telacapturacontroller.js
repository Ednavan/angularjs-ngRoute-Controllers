exibindo.controller('ctrlcapturavalor',function($scope, $location){
    $scope.inputSoma = "valor 2"

    $scope.navegando = function(){
        var dadoSearch = $location.search();
        var informacoesparasomar = {
            valor1: dadoSearch.dados,
            valor2:$scope.capturavalor
        }
        $location.search(informacoesparasomar)
       
       
        $location.path('/resultado')

        
        
    }
  
   
    })
    
