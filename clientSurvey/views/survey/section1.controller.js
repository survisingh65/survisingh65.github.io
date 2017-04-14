(function(){
    var section1Controller = function($scope, $rootScope, $location){
        $scope.OnNextSubmit = function(){
            $location.path("/section2");

        }
    }

    var myapp = angular.module("surviapp")
    myapp.controller("section1Controller", section1Controller)
})();
