(function(){
   var q2Controller = function($scope,$rootScope){
       $scope.OnSubmit = function(){
            var x = $scope.radioValue;
            console.log(x);
       }

   }
     var myapp = angular.module("surviapp")
     myapp.controller("q2Controller", q2Controller)
})();
