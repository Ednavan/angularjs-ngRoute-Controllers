exibindo.controller('ctrInicio', function($scope, $location){
    $scope.inputNumero ="valor 1"

    $scope.navegando = function(){
        var informacaoesParaSeremEnviadas = {
            dados:$scope.teste
        };
        
        $location.search(informacaoesParaSeremEnviadas);
        $location.path('/capturaNumber')       
    }
    
})
