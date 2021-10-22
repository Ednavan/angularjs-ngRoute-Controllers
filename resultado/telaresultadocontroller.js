exibindo.controller('ctrmostraresultado', function($scope, $location){

    
    var dadoSearch = $location.search();
    console.log(dadoSearch)

    var soma;
    soma=(parseInt(dadoSearch.valor1) + parseInt(dadoSearch.valor2))


    $scope.valor1 = "Valor 1"
        $scope.dd= dadoSearch.valor1
    $scope.valor2 = "Valor 2"
        $scope.myValor2 = dadoSearch.valor2
    $scope.mostrandoresult = "Resultado"
        $scope.result = soma;
    
})