/**
 * Created by Ashish on 2/9/2017.
 */
(function(){
     var contactController = function($scope){
         $scope.jsondetails = {name: "survu", phone:"23456789"}

         $scope.contacts = [{name: "survu", phone:"23456789"},
             {name: "singh", phone:"23456789"},
             {name: "Ashish", phone:"23456789"},
             {name: "Khanna", phone:"23456789"}]
        // $scope.total = $rootScope.total;
     }
     var myapp = angular.module("surviapp");
    myapp.controller("contactController", contactController);

})();