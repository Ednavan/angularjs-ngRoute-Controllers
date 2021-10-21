exibindo.controller('ctrinicio', function($scope, $location){
    $scope.inputNumero ="valor 1"


    $scope.navegando = function(){
        $location.path('/capturaNumber')
        $location.search({
            teste: "value"
        })

        var search = $location.search()
        console.log(search)

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