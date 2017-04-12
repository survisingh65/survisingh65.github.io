/**
 * Created by Ashish on 2/9/2017.
 */
(function(){
   var homeController = function($scope,$rootScope){
     //  $scope.name = "survi";
     //  $scope.num1 = 13;
     //  $scope.num2 = 1;
       $scope.add = function(){
            $scope.total =  $scope.num1 + $scope.num2;
            $rootScope.total = $scope.total;

       }

   }
     var myapp = angular.module("surviapp")
     myapp.controller("homeController", homeController)
})();
