exibindo.controller('ctrinicio', function($scope, $location){
    $scope.inputNumero ="valor 1"


    $scope.navegando = function(){
       
        var informacaoesparaseremenviadas = {
            teste: "valor do teste",
            dados:$scope.teste
        };

        $location.search(informacaoesparaseremenviadas);
        console.log(informacaoesparaseremenviadas)

        // $location.path('/capturaNumber')
    }
  
    


        // $location.path('/capturaNumber')
    //   $scope.navegando = function(){
    //     $location.path('/capturaNumber')
    //   }
      
     

    
 
    
    // $scope.dadosInputcaptura = function(){ 
        
    //     $location.search();
    //     console.log()
    // }
})