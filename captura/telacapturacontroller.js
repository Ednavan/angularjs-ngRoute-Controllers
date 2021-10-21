exibindo.controller('ctrlcapturavalor',function($scope, $location){
    $scope.inputSoma = "valor 2"

    $scope.navegando = function(){
        // $location.path('/resultado')
        $location.search({
            teste: "value"
        })

        var search = $location.search()
        console.log(search)

    }
    

    
})