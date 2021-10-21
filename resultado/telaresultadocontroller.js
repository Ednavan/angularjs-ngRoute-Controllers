exibindo.controller('ctrmostraresultado', function($scope, $location){
    $scope.titulo ="HELLO WORLD"
    
    $scope.navegando = function(){
        $location.path('/caminhoinicio')
    }
})