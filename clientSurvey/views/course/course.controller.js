/**
 * Created by Ashish on 2/9/2017.
 */
(function(){
    var courseController = function($scope){
     $scope.name = "suuu";
     $scope.c = 0;
     $scope.counter = function(){
         $scope.c = $scope.c +1;

        }
    }

    var myapp = angular.module("surviapp");
    myapp.controller("cc" , courseController)
})();
