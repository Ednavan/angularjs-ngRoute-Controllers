exibindo.controller('ctrinicio', function($scope, $location){
    $scope.inputNumero ="valor 1"


  
    
    $scope.navegando = function(){
       
        var informacaoesparaseremenviadas = {
           
            dados:$scope.teste
        };

        $location.search(informacaoesparaseremenviadas);
        // console.log(informacaoesparaseremenviadas)

        $location.path('/capturaNumber')
        
       
    }
    
})
